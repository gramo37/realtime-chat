"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const server = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
server.get("/ping", (req, res) => res.send("I am working fine!"));
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
