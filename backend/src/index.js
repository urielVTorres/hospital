import * as dotenv from 'dotenv';
dotenv.config({path:'C:/Users/chopa/Desktop/code/database/backend/.env'});
import app from './app.js';
import pacienteRoutes from './routes/paciente.routes.js';




app.listen(app.get('PORT'), ()=>{
    console.log(`Servidor funcionando en el puerto: ${app.get('PORT')}`);
});

app.use(pacienteRoutes);