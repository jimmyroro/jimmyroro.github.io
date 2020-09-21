const mailjet = require ('node-mailjet')
.connect('084bdd14e93188c7c49656e887268d80', '13a2edabc5fe665c8765d67e94b6755a')
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
      "Subject": "I am the subject",
      "TextPart": "I am the text part",
      "HTMLPart": "what happens when I take away the html?",
      "CustomID": "Awtf is this customId?"
    }
  ]
})
request
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })
