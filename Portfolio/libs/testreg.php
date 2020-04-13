<!DOCTYPE html>
<html lang="ru">

<head>
	
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Главная</title>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js#"></script>
	
	
	
</head>
<body>
<?php
    session_start();//  вся процедура работает на сессиях. Именно в ней хранятся данные  пользователя, пока он находится на сайте. Очень важно запустить их в  самом начале странички!!!
//if (isset($_POST['name'])) { $name = $_POST['name']; if ($name == '') { unset($login);} } //заносим введенный пользователем логин в переменную $name, если он пустой, то уничтожаем переменную

if (isset($_POST['email'])) { $email=$_POST['email']; if($email =='') { unset($email);} }

if (isset($_POST['password'])) { $password=$_POST['password']; if ($password =='') { unset($password);} }
    //заносим введенный пользователем пароль в переменную $password, если он пустой, то уничтожаем переменную

	//if (isset($_POST['password2'])) { $password2 = $_POST['password2']; if ($password2=='') {unset ($password);} }

if (empty($email) or empty($password)) //если пользователь не ввел, то выдаем ошибку и останавливаем скрипт
    {
    exit ("Вы ввели не всю информацию, вернитесь назад и заполните все поля!");
    }
    //если логин и пароль введены,то обрабатываем их, чтобы теги и скрипты не работали, мало ли что люди могут ввести
    $email = stripslashes($email);
    $email = htmlspecialchars($email);
	$password = stripslashes($password);
    $password = htmlspecialchars($password);
    //удаляем лишние пробелы
    $email = trim($email);
    $password = trim($password);
    // подключаемся к базе
    include ("bd.php");// файл bd.php должен быть в той же папке, что и все остальные, если это не так, то просто измените путь 
 
$result = mysql_query("SELECT * FROM users WHERE email='$email'",$db); //извлекаем из базы все данные о пользователе с введенным email
    $myrow = mysql_fetch_array($result);
    if (empty($myrow['email']))
    {
    //если пользователя с введенным email не существует
    exit ("Извините, данный пользователь не зарегестрирован пройдите регистрацию <a href='http://portfolio/'>Главная страница</a> ");
    }
    else {
    //если существует, то сверяем пароли
    if ($myrow['password']==$password) {
    //если пароли совпадают, то запускаем пользователю сессию! Можете его поздравить, он вошел!
    $_SESSION['email']=$myrow['email']; 
    $_SESSION['id']=$myrow['id'];//эти данные очень часто используются, вот их и будет "носить с собой" вошедший пользователь
    echo "Вы успешно вошли на сайт! Перейдите по ссылке <a href='http//portfolio/'>Главная страница</a>";
    }
 else {
    //если пароли не сошлись

    exit ("Извините, введённый вами login или пароль неверный.");
    }
    }
    ?>