// "use strict";

// const express = require("express");
// const uuidv4 = require("uuid/v4");
// const app = express();

// app.use(express.json());

// const users = [];
// const tokens = new Set();
// const articles = [];

// const authenticate = (req, res, next) => {
//   const token = req.header("Authorization");
//   if (!token || !tokens.has(token)) {
//     return res.sendStatus(401);
//   }
//   next();
// };

// app.post("/api/user", (req, res) => {
//   const { user_id, password, login } = req.body;

//   if (!user_id || !password || !login) {
//     return res.status(400).send("Invalid request body.");
//   }

//   if (users.some((user) => user.login === login)) {
//     return res.status(400).send("Already exists.");
//   }

//   const newUser = { user_id, login, password };
//   users.push(newUser);

//   res.status(201).send();
// });

// app.post("/api/authenticate", (req, res) => {
//   const { login, password } = req.body;

//   if (!login || !password) {
//     return res.status(400).send("Invalid request body.");
//   }

//   const user = users.find((user) => user.login === login);

//   if (!user) {
//     return res.status(404).send("User not found.");
//   }

//   if (user.password !== password) {
//     return res.status(401).send("Authentication failed.");
//   }

//   const token = uuidv4();
//   tokens.add(token);

//   res.json({ token });
// });

// app.post("/api/logout", authenticate, (req, res) => {
//   const token = req.header("Authorization");
//   tokens.delete(token);
//   res.sendStatus(200);
// });

// app.post("/api/articles", authenticate, (req, res) => {
//   const { article_id, title, content, visibility } = req.body;

//   if (!article_id || !title || !content || !visibility) {
//     return res.status(400).send("Invalid request body.");
//   }

//   articles.push({
//     article_id,
//     title,
//     content,
//     visibility,
//     user_id: req.user.user_id,
//   });

//   res.status(201).send();
// });

// app.get("/api/articles", (req, res) => {
//   const token = req.header("Authorization");

//   if (token && tokens.has(token)) {
//     const user = users.find((user) => user.user_id === req.user.user_id);
//     const articles = articles.filter((article) => {
//       return (
//         article.visibility === "public" ||
//         article.visibility === "logged_in" ||
//         article.user_id === req.user.user_id
//       );
//     });
//     return res.json(articles);
//   } else {
//     const publicArticles = articles.filter(
//       (article) => article.visibility === "public"
//     );
//     return res.json(publicArticles);
//   }
// });

// const PORT = process.env.HTTP_PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
