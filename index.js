import express from "express";
import bodyParser from "body-parser";
import Quote from "inspirational-quotes";
import randomVerse from "random-verse";

const app = express();
const port = 3000;

// middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

console.log(Quote.getQuote({author: false}));
console.log(randomVerse());