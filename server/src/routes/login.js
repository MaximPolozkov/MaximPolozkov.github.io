require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const RegistrationUsers = require('../Modal/RegistrationUsers');



router.post('/login', async (req, res) => {
    try {
        const { firstname, email } = req.body;

        // Поиск пользователя по email
        const user = await RegistrationUsers.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ message: 'Пользователь не найден' });
        }else{

            // Проверка совпадения firstname
        if (firstname && user.firstname !== firstname) {
            return res.status(400).json({ message: 'Неверное имя' });
        }


            const salt = 2
            await bcrypt.hash(email, salt);
            const compareHashes = await bcrypt.compare(email, user.email);      
    if (!compareHashes) {
        //return res.status(400).json({ message: `Пользователь существует ${user.token}` });

         // Генерация нового токена
         const newToken = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '30m' }
        );

         // Сохранение нового токена в бд 
         await RegistrationUsers.update({
            token: newToken,
            expiresAt: new Date(Date.now() + 1800000),
        }, {
            where: { id: user.id }
        });

        res.json({ token: newToken, userId: user.id });


    }



}

        

          
       

       

   

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка при обновлении токена' });
    }
});
        
        module.exports = router;