import express from "express";
import routes from "./routes/Routes.js";
import connectionDb from "./connectionDb/connectionDb.js";
import cors from "cors";
//import userSeed from './seed/userSeed.js';
//import planSeed from './seed/planSeed.js';
//import gastoSeed from './seed/gastoSeed.js';
import "dotenv/config.js";

const port = process.env.SERVER_PORT;
const app = express();

//Middlewares
app.use(cors());
app.options('*', cors())


//----------
//Analizar cuerpo de solicitud como json
app.use(express.json());
app.use(express.urlencoded({ extendend: true }));

//Rutas
app.use(routes);

await connectionDb.sync().then(() => {
  app.listen(port, () => {
    console.log("Server OK http://localhost:8080");
  });
});//.then(userSeed).then(planSeed).then(gastoSeed);
