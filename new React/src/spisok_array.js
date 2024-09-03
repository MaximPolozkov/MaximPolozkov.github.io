
let spisok = {
   

   Avatar:[
      {yes: true, no: false}
   ],


   Master1: {
      Logo:[
         {id:0, name: "Томара", img: require('./Images/imgToma/Toma.jpg')} 
      ],
   
      slider: [
         {id: 0, img: require('./Images/HeaderCenter.png'), price: '1500p', diskript: 'Эти процедуры позволяют чувствовать себя уверенно в любой ситуации. Более того, нейл-дизайн помогает разнообразить образ, сделать его более стильным и актуальным.' },
         {id: 1, img: require('./Images/HeaderLeft.png'), price: '1800p', diskript: 'Салон красоты «Сахар» предлагает девушкам качественные услуги ногтевого сервиса, а опытные мастера – гордость салона.' },
         {id: 2, img: require('./Images/Logo.jpg'), price: '2500p', diskript: 'Мы предлагаем широкий выбор уходовых процедур, разные виды маникюра и педикюра. В салоне используются только профессиональные декоративные покрытия известных мировых брендов.' },
         {id: 3, img: require('./Images/Avatarka.jpg'), price: '3600p', diskript: 'Мы рады предложить нашим гостям эксклюзивные услуги. Например, в салоне «Сахар» можно пройти процедуру маникюра и педикюра в 4 руки. Это поможет сэкономить время, получить прекрасный результат и почувствовать себя настоящей королевой. Наши мастера очень стараются, чтобы девушка вышла из салона счастливой и красивой!' }
      ]
   },

    Master2:{
      Logo:[
         {id:0, name: "Лена", img: require('./Images/imgLena/Lena.jpg')},
         {buttomName: "Выбрать мастера"} 
      ],
   
      slider: [
         {id: 0 , nameUslugi: 'Классический маникюр (педикюр)', img: require('./Images/HeaderCenter.png'), price: '1500 pублей', diskript: 'Эти процедуры позволяют чувствовать себя уверенно в любой ситуации. Более того, нейл-дизайн помогает разнообразить образ, сделать его более стильным и актуальным.', times: 60 },
         {id: 1, nameUslugi: 'Необрезной маникюр (педикюр)', img: require('./Images/HeaderLeft.png'), price: '1800 pублей', diskript: 'Салон красоты «Сахар» предлагает девушкам качественные услуги ногтевого сервиса, а опытные мастера – гордость салона.', times: 120 },
         {id: 2, nameUslugi: 'Наращивание ногтей', img: require('./Images/Logo.jpg'), price: '2500 pублей', diskript: 'Мы предлагаем широкий выбор уходовых процедур, разные виды маникюра и педикюра. В салоне используются только профессиональные декоративные покрытия известных мировых брендов.', times: 180},
         {id: 3, nameUslugi: 'Парафинотерапия', img: require('./Images/Avatarka.jpg'), price: '3600 pублей', diskript: 'Мы рады предложить нашим гостям эксклюзивные услуги. Например, в салоне «Сахар» можно пройти процедуру маникюра и педикюра в 4 руки. Это поможет сэкономить время, получить прекрасный результат и почувствовать себя настоящей королевой. Наши мастера очень стараются, чтобы девушка вышла из салона счастливой и красивой!', times: 240 }
      ],

      myWorks: [
         {name: "a" ,img: require('./Images/imgLena/MyWorks/work1.jpg')},
         {name: "b", img: require('./Images/imgLena/MyWorks/Work2.jpg')},
         {name: "c", img: require('./Images/imgLena/MyWorks/Work3.jpg')},
         {name: "d", img: require('./Images/imgLena/MyWorks/work1.jpg')},
         {name: "e", img: require('./Images/imgLena/MyWorks/Work2.jpg')},
         {name: "f", img: require('./Images/imgLena/MyWorks/Work3.jpg')}
      ],

   }
      
   
    
}



 export default (spisok);


 