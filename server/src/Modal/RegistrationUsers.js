const { DataTypes, Model } = require('@sequelize/core');
const {sequelize} =  require('../bd/bd');



class RegistrationUsers extends Model{}

RegistrationUsers.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    firstname: {
        type: DataTypes.STRING,
    },

    lastname: {
        type: DataTypes.STRING,
    },

    midlename: {
        type: DataTypes.STRING,
    },

    email: {
        type: DataTypes.STRING,
        unique: true
    },

    img: {
        type: DataTypes.STRING,
        
    },

    role: {
        type: DataTypes.ENUM('ADMIN', 'USER', 'GUEST'),
       
    },

    token: {
        type: DataTypes.STRING,
        
    }

}, {
    sequelize,
    modelName: 'RegistrationUsers'
});

module.exports = RegistrationUsers;

