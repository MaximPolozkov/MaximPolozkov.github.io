const {sequelize} = require('../bd/bd');

require('./RegistrationUsers');
require("./Uslugi");
require("./MyWorks");

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Модели успешно синхронизированы с базой данных.');
  } catch (error) {
    console.error('Ошибка при синхронизации моделей:', error);
  }
})();