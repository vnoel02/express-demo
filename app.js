// Using the express module
const express = require("express");
// The server number
const PORT = 8080;

//Because express is a module, use a var to run
const app = express();

//Mounting
app.use("/api", require("./api"));


// Function to run server. We can pass in other functions or middleware to enable logging or authentication
// Note it doesn't need to be here though

const serverRun = () => {
    const server = app.listen(PORT, () => {
        console.log(`Live on port: ${PORT}`);
    });
};

serverRun();
