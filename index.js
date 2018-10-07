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
    <h3>Response email:</h3>
    <p>${req.body.email}</p>
  `;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: "contactfromserver@gmail.com",
      pass: process.env.KEY
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOptions = {
    from: req.body.email,
    to:
      "alec.richardson@mail.missouri.edu, alecwrichardson@gmail.com, alecrich22@aol.com",
    subject: req.body.subject,
    text: req.body.message,
    html: output
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);

    res.json({ success: true });
  });
});

app.listen(6000, () => console.log("server running"));

https
  .createServer(options, app)
  .listen(6060, () => console.log("frontend running"));
