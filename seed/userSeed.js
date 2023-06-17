import {User} from "../Models/Index.js";

const userSeed = async () => {
    try{
        await User.bulkCreate([
            {email: "admin@admin.com", password: "12345"},
            {email: "admin2@admin.com", password: "123456"}
        ])
    } catch(error){
    console.log("Error al realizar bulkCrate de USER" + error.message)
    }
}