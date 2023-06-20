import express from "express";
import routes from "./routes/routes.js";
import connectionDb from "./connectionDb/connectionDb.js";
import cors from "cors";
//import userSeed from './seed/userSeed.js'
import "dotenv/config.js";

const port = process.env.SERVER_PORT;
const app = express();

//Middlewares
app.use(cors());
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
}); //.then(userSeed)
