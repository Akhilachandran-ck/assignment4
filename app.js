const express=require("express");

var nodemailer = require('nodemailer');
require("dotenv").config();

const app=express();
app.use(express.json());



var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.username1,
    pass: process.env.password1,
  }
});

var mailOptions = {
  from: process.env.username1,
  to: process.env.username2 ,
  subject: 'Sending Email using Node.js',
  text: 'Hai dear, how are you?'
};
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });


app.listen(3000, ()=>{
    console.log(`listening to  port 3000`);

})

