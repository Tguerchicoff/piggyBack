import {Gasto} from "../Models/Index.js";

const gastoSeed = async () => {
    try{
        await Gasto.bulkCreate([
            {nombre: "Gasto de ejemplo", costo: "100.00", prioridad: "Baja", id_usuario: 1 },
            {nombre: "Gasto de ejemplo", costo: "75.00", prioridad: "Media", id_usuario: 1 },
            {nombre: "Gasto de ejemplo", costo: "50.00", prioridad: "Alta", id_usuario: 1 }
        ])
    } catch(error){
    console.log("Error al realizar bulkCrate de GASTOS" + error.message)
    }
}