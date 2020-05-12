var selector = 'form';
$(selector).each(function (indx) {
    if ($(this).attr('action') === undefined) {
        $(this).attr('action', '/').attr('method', 'post');
    }
});
$(function () {

    $('input[name^="Phone"]').on('paste',function(e){
        e.preventDefault();
        var pastedData = e.originalEvent.clipboardData.getData('text');
        pastedData = pastedData.replace(/[^0-9]/g, '');
        if (pastedData.length > 9) {
            $(this).val(pastedData.slice(-10));
        }
        console.log(pastedData);
    });

    $(selector + '[action = "/"]').submit(function (e) {
        hide = 0;
        delay = 10000;
        success_msg = "Ваше сообщение отправлено. Мы вам перезвоним!";
        error_msg = "Ошибка отправки! Попробуйте еще раз.";
        wait_msg = 'Идет отправка...';
        redirect = '';
        action = 'mail.php';
        cur_id = '#' + $(this).attr('id');
        if ($(cur_id).attr('data-hide') !== undefined) {
            hide = parseInt($(cur_id).attr('data-hide'));
        }
        if ($(cur_id).attr('data-delay') !== undefined) {
            delay = parseInt($(cur_id).attr('data-delay'));
        }
        cur_success = $(cur_id).siblings('.w-form-done').text().trim();
        if (cur_success !== 'Thank you! Your submission has been received!') {
            success_msg = cur_success;
        }
        cur_error = $(cur_id).siblings('.w-form-fail').text().trim();
        if (cur_error !== 'Oops! Something went wrong while submitting the form') {
            error_msg = cur_error;
        }
        cur_wait = $(cur_id).find('[data-wait]').attr('data-wait');
        if (cur_wait !== 'Please wait...') {
            wait_msg = cur_wait;
        }
        cur_redirect = $(cur_id).attr('data-redirect');
        if (cur_redirect !== undefined) {
            redirect = cur_redirect;
        }
        cur_action = $(cur_id).attr('action');
        if (cur_action !== '/') {
            action = cur_action;
        }
        submit_div = $(cur_id).find('[type = submit]');
        submit_txt = submit_div.attr('value');
        if (wait_msg !== '') {
            submit_div.attr('value', wait_msg);
        }
        if ($(cur_id).attr('data-send') !== undefined) {
            $('<input type="hidden" name="sendto" value="' + $(cur_id).attr('data-send') + '">').prependTo(cur_id);
        }
        $('<input type="hidden" name="Форма" value="' + $(cur_id).attr('data-name') + '">').prependTo(cur_id);
        $('<input type="hidden" name="Страница" value="' + document.title + '">').prependTo(cur_id);
        $('<input type="hidden" name="required_fields">').prependTo(cur_id);
        required_fields = '';
        $(cur_id).find('[required=required]').each(function () {
            required_fields = required_fields + ',' + $(this).attr('name');
        });
        $(cur_id).find('[name=required_fields]').val(required_fields);
        e.preventDefault();
        var formData = new FormData($(cur_id)[0]);

        var phone = $(this).find('[id^="Phone"]').val();
        var vopros = $(this).find('[id="vopros"]').val();
        var discount = $(this).find('[name="discount"]').val();
		var campaign = $(this).find('[name="campaign"]').val();

		var crmParams = '<fio></fio><region>' + encodeURIComponent(cityCode) + '</region>';
        crmParams += '<phone1>' + encodeURIComponent(phone) + '</phone1>';
        crmParams += '<work>' + encodeURIComponent('Коллцентр Частный Мастер, Скидка: ' + discount + ', Страница: ' + document.title + (vopros?' Вопрос: ' + vopros:'')) + '</work>';
        crmParams += '<clickid>' + encodeURIComponent(campaign) + '</clickid>';
		crmParams += '<tip>0</tip><zvon>0</zvon><chm>1</chm>';
        formData.append('crmParams',crmParams);
        /*var i = document.createElement("img");
        i.src = serviceUrl;*/

        console.dir(formData);
        $.ajax({
            url: action,
            type: 'POST',
            processData: false,
            contentType: false,
            data: formData
        }).done(function (result) {
            console.log(result);
            if (result == 'success') {
                if (redirect !== '' && redirect !== '/-') {
                    document.location.href = redirect;
                    return (true);
                }
                $(cur_id).siblings('.w-form-fail').hide();
                replay_class = '.w-form-done';
                replay_msg = success_msg;
            } else {
                $(cur_id).siblings('.w-form-done').hide();
                if (result === 'ERROR_REQUIRED') {
                    replay_msg = 'Не заполнено обязательное поле!'
                } else {
                    replay_msg = error_msg;
                    console.log(result);
                }
                replay_class = '.w-form-fail';
            }
            replay_div = $(cur_id).siblings(replay_class);
            replay_div.find('div,p').text(replay_msg);
            replay_div.show();
            if (hide) {
                $(cur_id).hide();
            }
            submit_div.attr('value', submit_txt);
            if (delay !== 0) {
                replay_div.delay(delay).fadeOut();
            }
            if (result == 'success') {
                $(cur_id).trigger("reset");
            }
        });
    });
});
//$('textarea').val('');
//$('.w-form [data-name]').each(function (indx) {
//    $(this).attr('name', $(this).attr('data-name'));
//});
$('label[for^=file]').each(function () {
    file_id = $(this).attr('for');
    $(this).after('<input name="file[]" type="file" id="' + file_id + '" multiple style="display:none;">');
    $('input#' + file_id).change(function () {
        $(this).siblings('div[for]').text('Файл выбран.');
    });
});


