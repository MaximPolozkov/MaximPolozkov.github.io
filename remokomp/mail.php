<!DOCTYPE html>

<html lang="ru"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	
	
  	
</head>
<body>

<?php
$name = $_POST['name'];
$Phone = $_POST['Phone'];
$text = $_POST['text'];

$name = htmlspecialchars($name);
$Phone = htmlspecialchars($Phone);
$text = htmlspecialchars($text);

$name = urldecode($name);
$Phone = urldecode($Phone);
$text = urldecode($text);

$name = trim($name);
$Phone = trim($Phone);
$text = trim($text);


mail("pipl82308@gmail.com", "Заявка с сайта", "Имя:".$name.". Телефон: ".$Phone. ". Описание проблемы:".$text ,"From: example@mail.ru \r\n");

if(mail("pipl82308@gmail.com", "Заявка с сайта", "Имя:".$name.". Телефон: ".$Phone. ". Причины:".$text ,"From: example@mail.ru \r\n"))
	{
	$iso ="<img src='https://sun9-68.userapi.com/c858436/v858436065/f0159/e91kKqy5Yug.jpg'>";	
	$gif = "<img src='https://hotel-bilet.ru/img/mail.gif'>";
    echo'<center>',$iso,'</center>','<center>',$gif,'</center>';
} else {
	$ochibka ="img src='./img/ochibka.png'";
    echo '<center>',$ochibka,'</center>';
}
?>

</body>
</html>