import {DataTypes, Model} from "sequelize";
import connectionDb from "../connectionDb/connectionDb";


class Category extends Model{}

Category.init({
    categoryName:{
        type: DataTypes.STRING,
        allowNull:false,
    },

},
{
    sequelize: connectionDb,
    modelName:"Category"
}
);



export default Category;