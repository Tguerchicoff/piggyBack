import { DataTypes as DT, Model } from "sequelize";
import connectionDb from '../connectionDb/connectionDb.js';

class User extends Model {}

User.init({
    // el id se crea solo autoincremental
    name:{
        type:DT.STRING, //obligatorio
        allowNull:false, //no obligatorio
    },
    lastName:{
        type:DT.STRING(50),
        allowNull:false,
    },
    password:{
        type:DT.STRING(50),
        allowNull:false,
    }
},{
    sequelize: connectionDb,
    modelName:"User"
})


export default User;