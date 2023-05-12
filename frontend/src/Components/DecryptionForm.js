// /home/adimis/Desktop/SecureMail/frontend/src/Components/DecryptionForm.js

import React, { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import './Form.css'

function DecryptionForm() {

  const { isAuthenticated } = useAuth0();
  /*Decryption Function*/
  const [key,setKey] = useState('')
  const [encrypted_message,setEncrypted] = useState('')
  const [decrypted_message,setDecrypted] = useState('')
  function decryption(){ 
    console.warn({key,encrypted_message});
    let data = {key,encrypted_message}
    fetch("/decrypt",{
      method:'POST',
      headers:{
        "Accept":"application/json",
        "Content-Type": "application/json"
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      result.json().then((response)=>{
        setDecrypted(response)
      })
    })
    console.warn(decrypted_message)
  }

  return (
    isAuthenticated && (
      <div className="background">
          <div className="container">
            <div className="screen">
              <div className="screen-header">
                <div className="screen-header-left">
                  <div className="screen-header-button close" />
                  <div className="screen-header-button maximize" />
                  <div className="screen-header-button minimize" />
                </div>
                <div className="screen-header-right">
                  <div className="screen-header-ellipsis" />
                  <div className="screen-header-ellipsis" />
                  <div className="screen-header-ellipsis" />
                </div>
              </div>
              <div className="screen-body">
                <div className="screen-body-item left">
                  <div className="app-title">
                    <span>DECRYPT</span>
                    <span>MAIL</span>
                  </div>
                </div>
                <div className="screen-body-item">
                  <div className="app-form">
                    <div className="app-form-group">
                      <input className="app-form-control" type="password" value={key} onChange = {(e)=>{setKey(e.target.value)}} name="key" placeholder="KEY" />
                    </div>
                    <div className="app-form-group">
                      <input className="app-form-control" type="email" value={encrypted_message} onChange = {(e)=>{setEncrypted(e.target.value)}} name="encrypted_message" placeholder="ENCRYPTED MESSAGE" />
                    </div>
                    <div className="app-form-group buttons">
                      <input className="app-form-button" type="button" onClick={decryption} value="DECRYPT MAIL"/><br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="app-form-group">
                      <h5 className="app-form-control-message">{decrypted_message.message}</h5>
              </div>
            </div>
          </div>
        </div>
    )
  )
}

export default DecryptionForm


