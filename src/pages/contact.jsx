import emailjs from '@emailjs/browser';
import React from 'react';
import { useRef } from 'react';

export default function Contact() {

  const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_PUBLIC_KEY
    )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>  
          <div className="contac-container">
              <form onSubmit={sendEmail}>
                      <div className="row pt-10 mx-auto">
                          <div className="col-8 form-group mx-auto">
                              <input type="text" className="form-control" placeholder="Name" name="name"/>
                          </div>
                          <div className="col-8 form-group pt-4 mx-auto">
                              <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                          </div>
                          <div className="col-8 form-group pt-2 mx-auto">
                              <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                          </div>
                          <div className="col-8 form-group pt-2 mx-auto">
                              <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                          </div>
                          <div className="col-8 pt-3 mx-auto">
                              <input type="submit" className="btn btn-info" value="Send "></input>
                          </div>
                      </div>
              </form>
          </div>
        </div>
    )
}

