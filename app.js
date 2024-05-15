const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

const app = express();

// Static Files
app.use(express.static(path.join(__dirname, "/static")));

// Set Templating Engine
app
  .use(expressLayouts)
  .set("view engine", "ejs")
  .set("views", path.join(__dirname, "/content"));

app.get("/", (req, res) => {
  res.render("index", {
    layout: path.join(__dirname, "/layouts/dashboard"),
    footer: true,
  });
});

app.get("/settings", (req, res) => {
  res.render("settings", {
    layout: path.join(__dirname, "/layouts/dashboard"),
    footer: true,
  });
});

app.get("/crud/kartuKeluarga", (req, res) => {
  const kartuKeluarga = require("./data/kartuKeluarga.json");
  res.render("crud/kartuKeluarga", {
    layout: path.join(__dirname, "/layouts/dashboard"),
    footer: false,
    kartuKeluarga,
  });
});

app.get("/crud/penduduk", (req, res) => {
  const penduduk = require("./data/penduduk.json");
  res.render("crud/penduduk", {
    layout: path.join(__dirname, "/layouts/dashboard"),
    footer: false,
    penduduk,
  });
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
