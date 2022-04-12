const fetch = require('node-fetch');
const express = require("express");
const FormData = require("form-data");
require('dotenv').config()

const authRoutes = express.Router();

authRoutes.route("/authenticate").post(function (req, res) {
    console.log(req)
    const { code } = req.body;

    const data = new FormData();
    data.append("client_id", process.env.REACT_APP_CLIENT_ID);
    data.append("client_secret", process.env.REACT_APP_CLIENT_SECRET);
    data.append("code", code);
    data.append("redirect_uri", process.env.REACT_APP_REDIRECT_URI);

    // Request to exchange code for an access token
    fetch(`https://github.com/login/oauth/access_token`, {
        method: "POST",
        body: data,
    })
        .then((response) => response.text())
        .then((paramsString) => {
            let params = new URLSearchParams(paramsString);
            const access_token = params.get("access_token");

            // Request to return data of a user that has been authenticated
            return fetch(`https://api.github.com/user`, {
                headers: {
                    Authorization: `token ${access_token}`,
                },
            });
        })
        .then((response) => response.json())
        .then((response) => {
            return res.status(200).json(response);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
});

module.exports = authRoutes;