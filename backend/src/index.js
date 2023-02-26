import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();

app.listen(app.get('PORT'), ()=>{
    console.log(`Servidor funcionando en el puerto: ${app.get('PORT')}`);
});