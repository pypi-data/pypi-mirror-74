#!/usr/bin/env python3

from btcpy.structs.script import P2pkhScript, P2shScript
from btcpy.structs.transaction import Sequence, MutableTransaction
from btcpy.structs.address import Address
from btcpy.setup import setup as stp
from base64 import b64encode, b64decode

import cryptos
import hashlib
import json
import datetime
import binascii
import requests

from ..config import bitcoin
from ...utils.exceptions import AddressError, NetworkError, APIError

# Request headers
headers = dict()
headers.setdefault("Content-Type", "application/json")

# Bitcoin configuration
bitcoin = bitcoin()


def decode_transaction_raw(transaction_raw):
    """
    Decode Bitcoin transaction raw.

    :param transaction_raw: Bitcoin transaction raw.
    :type transaction_raw: str
    :returns: dict -- decoded Bitcoin transaction.

    >>> from shuttle.providers.bitcoin.utils import decode_transaction_raw
    >>> decode_transaction_raw(transaction_raw)
    {...}
    """

    transaction_raw = str(transaction_raw + "=" * (-len(transaction_raw) % 4))
    try:
        decoded_transaction_raw = json.loads(b64decode(str(transaction_raw).encode()).decode())
    except (binascii.Error, json.decoder.JSONDecodeError) as _error:
        raise ValueError("invalid Bitcoin transaction raw")
    if "type" not in decoded_transaction_raw or not str(decoded_transaction_raw["type"]).startswith("bitcoin"):
        raise ValueError("invalid Bitcoin transaction raw")
    # Setting testnet
    stp(decoded_transaction_raw["network"], strict=True)
    tx = MutableTransaction.unhexlify(decoded_transaction_raw["raw"])
    return dict(
        fee=decoded_transaction_raw["fee"],
        type=decoded_transaction_raw["type"],
        tx=tx.to_json(),
        network=decoded_transaction_raw["network"]
    )


def submit_payment(tx_raw, network="testnet", timeout=bitcoin["timeout"]):
    if isinstance(tx_raw, str):
        tx = json.dumps(dict(hex=tx_raw))
        response = requests.post(url=bitcoin[network]["smartbit"] + "/pushtx",
                                 data=tx, headers=headers, timeout=timeout)
        if "error" in response.json():
            raise APIError(response.json()["error"]["message"])
        return response.json()
    raise TypeError("transaction raw must be string format!")


def submit_transaction_raw(transaction_raw):
    """
    Submit transaction raw to Bitcoin blockchain.

    :param transaction_raw: Bitcoin transaction raw.
    :type transaction_raw: str
    :returns: dict -- Bitcoin transaction id, fee, type and date.

    >>> from shuttle.providers.bitcoin.utils import submit_transaction_raw
    >>> submit_transaction_raw(transaction_raw)
    {...}
    """

    tx_raw = str(transaction_raw + "=" * (-len(transaction_raw) % 4))
    try:
        # Decoding transaction raw.
        decoded_tx_raw = json.loads(b64decode(str(tx_raw).encode()).decode())
    except (binascii.Error, json.decoder.JSONDecodeError) as _error:
        raise ValueError("invalid Bitcoin transaction raw")
    if "type" not in decoded_tx_raw or not str(decoded_tx_raw["type"]).startswith("bitcoin"):
        raise ValueError("invalid Bitcoin transaction raw")
    submitted = submit_payment(
        tx_raw=decoded_tx_raw["raw"],
        network=decoded_tx_raw["network"]
    )
    return dict(
        fee=decoded_tx_raw["fee"],
        type=decoded_tx_raw["type"],
        transaction_id=submitted["txid"],
        network=decoded_tx_raw["network"],
        date=str(datetime.datetime.utcnow())
    )


