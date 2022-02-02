const bodyParser = require("body-parser");

const express = require("express");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send(`
    <html>
      <head>
        <title>Not Found</title>
      </head>
      <body>
        <h1>Page not found</h1>
        <p>Oops! It doesn't look like this page exists.</p>
      </body>
    </html>
  `);
});

app.listen(3000);
