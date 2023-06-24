import {PlanDeAhorro} from "../Models/Index.js";

const planSeed = async () => {
    try{
        await PlanDeAhorro.bulkCreate([
            {nombre: "Ahorro PS5", ingresos: "100000.00", ahorro: "20000.00", fechaDeFinalizacion: "2024-06-20T23:29:26.000Z", id_usuario: 1 },
            {nombre: "Ahorro PS6", ingresos: "200000.00", ahorro: "10000.00", fechaDeFinalizacion: "2023-08-20T23:29:26.000Z", id_usuario: 2 },
        ])
    } catch(error){
    console.log("Error al realizar bulkCrate de PLAN" + error.message)
    }
}