const express = require("express");
const router = express.Router();
const request = require("request");
const config = require("../config");

router.get("/redirect", (req, res) => {
  res.redirect(
    `http://www.strava.com/oauth/authorize?client_id=${config.clientID}&response_type=code&redirect_uri=${config.redirectURI}&approval_prompt=force&scope=read,read_all,activity:read,activity:read_all`
  );
});

router.get("/callback", (req, res) => {
  request(
    {
      method: "POST",
      uri: `https://www.strava.com/oauth/token`,
      form: {
        client_id: config.clientID,
        client_secret: config.clientSecret,
        code: req.query.code,
        grant_type: "authorization_code",
      },
    },
    (error, response, body) => {
      res.cookie("access_token", JSON.parse(body).access_token, {
        expires: new Date(Date.now() + 900000),
      });
      res.cookie("refresh_token", JSON.parse(body).refresh_token, {
        expires: new Date(Date.now() + 900000),
      });
      // req.session.access_token = JSON.parse(body).access_token;
      console.log(JSON.parse(body));

      res.send("<script>window.close()</script>");
      //   res.redirect("http://localhost:9000/close");
    }
  );
});

module.exports = router;
