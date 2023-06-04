import { DataTypes, Model } from 'sequelize';
import connectionDb from '../connectionDb/connectionDb.js';
import User from './User.js';

class Gasto extends Model {}

Gasto.init(
  {
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    costo: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    prioridad: {
      type: DataTypes.ENUM('1', '2', '3'),
      allowNull: false,
    },
  },
  {
    sequelize: connectionDb,
    modelName: 'Gasto',
  }
);


//establezco la relacion entre las tablas
//un gasto pertenece a un usuario
Gasto.belongsTo(User, { foreignKey: 'id_usuario' });
//un usuario tiene muchos gastos
User.hasMany(Gasto, { foreignKey: 'id_usuario' });

export default Gasto;