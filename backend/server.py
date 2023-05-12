from flask import Flask, request, jsonify, make_response
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required, current_user
from flask_bcrypt import Bcrypt
from flask_mail import Mail, Message
from pymongo import MongoClient
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime
import rsa
import base64
import os

"""
MONGODB_URI = 'mongodb+srv://adimis:root@alicememory.49huuqd.mongodb.net/?retryWrites=true&w=majority'
client = MongoClient(MONGODB_URI)
db = client['SecureEmail'] 
users = db['users']
"""

app = Flask(__name__)

@app.route('/sendMail', methods=['POST'])
def sendMail():
    data = request.get_json()

    sender_email = data["sender_email"]
    sender_password = data["sender_password"]
    receiver_email = data["receiver_email"]
    message_body = data["message_body"]
    
    app.config['MAIL_SERVER'] = 'smtp.gmail.com'
    app.config['MAIL_PORT'] = 465
    app.config['MAIL_USERNAME'] = sender_email
    app.config['MAIL_PASSWORD'] = sender_password
    app.config['MAIL_USE_TLS'] = False
    app.config['MAIL_USE_SSL'] = True

    mail = Mail(app)
    
    # Generate public and private keys
    (pubkey, privkey) = rsa.newkeys(512)
    
    def encrypt_message(message, pub_key):
        # rsa.encrypt() takes bytes, so we need to convert the string to bytes
        message_bytes = message.encode('utf8')
        encrypted = rsa.encrypt(message_bytes, pub_key)
        # rsa.encrypt() returns bytes, but we can't send bytes in JSON, so convert to string
        return base64.b64encode(encrypted).decode('utf8')
    
    encrypted_message = encrypt_message(message_body, pubkey)
    
    msg = Message(
        'ENCRYPTED MAIL',
        sender=sender_email,
        recipients=[receiver_email]
    )
    msg.body = encrypted_message
    mail.send(msg)

    # return the private key for decryption
    privkey_pem = privkey.save_pkcs1().decode('utf8')
    return jsonify({"alert": "SENT", "private_key": privkey_pem})


@app.route('/decrypt', methods=['POST'])
def decrypt_msg():
    data = request.get_json()
    privkey_pem = data['private_key']
    encrypted_message = data['encrypted_message']

    def decrypt_message(encrypted, priv_key):
        # rsa.decrypt() takes bytes, so we need to convert back to bytes
        encrypted_bytes = base64.b64decode(encrypted)
        decrypted = rsa.decrypt(encrypted_bytes, priv_key)
        # rsa.decrypt() returns bytes, but we want to return a string, so convert
        return decrypted.decode('utf8')
    
    privkey = rsa.PrivateKey.load_pkcs1(privkey_pem.encode('utf8'))
    decrypted_message = decrypt_message(encrypted_message, privkey)

    return jsonify({"message": decrypted_message})


if __name__ == "__main__":
    app.run(debug=True)