const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "u@example.com", //Your gmail account
    pass: "abc123", //Your gmail password
  },
});

let mailOptions = {
  from: "f@example.com", // sender address
  to: "t1@example.com, t2@example.com", // list of receivers
  subject: "Nodemailer - Test",
  text: "Hello world",
  html: "<h1>Welcome</h1>",
};

transporter.sendMail(mailOptions, (err, data) => {
  if (err) return console.log("Error : ", err);
  return console.log("Email sent ...");
});
