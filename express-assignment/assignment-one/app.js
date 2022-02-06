const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  res.send(`
    <html>
      <head>
        <title>Users</title>
      </head>
      <body>
        <ul>
          <li>User 1</li>
          <li>User 2</li>
          <li>User 3</li>
        </ul>
      </body>
    </html>
  `);
});

app.use("/", (req, res, next) => {
  res.send(`
    <html>
      <head>
        <title>Home Page</title>
      </head>
      <body>
        <h1>Home Page</h1>
        <p>This is a home page with some content. Lorem ipsum.</p>
      </body>
    </html>
  `);
});

app.listen(3000);
