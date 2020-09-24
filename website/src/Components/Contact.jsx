import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState("");

  return (

    <div id="formContainer">
      <div className="col">
        <form
          action="https://formspree.io/xpzozdql"
          method="POST"
          id="emailForm"
        >
          <div className="row">
            <label>
              Your Email:
              <input type="email" name="_replyto" />
            </label>
          </div>
          <div className="row">
            <label>
              Your name:
              <input type="textarea" name="name" />
            </label>
          </div>
          <div className="row">
            <label>Message:</label>
          </div>
          <div className="row">
            <input type="text" name="message" />
          </div>
          <div className="row">
            {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </div>
        </form>
      </div>
    </div>
  );


}

export default Contact;

