from flask import Flask, request, jsonify
from flask_bcrypt import Bcrypt
from flask_mail import Mail, Message
from Crypto.Cipher import AES
import base64
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app, resources={r"/*": {"origins": "*"}})

class Cache:
    def __init__(self):
        self.emails = []

    def add_email(self, email):
        self.emails.append(email)

    def add_emails(self, emails):
        self.emails.extend(emails)

    def delete_emails(self):
        self.emails = []

    def get_emails(self):
        return self.emails.copy()

cache = Cache()

@app.route('/sendMail', methods=['POST'])
def sendMail():
    data = request.get_json()
    print('Received encryption request:', data)

    sender_email = data["sender_email"]
    sender_password = data["sender_password"]
    receivers_emails = data.get("receivers_emails", [])
    message_body = data["message_body"]

    app.config['MAIL_SERVER'] = 'smtp.gmail.com'
    app.config['MAIL_PORT'] = 465
    app.config['MAIL_USERNAME'] = sender_email
    app.config['MAIL_PASSWORD'] = sender_password
    app.config['MAIL_USE_TLS'] = False
    app.config['MAIL_USE_SSL'] = True

    mail = Mail(app)

    # AES encryption
    key = b'Sixteen byte key'
    cipher = AES.new(key, AES.MODE_EAX)
    ciphertext, tag = cipher.encrypt_and_digest(message_body.encode('utf-8'))

    encrypted_message = base64.b64encode(cipher.nonce + tag + ciphertext).decode('utf-8')

    for email in receivers_emails:
        msg = Message(
            'ENCRYPTED MAIL',
            sender=sender_email,
            recipients=[email]
        )
        msg.body = encrypted_message
        print("\n## ==== SENDING MESSAGE ==== ##\n")
        print(msg)
        print("\n## ==== MESSAGE SENT ==== ##\n")
        mail.send(msg)
        print(msg)
    cache.add_emails(receivers_emails)

    return jsonify({"alert": "SENT"})

@app.route('/decrypt', methods=['POST'])
@cross_origin()
def decrypt_msg():
    data = request.get_json()
    encrypted_message = data['encrypted_message']

    encrypted_message = base64.b64decode(encrypted_message)
    nonce = encrypted_message[:16]
    tag = encrypted_message[16:32]
    ciphertext = encrypted_message[32:]

    # AES decryption
    key = b'Sixteen byte key'
    cipher = AES.new(key, AES.MODE_EAX, nonce)
    decrypted_message = cipher.decrypt_and_verify(ciphertext, tag).decode('utf-8')

    return jsonify({"message": decrypted_message})

@app.route('/deleteEmails', methods=['DELETE'])
def delete_emails():
    cache.delete_emails()
    return jsonify({"message": "Emails deleted from cache."})

@app.route('/getEmails', methods=['GET'])
def get_emails():
    emails = cache.get_emails()
    return jsonify({"emails": emails})

if __name__ == "__main__":
    app.run(debug=True)
