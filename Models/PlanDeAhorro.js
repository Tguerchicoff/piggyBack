import { DataTypes, Model } from 'sequelize';
import connectionDb from '../connectionDb/connectionDb.js';
import User from './User.js';

class PlanDeAhorro extends Model {}

PlanDeAhorro.init(
  {
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    ingresos: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    ahorro: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    fechaDeFinalizacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    /* no hace falta
    fechaDeCreacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },


    */

  },
  {
    sequelize: connectionDb,
    modelName: 'PlanDeAhorro',
  }
);


//Establezco la relacion
//un plan de ahorro pertenece a un usuario
//no va aca, va en index
//PlanDeAhorro.belongsTo(User, { foreignKey: 'id_usuario' });

export default PlanDeAhorro;