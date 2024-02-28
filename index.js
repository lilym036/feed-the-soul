import express from "express";
import bodyParser from "body-parser";
import Quote from "inspirational-quotes";
import randomVerse from "random-verse";

const app = express();
const port = 3000;

// middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

console.log(randomVerse());

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/quote", (req, res) => {
    console.log(Quote.getQuote({author: false}));
    let randomQuote= Quote.getQuote({author: false});

    res.render("index.ejs", {
        randomQuote: randomQuote,
    });


});

app.post("/verse", (req, res) => {
    console.log(randomVerse());
    let randomVerse= randomVerse();

    res.render("index.ejs", {
        randomVerse: randomVerse;
    });

});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});