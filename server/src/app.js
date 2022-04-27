const path = require("path");

const express = require("express");
const fileUpload = require("express-fileupload");
const Tesseract = require("tesseract.js");
const cors = require("cors");
const morgan = require("morgan");
const _ = require("lodash");

const app = express();

app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.post("/read-image", (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).json({ error: "No file uploaded" });
    } else {
      let image = req.files.image;
      let imagePath = "./uploads/" + image.name;
      image.mv(imagePath);
      Tesseract.recognize(imagePath, "ara").then(({ data: { text } }) => {
        return res.status(200).json({ text });
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
