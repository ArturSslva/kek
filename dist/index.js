"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(__dirname + '/css'));
app.use(express_1.default.static(__dirname + '/images'));
app.use(express_1.default.static(__dirname + '/js'));
app.listen(process.env.PORT || 8080, () => {
    console.log('API RODANDO');
});
// app.route('/').get((request: Request, response: Response) =>{
//     console.log('Entrou');
//     response.sendFile(__dirname + "/index.html");
// });
app.post('/contactEmail', (request, response) => {
    const nameEmail = request.body.name;
    const emailContent = request.body.emailContent;
    const emailAdress = request.body.emailAdress;
    console.log(nameEmail);
    console.log(emailAdress);
    console.log(emailContent);
    response.send('form recebido');
    console.log("Teste");
});
app.get('/', (request, response) => {
    console.log('Entrou');
    response.sendFile(__dirname + "/index.html");
});
