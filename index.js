require("dotenv").config();
var express = require("express");
const nodemailer = require("nodemailer");


const https = require("https"),
  fs = require("fs");

const options = {
  key: fs.readFileSync("/home/awrnnd/server/encryption/server.key"),
  cert: fs.readFileSync("/home/awrnnd/server/encryption/alecrichardson.me.crt"),
  ca: fs.readFileSync("/home/awrnnd/server/encryption/intermediate.crt")
};

// Load validation
const validateContactInput = require("./Validation/contact");
console.log(process.env.NM_UN);
const app = express();
app.use(express.json());
app.use(express.static("client/build"));

app.post("/api/form", (req, res) => {
  const { errors, isValid } = validateContactInput(req.body);

  if (!isValid) {
    console.log(errors);
    return res.status(400).json(errors);
  }

  const output = `
    <h3>From: ${req.body.email}</h3>
    <h5>Subject: ${req.body.subject}</h5>
    <p>Message: ${req.body.message}</p>
  `;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: process.env.NM_UN,
      pass: process.env.NM_PW
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOptions = {
    from: req.body.email,
    to: process.env.NM_R,
    subject: req.body.subject,
    text: req.body.message,
    html: output
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(400).json(error);
    }
    console.log("Message sent: %s", info.messageId);

    res.json({ success: true });
  });
});

app.listen(6000, () => console.log("server running"));

https
  .createServer(options, app)
  .listen(6060, () => console.log("frontend running"));
