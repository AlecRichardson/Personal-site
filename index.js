var express = require("express");
const nodemailer = require("nodemailer");

const https = require("https"),
  fs = require("fs");

const options = {
  key: fs.readFileSync("/home/awrnnd/server/encryption/server.key"),
  cert: fs.readFileSync("/home/awrnnd/server/encryption/alecrichardson.me.crt"),
  ca: fs.readFileSync("/home/awrnnd/server/encryption/intermediate.crt")
};

const app = express();
app.use(express.json());
app.use(express.static("client/build"));

app.post("/api/form", (req, res) => {
  console.log(req.body);

  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: "alec.richardson@mail.missouri.edu",
      pass: process.env.EMAILPASSWORD
    }
  });

  let mailOptions = {
    from: req.body.email, // sender address
    to: "alec.richardson@mail.missouri.edu", // list of receivers
    subject: req.body.subject, // Subject line
    text: req.body.message, // plain text body
    html: "<b>Hello world?</b>" // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
  });
});

app.listen(6000, () => console.log("server running"));

https
  .createServer(options, app)
  .listen(6060, () => console.log("frontend running"));
