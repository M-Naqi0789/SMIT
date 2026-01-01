// Note: Main server file...!

// const express = require('express');

// Importing libs...!
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import users from "./src/dummy-data/dummy-data.js";

// Environment variables config...!
config({
  path: './.env'
});

// Global variables...!
const port = process.env.PORT;
const app = express();

// Middlewares...!
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Create 1st api: / route...!
app.get("/", (req, res) => {
  return res.status(200).send({
    statusCode: 200,
    message: 'Welcome to Back End using Node JS'
  });
});

// Create 2nd api: /users route(Feth all users)...!
app.get("/users", (req, res) => {
  try {
    // 400:
    if (users.length < 1) {
      return res.status(400).send({
        status: false,
        message: "No data found"
      });
    };

    // 200:
    return res.status(200).send({
      status: true,
      message: "Users list fetched successfully",
      data: users
    });
  }

  catch (error) {
    // 500:
    return res.status(500).send({
      status: false,
      message: "Something went wrong from server side"
    });
  }
});

// Server running...!
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});