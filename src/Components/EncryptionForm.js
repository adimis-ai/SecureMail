import React, { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import './Form.css'

function EncryptionForm() {
  const { isAuthenticated } = useAuth0();
  /*Encryption Function*/
  const [sender_email,setEmail] = useState('')
  const [sender_password,setPassword] = useState('')
  const [receiver_email,setREmail] = useState('')
  const [message_body,setMessage] = useState('')
  const [pass_code,setPasscode] = useState('')
  const [data,setData] = useState('')
  function sendmail(){ 
    console.warn({sender_email,sender_password,receiver_email,message_body,pass_code});
    let data = {sender_email,sender_password,receiver_email,message_body,pass_code}
    fetch("/sendMail",{
      method:'POST',
      headers:{
        "Accept":"application/json",
        "Content-Type": "application/json"
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      result.json().then((resp)=>{
        setData(resp)
      })
    })
    console.warn(data)
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
                    <span>SEND</span>
                    <span>MAIL</span>
                  </div>
                </div>
                <div className="screen-body-item">
                  <div className="app-form">
                    <div className="app-form-group">
                      <input className="app-form-control" type="email" value={sender_email} onChange = {(e)=>{setEmail(e.target.value)}} name="sender_email" placeholder='Sender Email' />
                    </div>
                    <div className="app-form-group">
                      <input className="app-form-control" type="password" value={sender_password} onChange = {(e)=>{setPassword(e.target.value)}} name="sender_password" placeholder="Sender Password" />
                    </div>
                    <div className="app-form-group">
                      <input className="app-form-control" type="email" value={receiver_email} onChange = {(e)=>{setREmail(e.target.value)}} name="receiver_email" placeholder='Receiver Email' />
                    </div>
                    <div className="app-form-group">
                      <textarea className="app-form-control" type="text" value={message_body} onChange = {(e)=>{setMessage(e.target.value)}} name="message_body" placeholder='Message Body'></textarea>
                    </div>
                    <div className="app-form-group message">
                      <input className="app-form-control"  type="password" value={pass_code} onChange = {(e)=>{setPasscode(e.target.value)}} name="pass_code" placeholder='Message Password' />
                    </div>
                    <div className="app-form-group buttons">
                      <input className="app-form-button" type="button" onClick={sendmail} value="SEND MAIL"/><br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="app-form-group message">
                    <h5 className="app-form-control-key">{data.pass_code}</h5>
                </div>
          </div>
        </div>
    )
  )
}

export default EncryptionForm