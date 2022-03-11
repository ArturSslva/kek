import express, {Request, response, Response} from 'express';
import cors from 'cors';
import axios from 'axios'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(__dirname + '/dist'));

app.listen( process.env.PORT || 8080, () =>{
    console.log('API RODANDO');
});

// app.route('/').get((request: Request, response: Response) =>{
//     console.log('Entrou');
//     response.sendFile(__dirname + "/index.html");
// });

app.post('/contactEmail', (request: Request, response: Response) => {
    const nameEmail = request.body.name;
    const emailContent = request.body.emailContent;
    const emailAdress = request.body.emailAdress;

    console.log(nameEmail);
    console.log(emailAdress);
    console.log(emailContent);
    
    
    
    response.send('form recebido');
    console.log("Teste");
});

app.get('/', (request: Request, response: Response) =>{
    console.log('Entrou');
    response.sendFile(__dirname + "/index.html");
});