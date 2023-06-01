// /home/adimis/Desktop/Project_Archieves/SecureMail/frontend/src/Components/FormContainer.js
import React from 'react';
import DecryptionForm from './DecryptionForm';
import EncryptionForm from './EncryptionForm';

const FormContainer = ({ displayEncryptionForm }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-200 p-8 rounded-md">
        {displayEncryptionForm ? (<EncryptionForm/>) : (<DecryptionForm/>)}
      </div>
    </div>
  );
};

export default FormContainer;