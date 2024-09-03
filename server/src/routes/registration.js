require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const RegistrationUsers = require('../Modal/RegistrationUsers');
const e = require('express');





router.post('/registration', async (req,res) => {
    
        try {
            const {firstname, lastname, midlename, email} = req.body;

            //Проверка на пустые поля
            if(!firstname || !lastname || !midlename || !email){
                return res.status(400).json({ message: 'Все поля обязательны' });
            }


            //Проверка существования пользователя
           
           
            const existingUser = await RegistrationUsers.findOne({where: {email} });
            if(existingUser) {
                const salt = 2
              await bcrypt.hash(email, salt);

            const compareHashes = await bcrypt.compare(email, existingUser.email);
            
            if (!compareHashes) {
                return res.status(400).json({ message: 'Пользователь с таким email уже существует' });
            }
      
        }

             //Создание роли
             const role = 'USER'
             
 
 
             //Хеширование данных
             //const salt = 2
             //const heshed = await bcrypt.hash(email, salt);
 
             //Создание нового пользователя
             const newUser = await RegistrationUsers.create({
                 firstname,
                 lastname,
                 midlename,
                 email,
                 role: role,
             });
 
             //Генерация JWT-токена
             const secretKey = process.env.JWT_SECRET;
             if (!secretKey) {
                 return res.status(500).json({ message: 'Секретный ключ для JWT не найден' });
             }
 
             const token = jwt.sign(
                 {userId: newUser.id, email: newUser.email},
                 secretKey,
                 {expiresIn: '30m'}
             )
 
             // Проверка наличия токена
         if (!token) {
             return res.status(500).json({ message: 'Ошибка при генерации токена' });
         }
 
             //Сохранение токенов в бд
             await RegistrationUsers.update({
                 token,
                 expiresAt: new Date(Date.now() + 1800000) // 30 мин
             }, {
                 where: {id: newUser.id}
             });
 
             res.status(201).json({token});
 


           

        }catch(error){
            console.error(error);
            res.status(500).json({ message: 'Ошибка при регистрации'});
        }
    
});

module.exports = router;