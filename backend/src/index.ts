import express from "express";
import Auth from "./auth";
import port from "./config/config";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.post("/auth/login", Auth.AuthenticateUser);

app.listen(port.port, async() => {
  console.log(`Server listening on port ${port.port}`);
});