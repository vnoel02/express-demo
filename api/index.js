const express = require("express");

// Use this to define different routes
const router = express.Router();

//The root is the /api

//mount api for any route

router.use("/weapon-class", require("./weapon-class"));

router.use((req, res, next) => {
    const error = new Error("404 not found");
    error.status = 404;
    next();
});

module.exports = router;