/*globals window, $, clearInterval, setInterval */

$(function () {
  'use strict';

  var          hl,
         newsList = $('.news-headlines'),
    newsListItems = $('.news-headlines li'),
    firstNewsItem = $('.news-headlines li:nth-child(1)'),
      newsPreview = $('.news-preview'),
          elCount = $('.news-headlines').children(':not(.highlight)').length,
         vPadding = (parseInt(firstNewsItem.css('padding-top').replace('px', ''), 10)) +
                    (parseInt(firstNewsItem.css('padding-bottom').replace('px', ''), 10)),
          vMargin = (parseInt(firstNewsItem.css('margin-top').replace('px', ''), 10)) +
                    (parseInt(firstNewsItem.css('margin-bottom').replace('px', ''), 10)),
         cPadding = (parseInt($('.news-content').css('padding-top').replace('px', ''), 10)) +
                    (parseInt($('.news-content').css('padding-bottom').replace('px', ''), 10)),
            speed = null, // this is the speed of the switch in milliseconds
          myTimer = null,
         siblings = null,
      totalHeight = null,
          indexEl = 1,
                i = null;

  // the css animation gets added dynamicallly so 
  // that the news item sizes are measured correctly
  // (i.e. not in mid-animation)
  // Also, appending the highlight item to keep HTML clean
  newsList.append('<li class="highlight nh-anim"></li>');
  hl = $('.highlight');
  newsListItems.addClass('nh-anim');

  function doEqualHeight(c) {

    if (newsPreview.height() < newsList.height()) {
      newsPreview.height(newsList.height());
    } else if ((newsList.height() < newsPreview.height()) && (newsList.height() > parseInt(newsPreview.css('min-height').replace('px', ''), 10))) {
      newsPreview.height(newsList.height());
    }

    if ($('.news-content:nth-child(' + c + ')').height() > newsPreview.height()) {
      newsPreview.height($('.news-content:nth-child(' + c + ')').height() + cPadding);
    }
  }

  function doTimedSwitch() {

    myTimer = setInterval(function () {
      if (($('.selected').index() + 1) === elCount) {
        firstNewsItem.trigger('click');
      } else {
        $('.selected').next(':not(.highlight)').trigger('click');
      }
    }, speed);

  }

  // when the user mouses over a news content item
  // the auto-switching will stop
  $('.news-content').on('mouseover', function () {
    clearInterval(myTimer);
  });

   auto-switching starts again
  $('.news-content').on('mouseout', function () {
    doTimedSwitch();
  });

  function doClickItem() {

    newsListItems.on('click', function () {

      newsListItems.removeClass('selected');
      $(this).addClass('selected');

      siblings = $(this).prevAll();
      totalHeight = 0;

       this loop calculates the height of individual elements, including margins/padding
      for (i = 0; i < siblings.length; i += 1) {
       	totalHeight += $(siblings[i]).height();
        totalHeight += vPadding;
        totalHeight += vMargin;
      }

       this moves the highlight vertically the distance calculated in the previous loop
       and also corrects the height of the highlight to match the current selection
      hl.css({
        top: totalHeight,
        height: $(this).height() + vPadding
      });

      indexEl = $(this).index() + 1;

      $('.news-content:nth-child(' + indexEl + ')').siblings().removeClass('top-content');
      $('.news-content:nth-child(' + indexEl + ')').addClass('top-content');

      clearInterval(myTimer);
       comment out doTimedSwitch() if you don'top-content'
       want it to rotate automatically
      doTimedSwitch();
      doEqualHeight(indexEl);
    });

  }

  function doWindowResize() {

    $(window).resize(function () {

      clearInterval(myTimer);
       click is triggered to recalculate and fix the highlight position
      $('.selected').trigger('click');

    });

  }

  // this is where everything gets initialized
  //doClickItem();
  doWindowResize();
  $('.selected').trigger('click');

});




