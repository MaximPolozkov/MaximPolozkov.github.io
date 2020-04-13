 <?php

 if(isset($_POST['Notebook'])){
// подключаемся к базе
    include ("bd.php");// файл bd.php должен быть в той же папке, что и все остальные, если это не так, то просто измените путь.
	
	
    $Notebook = $_REQUEST['Notebook'];
    $content = $_REQUEST['content'];
    $images = $_REQUEST['images'];
    $result=mysql_query("SELECT * FROM Notebook WHERE ");
    if ($result=='true'){
    while($row=mysql_fetch_array($result))
    	$id=$row['id'];
    	$Notebook=$row['Notebook'];
    	$content=$row['content'];
    	$images=$row['images'];

    	echo $id.")".$Notebook.$content.$images."<br />";
    }else{
    	echo "string";
    }
}
    

?>