const { Model, DataTypes } = require("@sequelize/core");
const {sequelize} = require('../bd/bd');
const RegistrationUsers = require("./RegistrationUsers");

class MyWorks extends Model{}

MyWorks.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    work: {
        type: DataTypes.STRING,
        allowNull: false
    },

    images: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'MyWorks'
});



MyWorks.belongsTo(RegistrationUsers, { foreignKey: role = 'ADMIN' });