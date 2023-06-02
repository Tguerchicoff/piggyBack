import { DataTypes as DT, Model } from "sequelize";
import connectionDb from '../connectionDb/connectionDb.js';
import validator from 'validator';
import bcrypt from 'bcrypt';

class User extends Model {}

User.init({
    id: {
        type: DT.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    email: {
        type: DT.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                args: true,
                msg: 'Debe ser una dirección de correo electrónico válida'
            },
            isUnique: async function (value) {
                const isTaken = await User.findOne({ where: { email: value } });
                if (isTaken) {
                    throw new Error('El correo electrónico ya está en uso');
                }
            }
        }
    },

    password: {
        type: DT.STRING(60),
        allowNull: false,
        set(value) {
            // Generar y almacenar el hash de la contraseña
            const hashedPassword = bcrypt.hashSync(value, 10);
            this.setDataValue('password', hashedPassword);
        }
    }
}, {
    sequelize: connectionDb,
    modelName: "User",
});



export default User;