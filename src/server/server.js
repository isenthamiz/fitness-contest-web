const express = require("express");
const cors = require("cors");
const config = require("./config");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "..", "build")));

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// app.use(cookieParser());

// app.use(session({
//     secret: '1234567890',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         httpOnly: true,
//         secure: 'auto',
//         maxAge: 3600000
//     }
// }))

app.use("/oauth", require("./routes/oauth"));
app.use("/strava", require("./routes/strava"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "build", "index.html"));
});

app.listen(config.serverPort, () => {
  console.log("Server has started with the Port ", config.serverPort);
});
