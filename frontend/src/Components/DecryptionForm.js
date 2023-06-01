// TODO - Adjust and Modify my DecryptionForm component to only send following payload and remove all the element of taking private_key from user `{"encrypted_message": "EZMoXP5FIq5+2zjncpaa+dkPL+gXmsfrVjlJ1KHyn961zQ=="}`

// /home/adimis/Desktop/SecureMail/frontend/src/Components/DecryptionForm.js

import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Modal from './Modal';
import './Form.css';

const BASE_URL = "http://localhost:5000"

function DecryptionForm() {
  const { isAuthenticated } = useAuth0();
  const [encrypted_message, setEncrypted] = useState('');
  const [decrypted_message, setDecrypted] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  function handleDecryption() {
    console.warn({ encrypted_message });
   
    let data = { encrypted_message };
    fetch(`${BASE_URL}/decrypt`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((result) => {
        result.json().then((response) => {
          setDecrypted(response.message);
          setModalOpen(true); // Open the modal with the decrypted message
        });
      })
      .catch((error) => {
        console.error('Decryption failed:', error);
        setDecrypted(''); // Reset decrypted message if decryption fails
        setModalOpen(true); // Open the modal to show an error message
      });
  }

  return (
    isAuthenticated && (
      <div className="flex flex-col items-center mt-8">
        <div className="w-full max-w-sm">
          <label htmlFor="encrypted_message" className="block mb-2 text-gray-700">
            Encrypted Message:
          </label>
          <textarea
            id="encrypted_message"
            value={encrypted_message}
            onChange={(e) => setEncrypted(e.target.value)}
            className="w-full px-4 py-2 mb-4 leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            rows={4}
          ></textarea>
          <button
            onClick={handleDecryption}
            className="w-full font-bold bg-black text-white rounded-3xl py-3 px-2 hover:bg-white hover:text-black border border-black focus:outline-none focus:shadow-outline"
          >
            Decrypt
          </button>
        </div>
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          message={decrypted_message}
          title={"Decryption"}
        />
      </div>
    )
  );
}

export default DecryptionForm;
