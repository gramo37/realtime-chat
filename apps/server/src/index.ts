import express from "express";
import dotenv from "dotenv";

dotenv.config();

const server = express();
const PORT = process.env.PORT || 8000;

server.get("/ping", (req, res) => res.send("I am working fine!"));

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
