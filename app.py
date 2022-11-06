from flask import Flask, request
from client import getCiphertext, computePartialDecryption, decryptMessage
from flask_cors import cross_origin, CORS

import json

app = Flask(__name__)
CORS(app)

# call at the beginning, only once
@app.route('/get-ciphertext', methods=['GET'])
@cross_origin()
def getCiphertextServer():
    return getCiphertext()

# call three times, with signer_index = 0, 1, and 2
@app.route('/compute-partial-decryption', methods=['POST'])
@cross_origin()
def computePartialDecryptionServer():
    rawData = request.data.decode('utf-8')
    data = json.loads(rawData)

    print(data)

    signer_index = int(data['signer_index'])
    print(signer_index)

    partialDecryption = computePartialDecryption(signer_index)
    res = str(partialDecryption)

    return res

@app.route('/decrypt-message', methods=['GET'])
@cross_origin() 
def decryptMessageServer():
    result = decryptMessage()

    return str(result)