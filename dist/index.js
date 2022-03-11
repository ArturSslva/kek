"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.listen(process.env.PORT || 8080, () => {
    console.log('API RODANDO');
});
// Aqui é feito o o console.log com o contato realizado pelo curriculo, podendo ser visualizado no heroku cli no momento
app.post('/contactEmail', (request, response) => {
    const nameEmail = request.body.name;
    const emailContent = request.body.emailContent;
    const emailAdress = request.body.emailAdress;
    console.log(nameEmail);
    console.log(emailAdress);
    console.log(emailContent);
    return response.send('https://www.youtube.com/watch?v=r9Jy5mAhzf8');
});
app.get('/', (request, response) => {
    return response.send('API RODANDO');
});
