<!DOCTYPE html>
<html lang="ru">




<head>
	
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Главная</title>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js#"></script>
	<script src="assets/script.js.js"></script>
	<link rel="stylesheet" href="assets/css/style.css">
	
	
</head>
<body>

<?php

 
$db_Notebook = mysql_connect("localhost", "root", "", "Notebook");
//mysql_select_db("users.Notebook",$db_Notebook);
if($db_Notebook == false)
{
	echo 'Не удалось подключиться к БД!<br>';
	echo mysqli_connect_error();
	exit();
} 

	  	
    $result = mysqli_query("SELECT * FROM Notebook WHERE status=2");
    
    while ( ($record=mysql_fetch_assoc($result)) )

    {
    	print_r($record);
    	echo'<hr>';
    }

    
    
    
?>