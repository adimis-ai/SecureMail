import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './LogoutButton';
import EncryptionForm from './EncryptionForm';
import DecryptionForm from './DecryptionForm';
import { useState } from "react";

function Navbar() {
  const { isAuthenticated } = useAuth0();
  const [encryption, setEncryption] = useState(true);
  const [decryption, setDecryption] = useState(false);
  const EncryptionHandler = () => {
      setEncryption(true);
      setDecryption(false);
  };
  const DecryptionHandler = () => {
      setEncryption(false);
      setDecryption(true);
  };

  return (
    isAuthenticated && (
      <>
        <div className="flex items-center justify-center">
          <div className="inline-flex rounded-3xl py-50" role="group">
            <button
              type="button"
              onClick={EncryptionHandler}
              className="
              rounded-3xl
              px-6
              py-2
              border-2 border-black
              text-black
              font-medium
              text-bold
              leading-tight
              uppercase
              hover:bg-black hover:bg-opacity-5
              focus:outline-none focus:ring-0
              transition
              duration-150
              ease-in-out
              my-5
            "
            >
              SEND MAIL
            </button>
            <button
              type="button"
              onClick={DecryptionHandler}
              className="
              rounded-3xl
              px-6
              my-5
              mx-5
              py-2
              border-2 border-black
              text-black
              font-bold
              text-xs
              leading-tight
              uppercase
              hover:bg-black hover:bg-opacity-5
              focus:outline-none focus:ring-0
              transition
              duration-150
              ease-in-out
            "
            >
              DECRYPT MAIL
            </button>
            <button
              type="button"
              className="
                rounded-3xl
                px-6 
                py-2 
                my-5
                border-2 
                border-black 
                text-black
                font-bold
                text-xs
                leading-tight
                uppercase
                hover:bg-black hover:bg-opacity-5
                focus:outline-none focus:ring-0
                transition
                duration-150
                ease-in-out
              "
            >
              <LogoutButton/>
            </button>
          </div>
        </div>

        <div>
        {encryption && (
              <EncryptionForm />
            )}
            {decryption && (
              <DecryptionForm />
            )}
        </div>
      </>
    )
  )
}

export default Navbar

