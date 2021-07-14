// Dependencies
const express = require("express");
const path = require("path")

//Setting up express
const app = express();
const PORT = process.env.PORT || 3000

//Setting up express for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Reservation Data
const reservations = [
	{},
]