<!DOCTYPE html>
<!-- saved from url=(0448)https://remokomp.ru/?utm_source=yandex&utm_medium=cpc&utm_campaign=cid|48204555|search&utm_content=gid|4051053471|aid|8387470196|19183035960_&utm_term=%D0%BC%D0%B0%D1%81%D1%82%D0%B5%D1%80%20%D0%BF%D0%BE%20%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82%D1%83%20%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BE%D0%B2&pm_source=none&pm_block=other&pm_position=2&region_name=%d0%9a%d0%b5%d0%bc%d0%b5%d1%80%d0%be%d0%b2%d0%be&yclid=2208363515137264576 -->
<html lang="ru"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	
	<title></title>
	<link href="./img/logo.jpg" rel="icon" type="img/logo">
	<meta content="width=device-width, minimum-scale=1" name="viewport">
	<link href="assets/style.css" rel="stylesheet" type="text/css">

	<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
  	<script src="js/typ.js"></script>
  	
</head>
<body>

<?php
$name = $_GET['name'];
$Phone = $_GET['Phone'];
$text = $_GET['text'];

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