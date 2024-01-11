const express = require("express");

const app = express();
const port = 3000;
app.use(express.json());

app.get("/test", (req, res) => {
  res.status(200).send("GG");
});

app.listen(port, () => console.log(`listinig on port :${port}`));
