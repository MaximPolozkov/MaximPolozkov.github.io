 /*Кнопка Menu*/
 var main=function() {
 	$('.icon-menu').click(function() {
 		$('.menu').animate({left:'0px'}, 200);
 		$('bodey').animate({left: '285px'}, 200);
 	});
 	
 	$('.icon-close').click(function() {
 		$('.menu').animate({left: '-285px'}, 200);
 		$('body').animate({left: '0px'}, 200);
 	});
 }
 
 
 /*Конец Menu*/

/*Кнопка Слайдер*/
 $(function(){
 	$('button[name=btn]').click(function() {
 		location.href="sit.html"
 	});
 });
 /*Конец кнопки*/

 
 

 /*Форма регистрации*/
 function show(state){
    document.getElementById('window').style.display = state;
    document.getElementById('gray').style.display = state;
 }

 function wosh(state){
    document.getElementById('vhod').style.display = state;
    document.getElementById('gyt').style.display = state;
 } 

 
    
    
  