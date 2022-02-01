const requestHandler = (req, res) => {
  const path = req.url;

  if (path === "/") {
    res.write(`
      <html>
        <title>My Basics Assignment</title>
        <body>
          <h1>Hello!</h1>
          <h4>This is my assignment for the Basics section of Academind's Node.js course.</h4>
          <br>
          <form action="/create-user" method="POST">
            <input type="text" name="username" placeholder="Enter a username..."/>
            <button type="submit">Submit</button>
          </form>
        </body>
      </html>
    `);
    return res.end();
  }

  if (path === "/create-user") {
    const body = [];

    req.on("data", (chunk) => body.push(chunk));
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];
      console.log("Username: ", username);
      res.writeHead(302, { location: "/" });
      return res.end();
    });
  }

  if (path === "/users") {
    res.write(`
      <html>
        <title>Users</title>
        <body>
          <ul>
            <li>User 1</li>
            <li>User 2</li>
            <li>User 3</li>
            <li>User 4</li>
          </ul>
        </body>
      </html>
    `);
    return res.end();
  }
};

module.exports = requestHandler;
