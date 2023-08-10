"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors());
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
app.post('/post', (req, res) => {
    res.send("o seu email e a sua senha senhor são:" + JSON.stringify(req.body));
});
app.get('/getHelloWorld', (req, res) => {
    res.send('Hello World!');
});
