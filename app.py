from flask import Flask, request
from client import computePartialDecryption
import json

app = Flask(__name__)

@app.route('/decrypt', methods=['POST'])
def decrypt():
    rawData = request.data.decode('utf-8')
    data = json.loads(rawData)

    encrypted_message = data['encrypted_message']
    encrypted_message_fragments = encrypted_message.split(' ')

    partialDecryption = computePartialDecryption(encrypted_message_fragments[0], encrypted_message_fragments[1], encrypted_message_fragments[2], encrypted_message_fragments[3], encrypted_message_fragments[4])
    res = { 'data': str(partialDecryption) }

    return res