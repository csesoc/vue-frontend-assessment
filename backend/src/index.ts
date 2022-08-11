import express from "express";
import Auth from "./auth";
import port from "./config/config";
import bodyParser from "body-parser";

/**
 * Do not modify this file.
 */

const app = express();
app.use(bodyParser.json());

// Authenticate a user with the given credentials.
app.post("/auth/login", Auth.AuthenticateUser);

// Start the server.
app.listen(port.port, async() => {
  // Indicator that the server is running.
  console.log(`Server listening on port ${port.port}`);
});