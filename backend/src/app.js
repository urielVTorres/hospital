import express from 'express';
import config from './config.js';
import cors from 'cors';
import routerPaciente  from './routes/paciente.routes.js'
import routerAdmin  from './routes/admin.routes.js'

const app = express();
app.use(express.json());
const dominiosPermitidos = ['//192.168.100.20:5173/', '//localhost:5173','//192.168.56.1:5173']

const corsOptions = {
    origin: function(origin, callback){
        if(dominiosPermitidos.indexOf(origin)!== -1){
            //El origen del request está permitido
            callback(null, true)
        } else {
            callback(new Error("No permitido por CORS"))
        }
    }
}

app.use(cors());

//settings
app.set('PORT', config.PORT);



app.use("/api/paciente", routerPaciente);
app.use("/api/admin", routerAdmin);
export default app;