def is_address(address, network=None):
    """
    Check Bitcoin address.

    :param address: Bitcoin address.
    :type address: str
    :param network: Bitcoin network, defaults to None.
    :type network: str
    :returns: bool -- Bitcoin valid/invalid address.

    >>> from shuttle.providers.bitcoin.utils import is_address
    >>> is_address(bitcoin_address, "testnet")
    True
    """

    if isinstance(address, str):
        if network is None:
            for boolean in [True, False]:
                valid = False
                if cryptos.Bitcoin(testnet=boolean).is_address(address):
                    valid = True
                    break
            return valid
        if network == "mainnet":
            return cryptos.Bitcoin(testnet=False).is_address(address)
        elif network == "testnet":
            return cryptos.Bitcoin(testnet=True).is_address(address)
        else:
            raise NetworkError("invalid %s network" % network, "only takes mainnet or testnet networks.")
    raise TypeError("address must be string format!")


def sha256(data):
    """
    SHA256 hash.

    :param data: encoded data.
    :type data: bytes
    :returns: bytearray -- hashed sha256.

    >>> from shuttle.providers.bitcoin.utils import sha256
    >>> sha256("Hello Meheret!".encode())
    b"..."
    """

    if isinstance(data, bytes):
        return hashlib.sha256(data).digest()
    raise TypeError("data must be bytes format!")


def double_sha256(data):
    """
    Double SHA256 hash.

    :param data: encoded data.
    :type data: bytes
    :returns: bytearray -- hashed double sha256.

    >>> from shuttle.providers.bitcoin.utils import double_sha256
    >>> double_sha256("Hello Meheret!".encode())
    b"..."
    """

    if isinstance(data, bytes):
        return hashlib.sha256(hashlib.sha256(data).digest()).digest()
    raise TypeError("data must be bytes format!")


def fee_calculator(transaction_input=1, transaction_output=1):
    """
    Bitcoin fee calculator.

    :param transaction_input: transaction input numbers, defaults to 1.
    :type transaction_input: int
    :param transaction_output: transaction output numbers, defaults to 1.
    :type transaction_output: int
    :returns: int -- Bitcoin fee.

    >>> from shuttle.providers.bitcoin.utils import fee_calculator
    >>> fee_calculator(2, 9)
    1836
    """

    # 444 input 102 output
    transaction_input = ((transaction_input - 1) * 444) + 576
    transaction_output = ((transaction_output - 1) * 102)
    return transaction_input + transaction_output


def expiration_to_script(sequence):
    if isinstance(sequence, int):
        if sequence <= 16:
            return "OP_%d" % sequence
        else:
            return Sequence(sequence).for_script()
    raise TypeError("Sequence must be integer format!")


def script_from_address(address, network="testnet"):
    """
    Get script from address.

    :param address: Bitcoin address.
    :type address: str
    :param network: Bitcoin network, defaults to testnet.
    :type network: str
    :returns: P2pkhScript, P2shScript -- Bitcoin p2pkh or p2sh script instance.

    >>> from shuttle.providers.bitcoin.utils import script_from_address
    >>> script_from_address("mrmtGq2HMmqAogSsGDjCtXUpxrb7rHThFH", "testnet")
    P2pkhScript('7b7c4431a43b612a72f8229935c469f1f6903658')
    """

    if not is_address(address, network):
        raise AddressError("invalid %s %s address!" % (network, address))
    load_address = Address.from_string(address)
    get_type = load_address.get_type()
    if str(get_type) == "p2pkh":
        return P2pkhScript(load_address)
    elif str(get_type) == "p2sh":
        return P2shScript(load_address)


def address_to_hash(address, network="testnet"):
    """
    Get hash from address.

    :param address: Bitcoin address.
    :type address: str
    :param network: Bitcoin network, defaults to testnet.
    :type network: str
    :returns: P2pkhScript, P2shScript -- Bitcoin p2pkh or p2sh script instance.

    >>> from shuttle.providers.bitcoin.utils import address_to_hash
    >>> address_to_hash("mrmtGq2HMmqAogSsGDjCtXUpxrb7rHThFH", "testnet")
    "7b7c4431a43b612a72f8229935c469f1f6903658"
    """

    if not is_address(address, network):
        raise AddressError("invalid %s %s address!" % (network, address))
    return Address.from_string(address).hash.hex()
