import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import FormContainer from './FormContainer';

function Navbar() {
  const { isAuthenticated } = useAuth0();
  const [displayForm, setDisplayForm] = useState(false);

  const handleSendMailClick = () => {
    setDisplayForm(true);
  };

  const handleDecryptMailClick = () => {
    setDisplayForm(false); // Set displayForm to true for the decryption form
  };

  return (
    isAuthenticated && (
      <>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a href="/" className="btn btn-ghost normal-case text-xl">SecureMail</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <button
                  className="font-bold bg-black text-white rounded-3xl hover:bg-white hover:text-black border border-black transition"
                  onClick={handleSendMailClick}
                >
                  Send Mail
                </button>
              </li>
              <li>
                <button
                  className="ml-2 font-bold bg-black text-white rounded-3xl hover:bg-white hover:text-black border border-black transition"
                  onClick={handleDecryptMailClick}
                >
                  Decrypt Mail
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <FormContainer displayEncryptionForm={displayForm} />
        </div>
      </>
    )
  );
}

export default Navbar;
