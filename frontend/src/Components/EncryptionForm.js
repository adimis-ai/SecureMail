import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Modal from './Modal';
import { RiMailAddLine } from 'react-icons/ri';
import './Form.css';

const BASE_URL = "http://localhost:5000";

function EncryptionForm() {
  const { isAuthenticated } = useAuth0();
  const [senderEmail, setSenderEmail] = useState('');
  const [senderPassword, setSenderPassword] = useState('');
  const [receiverEmails, setReceiverEmails] = useState([]);
  const [messageBody, setMessageBody] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  function handleAddReceiverEmail(event) {
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      const email = event.target.value.trim();
      if (!receiverEmails.includes(email)) {
        setReceiverEmails((prevEmails) => [...prevEmails, email]);
      }
      event.target.value = '';
    }
  }

  function handleRemoveReceiverEmail(email) {
    setReceiverEmails((prevEmails) =>
      prevEmails.filter((prevEmail) => prevEmail !== email)
    );
  }

  function handleEncryption() {
    const data = {
      sender_email: senderEmail,
      sender_password: senderPassword,
      receivers_emails: receiverEmails,
      message_body: messageBody,
    };

    console.log('Sending encryption request:', data);

    fetch(`${BASE_URL}/sendMail`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log('Encryption request successful:', response);
        if (response.ok) {
          setModalMessage('Emails sent successfully.');
          setModalTitle('Encryption');
        } else {
          setModalMessage('Encryption failed. Please try again.');
          setModalTitle('Error');
        }
        setModalOpen(true);
      })
      .catch((error) => {
        console.error('Encryption failed:', error);
        setModalMessage('Encryption failed. Please try again.');
        setModalTitle('Error');
        setModalOpen(true);
      });
  }

  return (
    isAuthenticated && (
      <div className="flex flex-col items-center mt-8">
        <div className="w-full max-w-sm">
          <label htmlFor="sender_email" className="block mb-2 text-gray-700">
            Sender Email:
          </label>
          <input
            id="sender_email"
            type="text"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            className="w-full px-4 py-2 mb-4 leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
          <label htmlFor="sender_password" className="block mb-2 text-gray-700">
            Sender Password:
          </label>
          <input
            id="sender_password"
            type="password"
            value={senderPassword}
            onChange={(e) => setSenderPassword(e.target.value)}
            className="w-full px-4 py-2 mb-4 leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
          <label htmlFor="receiver_emails" className="block mb-2 text-gray-700">
            Receiver Emails:
          </label>
          <div className="relative">
            <input
              id="receiver_emails"
              type="text"
              className="w-full px-4 py-2 mb-4 leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              onKeyDown={handleAddReceiverEmail}
              placeholder="Enter email and press Enter"
            />
            <div className="absolute right-2 top-5 transform -translate-y-1/2">
              <RiMailAddLine
                className="text-gray-500 cursor-pointer"
                size={24}
                onClick={() => {
                  const input = document.getElementById('receiver_emails');
                  if (input && input.value.trim() !== '') {
                    const email = input.value.trim();
                    if (!receiverEmails.includes(email)) {
                      setReceiverEmails((prevEmails) => [...prevEmails, email]);
                    }
                    input.value = '';
                  }
                }}
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-4">
            {receiverEmails.map((email) => (
              <div
                key={email}
                className="flex items-center px-3 py-1 mr-2 mb-2 text-gray-700 bg-gray-200 rounded-full"
              >
                {email}
                <button
                  className="ml-2 focus:outline-none"
                  onClick={() => handleRemoveReceiverEmail(email)}
                >
                  <svg
                    className="w-3 h-3 text-gray-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.3 17.3L12 11l6.3-6.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L11 9 4.7 2.7C4.3 2.3 3.7 2.3 3.3 2.7s-.4 1 0 1.4L9 11 2.7 17.3c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3L11 13l6.3 6.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <label htmlFor="message_body" className="block mb-2 text-gray-700">
            Message Body:
          </label>
          <textarea
            id="message_body"
            value={messageBody}
            onChange={(e) => setMessageBody(e.target.value)}
            className="w-full px-4 py-2 mb-4 leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            rows={4}
          ></textarea>
          <button
            onClick={handleEncryption}
            className="w-full font-bold bg-black text-white rounded-3xl py-3 px-2 hover:bg-white hover:text-black border border-black focus:outline-none focus:shadow-outline"
          >
            Encrypt
          </button>
        </div>
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          message={modalMessage}
          title={modalTitle}
        />
      </div>
    )
  );
}

export default EncryptionForm;
