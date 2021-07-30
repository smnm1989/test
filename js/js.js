
$(function () {
  // ドロワー
  $(document).ready(function () {
    $('.drawer').drawer();
  });

  $('.drawer').on('drawer.opened', function () {
    $('.drawer-hamburger-pic').removeClass('open-pic');
    $('.drawer-hamburger-pic').addClass('close-pic');

  });
  $('.drawer').on('drawer.closed', function () {
    $('.drawer-hamburger-pic').removeClass('close-pic');
    $('.drawer-hamburger-pic').addClass('open-pic');
  });
  $('.drawer-hamburger-pic').click(function () {
    $('main, header').toggleClass('open');
  });

  $('.drawer-menu-item').click(function(){
    $('.drawer').drawer('close');
    $('main, header').toggleClass('open');
});


  //カルーセルスライダー
  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    loopedSlide: 6,
    speed: 400,
    spaceBetween: 20,
    width: 274,
    breakpoints: {
      768: {
        width: 400,
        spaceBetween: 40,
      }
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

  });

  // Q&Aアコーディング
  $('.qaa-question').click(function () {
    $(this).next().slideToggle();
    $(this).children('.ac-icon').toggleClass('ac-open');
  });

  //トップに戻る
  var pagetop = $('#page-top');
  // ボタン非表示
  pagetop.hide();
  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });

  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });

  //メニューバー

  $('a[href^="#"]').click(function () {
    // .headerクラスがついた要素の高さを取得
    let header = $(".header").innerHeight();
    let speed = 300;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    // トップからの距離からヘッダー分の高さを引く
    let position = $(target).offset().top - header;
    // その分だけ移動すればヘッダーと被りません
    $("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });

  // Google Form
  let $form = $('#js-form')
  $form.submit(function (e) {
    $.ajax({
      url: $form.attr('action'),
      data: $form.serialize(),
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          //送信に成功したときの処理 
          $form.slideUp()
          $('#js-success').slideDown()
        },
        200: function () {
          //送信に失敗したときの処理 
          $form.slideUp()
          $('#js-error').slideDown()
        }
      }
    });
    return false;
  });

  //formの入力確認
  let $submit = $('#js-submit')
  $('#js-form input, #js-form textarea').on('change', function () {
    if (
      $('#js-form input[type="text"]').val() !== "" &&
      $('#js-form input[type="email"]').val() !== "" &&
      $('#js-form textarea').val() !== "" &&
      $('#js-form input[name="entry.2025052438"]').prop('checked') === true
    ) {
      //すべて入力済みのとき、押せる
      $submit.prop('disabled', false)
      $submit.addClass('-active')
    } else {
      //未入力があるとき、押せない
      $submit.prop('disabled', true)
      $submit.removeClass('-active')
    }
  })

  //wow
  new WOW().init();
});

