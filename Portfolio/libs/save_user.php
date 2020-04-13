<!DOCTYPE html>
<html lang="ru">

<head>
	
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title></title>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js#"></script>
	
	
	
</head>
<body>

<?php

    if (isset($_POST['name'])) { $name=$_POST['name']; if($name =='') {unset($name);} }

    //заносим введенный пользователем логин в переменную $login, если он пустой, то уничтожаем переменную
    
    if (isset($_POST['email'])) { $email=$_POST['email']; if($email =='') {unset($email);} }

   if (isset($_POST['password'])) { $password=$_POST['password']; if($password =='') { unset($password);} }   	
   
    //заносим введенный пользователем пароль в переменную $password, если он пустой, то уничтожаем переменную

    if(isset($_POST['password2'])) { $password2=$_POST['password2']; if($password2 ==''){ unset($password2);} } { 
   	
   	if($_POST['password2']==$_POST['password'])
    {
    	
    }
    else {
    	exit ("Введенные пароли не совпадают! Проверьте правильность введенных паролей");
    }
   }

    
 if (empty($name) or empty($email) or empty($password) or empty($password2)) //если пользователь не ввел, то выдаем ошибку и останавливаем скрипт
    {
    exit ("Вы ввели не всю информацию, вернитесь назад и заполните все поля!");
    }
    //если введены, то обрабатываем их, чтобы теги и скрипты не работали, мало ли что люди могут ввести
    $name = stripslashes($name);
    $name = htmlspecialchars($name);
    $email = stripslashes($email);
    $email = htmlspecialchars($email);
    $password = stripslashes($password);
    $password = htmlspecialchars($password);
    $password2 = stripslashes($password2);
    $password2 = htmlspecialchars($password2);
    //$radio1 = stripslashes($radio1);
    //$radio1 = htmlspecialchars($radio1);
 //удаляем лишние пробелы
    $name = trim($name);
    $email = trim($email);
    $password = trim($password);
    $password2 = trim($password2);
 // подключаемся к базе
    include ("bd.php");// файл bd.php должен быть в той же папке, что и все остальные, если это не так, то просто измените путь 
	

 // проверка на существование пользователя с таким же логином
    $result = mysql_query("SELECT id FROM users WHERE password='$password'",$db);
    
    $myrow = mysql_fetch_array($result);
    if (!empty($myrow['password'])) {
    exit ("Извините, введённый вами пароль уже зарегистрирован. Введите другой пароль.");
    } 

    {
    	$name = $_REQUEST['name'];
        $email = $_REQUEST['email'];
        // Пароль хешируется
        $password = password_hash($_REQUEST['password'], PASSWORD_DEFAULT);
        // хешируем хеш, который состоит из логина и времени
        $hash = md5($name . time());
    }

 // если такого нет, то сохраняем данные
    $result2 = mysql_query ("INSERT INTO users (name,email,password,password2,hash,email_confirmed) VALUES('$name','$email','$password','$password2','$hesh', 0)");
    // Проверяем, есть ли ошибки
    if ($result2=='TRUE') {
    
    	 echo "Вы успешно зарегистрированы! Теперь вы можете зайти на сайт. <a href='http://portfolio/'>Главная страница</a>";
    }
 else {
    echo "Вы уже зарегестрированны";
    }




    	//$name = $_REQUEST['name'];
        //$email = $_REQUEST['email'];
        
    	if($_POST['submit']){
        $to = 'pipl82308@gmail.com';
        $subject = 'Регистрация на сайте';
        $message = 'Здравствуйте вы прошли регистраци подтвердите свой Email перейдя по ссылке<a href="http://portfoio/">Нажмите для подтверждения Email</a>';
        $headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion(); 
        
        mail($to, $subject, $message, $headers);

        if (mail($to, $subject, $message, $headers)) {
            // Если да, то выводит сообщение
            echo 'Вам отправлено письмо перейдите в свой email <a href="$email"><a/>';
        }
     else {
        // Если ошибка есть, то выводить её 
        echo 'что то не то'; 
        exit;
    }
}

    	//$email = $_REQUEST['email_confirmed'];
    	$result2 = mysql_query ("UPDATE users SET 'email_confirmed' WHERE 1");      	
		if ($result2=='TRUE')
		{
		echo "Данные успешно обновлены.";
		}
		else
		{
		echo "Данные не обновлены!";
		exit;
		}
        

        $name = $_REQUEST['name'];
        $email = $_REQUEST['email'];
        // Пароль хешируется
        $password = password_hash($_REQUEST['password'], PASSWORD_DEFAULT);
        // хешируем хеш, который состоит из логина и времени
        $hash = md5($name . time());
        
        // Переменная $headers нужна для Email заголовка
        $headers  = "MIME-Version: 1.0\n";
        $headers .= "Content-type: text/html; charset=utf-8\n";
        $headers .= "To: <$email>\n";
        $headers .= "From: <pipl82308@gmail.com>\n";

         //Сообщение для Email
        $message = '
                <html>
                <head>
                <title>Подтвердите Email</title>
                </head>
                <body>
                <p>Что бы подтвердить Email, перейдите по <a href="http://portfolio.ru/confirmed.php?hash=' . $hash . '">ссылка</a></p>
                </body>
                </html>
                ';
                if (mail($email, "Подтвердите Email на сайте", $headers, $message)) {
            // Если да, то выводит сообщение
            echo 'Подтвердите на почте';
        }
     else {
        // Если ошибка есть, то выводить её 
        echo 'что то не то'; 
        exit;
    }
        
        // Добавление пользователя в БД
       // mysql_query($db, "INSERT INTO `users` (`name`, `email`, `password`, `hash`, `email_confirmed`) VALUES ('" . $name . "','" . $email . "','" . $password . "', '" . $hash . "', 1)");
        // проверяет отправилась ли почта
        


// Проверка есть ли хеш
if ($_GET['hash']) {
    $hash = $_GET['hash'];
    
    // Получаем id и подтверждено ли Email
    if ($result = mysql_query($db, "SELECT `id`, `email_confirmed` FROM `users` WHERE `hash`='" . $hash . "'")) {
        while( $row = mysql_fetch_assoc($result) ) { 
            echo $row['id'] . " " . $row['email_confirmed'];
            
            // Проверяет получаем ли id и Email подтверждён ли 
            if ($row['email_confirmed'] == 1) {
                // Если всё верно, то делаем подтверждение
                mysqli_query($db, "UPDATE `users` SET `email_confirmed`=0 WHERE `id`=". $row['id'] );
                echo "Email подтверждён";
            } else {
                echo "Что то пошло не так";
                exit;
            }
        } 
    } else {
        echo "Чтото";
        exit;
    }
} else {
    echo "Что кто";
    exit;
}
    









    
  

?>   

 
