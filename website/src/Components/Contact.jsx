import React from 'react';

const mailjet = require ('node-mailjet')
.connect(process.env.REACT_APP_MJ_APIKEY_PUBLIC, process.env.REACT_APP_MJ_APIKEY_PRIVATE)

const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "jimmyroro58@gmail.com",
        "Name": "Richard"
      },
      "To": [
        {
          "Email": "jimmyroro58@gmail.com",
          "Name": "Richard"
        }
      ],
      "Subject": "Greetings from Mailjet.",
      "TextPart": "My first Mailjet email",
      "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
const Contact = () => {
  //hold state of sender, sender name, subject, and text    in an object

  return (
    <div class="btn btn-primary">
      send email
    </div>
  )
}

export default Contact;

request
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })
