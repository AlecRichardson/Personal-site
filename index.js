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
  const output = `
    <h3>Response email:</h3>
    <p>${req.body.email}</p>
  `;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: "alecwrichardson@gmail.com",
      pass: "98Integra"
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOptions = {
    from: req.body.email, // sender address
    to: "alec.richardson@mail.missouri.edu alecwrichardson@gmail.com", // list of receivers
    subject: req.body.subject, // Subject line
    text: req.body.message, // plain text body
    html: output
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);

    res.render("contact", { msg: "Email has been sent!" });
  });
});

app.listen(6000, () => console.log("server running"));

https
  .createServer(options, app)
  .listen(6060, () => console.log("frontend running"));
