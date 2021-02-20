var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
// const validURL = require("../client/js/validURL");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const jest = require("jest");

dotenv.config();

// lets server run fetch requests INSTALL
const fetch = require("node-fetch");

const app = express();
app.use(cors());
// to use json
app.use(bodyParser.json());
// to use url encoded values
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static("dist"));

console.log("dirname", __dirname);

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

let baseURL = "https://api.meaningcloud.com/sentiment-2.1";
let apiKey = "?key=" + process.env.API_KEY;

app.post("/getSentiment", function (req, res) {
  console.log("line 50", req.body.url_input);

  try {
    getSentiment(baseURL, req.body.url_input, apiKey).then(function (data) {
      const dataObject = {
        confidence: data.confidence,
        subject: data.subjectivity,
      };
      console.log("This is dataObject", dataObject);
      res.send(dataObject);
    });
  } catch (error) {
    console.log("/getSentiment", error);
  }
});

const getSentiment = async (baseURL, url, key) => {
  console.log("getSentiment is running");

  const outputFormat = "&of=json";
  const theUrl = "&url=" + url;
  const lang = "&lang=en";
  const apiUrl = baseURL + key + outputFormat + theUrl + lang;

  console.log("line 71", apiUrl);
  const response = await fetch(apiUrl);
  try {
    const newData = await response.json();
    console.log("Line 76", newData);
    return newData;
  } catch (error) {
    console.log("ERROR", error);
  }
};
