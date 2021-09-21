const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/activities", (req, res) => {
  console.log(req.cookies.access_token);
  request(
    {
      method: "GET",
      uri: "https://www.strava.com/api/v3/athlete/activities",
      headers: {
        Authorization: `Bearer ${req.cookies.access_token}`,
      },
    },
    (error, response, body) => {
      if (error) {
        console.log(error);
      }
      console.log(JSON.parse(body));
      res.send(JSON.parse(body));
    }
  );
});

module.exports = router;
