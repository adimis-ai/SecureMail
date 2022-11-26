from flask import Flask, request,jsonify
from cryptography.fernet import Fernet
from flask_mail import Mail, Message
import base64
import os
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.fernet import Fernet


app = Flask(__name__)

@app.route('/sendMail', methods=['POST'])
def sendMail():
    data = request.get_json()
    
    sender_email = data["sender_email"]
    sender_password = data["sender_password"] #ewywxcimmnxvrmai
    receiver_email = data["receiver_email"]
    message_body = data["message_body"]
    pass_code = data["pass_code"]
    
    app.config['MAIL_SERVER']='smtp.gmail.com'
    app.config['MAIL_PORT'] = 465
    app.config['MAIL_USERNAME'] = sender_email
    app.config['MAIL_PASSWORD'] = sender_password
    app.config['MAIL_USE_TLS'] = False
    app.config['MAIL_USE_SSL'] = True
    
    mail = Mail(app)
    
    password_provided = pass_code
    password = password_provided.encode()
    salt = os.urandom(16)
    kdf = PBKDF2HMAC(
        algorithm=hashes.SHA256(),
        length=32,
        salt=salt,
        iterations=100000,
        backend=default_backend()
    )
    key = base64.urlsafe_b64encode(kdf.derive(password))
    res = str(key.decode('utf-8')) 
    
    def encrypt_message(message):
        key = res
        encoded = message.encode()
        f = Fernet(key)
        encrypted = f.encrypt(encoded)
        return encrypted  
    
    msg_body = encrypt_message(message_body)
    
    msg = Message(
                    'ENCRYPTED MAIL',
                    sender = sender_email,
                    recipients = [receiver_email]
                )
    msg.body = msg_body
    mail.send(msg)
    
    return jsonify ({"alert": "SENT",
                     "pass_code": res})


@app.route('/decrypt', methods=['POST'])
def decrypt_msg():
    
    data = request.get_json()
    key = data['key']
    encrypted_message = data['encrypted_message']
    
    def decrypt_message(encrypted):
        f2 = Fernet(key)
        decrypted = f2.decrypt(encrypted)
        message = decrypted.decode()
        return message
    
    res = bytes(encrypted_message, 'utf-8')
    msg = decrypt_message(res)

    return jsonify ({"message": msg})

if __name__ == "__main__":
    app.run(debug=True)
    
