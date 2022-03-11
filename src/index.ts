import express, {Request, response, Response} from 'express';
import cors from 'cors';
import axios from 'axios'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen( process.env.PORT || 8080, () =>{
    console.log('API RODANDO');
});

// Aqui é feito o o console.log com o contato realizado pelo curriculo, podendo ser visualizado no heroku cli no momento

app.post('/contactEmail', (request: Request, response: Response) => {
    const nameEmail = request.body.name;
    const emailContent = request.body.emailContent;
    const emailAdress = request.body.emailAdress;

    console.log(nameEmail);
    console.log(emailAdress);
    console.log(emailContent);
    
    console.log("Teste");
});

app.get('/', (request: Request, response: Response) =>{
    return response.send('API RODANDO');
});