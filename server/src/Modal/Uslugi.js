const { Model, DataTypes } = require("@sequelize/core");
const {sequelize} = require('../bd/bd');
const RegistrationUsers = require("./RegistrationUsers");



class Uslugi extends Model{}

Uslugi.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nameUslugi: {
        type: DataTypes.STRING,
        allowNull: false
    },

    img: {
        type: DataTypes.STRING,
        allowNull: false
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    diskript: {
        type: DataTypes.STRING,
        allowNull: false
    },

    times: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'Uslugi'
});



Uslugi.belongsTo(RegistrationUsers, { foreignKey: role = 'ADMIN' });