// const express = require("express");
import express from "express";
import nodemailer from "nodemailer";
import asyncHandler from "express-async-handler";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const PORT = 4000;
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});
app.get("/sendmail", asyncHandler(async(request, response)=> {
    response.send(" 🌏 🎊✨🤩");
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "vigneshthanika03@gmail.com", // generated ethereal user
          pass: process.env.PASS, // generated ethereal password
        },
      });
      
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: "vigneshthanika03@gmail.com", // sender address
        to: "vigneshthanika03@gmail.com", // list of receivers
        subject: "data.subject", // Subject line
        html: "data.html", // html body
      });
  }));
app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
