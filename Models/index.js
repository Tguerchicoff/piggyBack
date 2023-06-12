import User from "./User.js"
import Gasto from "./Gasto.js"
import PlanDeAhorro from "./PlanDeAhorro.js"


User.hasMany(Gasto, { foreignKey: 'id_usuario' });
Gasto.belongsTo(User, { foreignKey: 'id_usuario' });

User.hasOne(PlanDeAhorro, { foreignKey: 'id_usuario' });
PlanDeAhorro.belongsTo(User, { foreignKey: 'id_usuario' });



export {User, Gasto, PlanDeAhorro};
