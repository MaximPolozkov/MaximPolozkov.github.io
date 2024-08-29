var importCdn = document.createElement('script');

importCdn.setAttribute('src', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js');

document.head.appendChild(importCdn);

        var screenWidth = window.innerWidth;
        if(screenWidth < 760){
            const progressCircle = document.querySelector(".autoplay-progress svg");
            const progressContent = document.querySelector(".autoplay-progress span");

    var swiper = new Swiper('.swiper', {
        
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },

      rewind: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        },
      },
      debugger: true,
    });
            
        }
        
        if(screenWidth > 760){
            
            const progressCircle = document.querySelector(".autoplay-progress svg");
            const progressContent = document.querySelector(".autoplay-progress span");
            var swiper = new Swiper('.swiper', {
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },


            slidesPerView: 3,
            rewind: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            },
            on: {
              autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        },
            },
          });
        
    
        }



        


        

        const modal = document.getElementById("modal");
        const close = document.getElementById("close")
        const headerLogo = document.querySelector('.header__logo');
        
        // Отображаем модальное окно и устанавливаем источник изображения
        function displayModal(img){

            modal.style.display = "block";
            headerLogo.style.display = "none";

            const progressCircle = document.querySelector(".autoplay-progress svg");
        const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper('.modal__swiper', {
        
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      
      rewind: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      debugger: true,
    });

        }

        

         // Скрываем содержимое модального окна, если пользователь кликнул вне его
        function hideModal()
        {  
            if (event.target == close) {
                modal.style.display = "none";
                headerLogo.style.display = "block";
                location.reload();
            }
        }


        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('fade-in');
                  entry.target.classList.remove('fade-out');
              } else {
                  entry.target.classList.remove('fade-in');
                  entry.target.classList.add('fade-out');
              }
          });
      });
  
      const elements = document.querySelectorAll('.pros__img1, .pros__img2, .pros__img3');
      elements.forEach((element) => {
          observer.observe(element);
      });
        
      