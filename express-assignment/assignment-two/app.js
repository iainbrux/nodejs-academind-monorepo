const path = require("path");
const express = require("express");

const rootDir = require("./helpers/path");

const indexRoutes = require("./routes/index");
const usersRoutes = require("./routes/users");

const app = express();

app.use(express.static(path.join(rootDir, "public")));

app.use(indexRoutes);
app.use(usersRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);
