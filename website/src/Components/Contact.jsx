import React, { useState } from 'react';
import { Form } from 'react-bootstrap'

// // prepare mailjet with public and private keys
// const mailjet = require('node-mailjet')
//   .connect(process.env.REACT_APP_MJ_APIKEY_PUBLIC, process.env.REACT_APP_MJ_APIKEY_PRIVATE)

// const Contact = () => {

//   //hold sender, sender name, subject, and text in an object
//   const requestObj = {
//     "Messages": [
//       {
//         "From": {
//           "Email": null,
//           "Name": null,
//         },
//         "To": [
//           {
//             "Email": "jimmyroro58@gmail.com",
//             "Name": "Richard"
//           }
//         ],
//         "Subject": "Email from my website",
//         "TextPart": "Website email",
//         "HTMLPart": null,
//         "CustomID": "Message from my website"
//       }
//     ]
//   }
//   // destructure to edit sender, subject and text
//   let { Messages: [{ From, HTMLPart }] } = requestObj;

//   function emailIsValid(email) {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
//   }

//   const sendEmail = () => {
//     // name isn't given
//     // email isn't given / is wrong
//     // text is empty
//     if (From.Name && emailIsValid(From.Email) && HTMLPart) {
//       mailjet.post("send", { 'version': 'v3.1' }).request(requestObj)
//         .then((result) => {
//           console.log(result.body)
//         })
//         .catch((err) => {
//           console.log(err.statusCode)
//         })
//     } else {
//       if (!From.Name) {
//         alert("please enter a name")
//       }
//       if (!emailIsValid(From.Email)) {
//         alert("please make sure your email is properly formatted")
//       }
//       if (!HTMLPart) {
//         alert("please enter a message")
//       }
//     }
//   }


//   const changeEmail = (e) => {
//     From.Email = e.target.value;
//   }

//   const changeName = (e) => {
//     From.Name = e.target.value;
//   }

//   const changeText = (e) => {
//     HTMLPart = e.target.value;
//   }

//   return (
//     <div>
//       <form action="https://formspree.io/xpzozdql" method="POST">
//         <input type="text" name="name"/>
//         <input type="email" name="_replyto"/>
//         <input type="submit" value="Send"/>
//       </form>
//             {/* <Form>
//         <Form.Group controlId="inputName">
//           <Form.Label>Name</Form.Label>
//           <Form.Control onChange={(e) => { changeName(e) }} />
//         </Form.Group>
//         <Form.Group controlId="inputEmail">
//           <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" placeholder="name@example.com" onChange={(e) => { changeEmail(e) }} />
//         </Form.Group>
//         <Form.Group controlId="inputText">
//           <Form.Label>Example textarea</Form.Label>
//           <Form.Control as="textarea" rows="3" onChange={(e) => { changeText(e) }} />
//         </Form.Group>
//       </Form>
//       <div class="btn btn-primary" onClick={sendEmail}>
//         send that email!
//       </div> */}
//     </div>
//   )
// }


const Contact = () => {
  const [status, setStatus] = useState("");

  const submitForm = (ev) => {
      ev.preventDefault();
      const form = ev.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          setStatus("SUCCESS");
        } else {
          setStatus("ERROR");
        }
      };
      xhr.send(data);

  }


  return (
    <div id="formContainer">
      <div className="col">
        <form
          onSubmit={submitForm}
          action="https://formspree.io/xpzozdql"
          method="POST"
          id="emailForm"
        >
          {/* <!-- add your custom form HTML here --> */}
          <div className="row">
            <label>Email:</label>
          </div>
          <div className="row">
            <input id="emailInput" type="email" name="email"/>
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

