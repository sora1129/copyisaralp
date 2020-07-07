$(function() {

  // よくある質問アコーデイオン部分
  $('.question-title').on('click', function () {
    $(this).next().slideToggle(250);
    $(this).toggleClass('open', 250);
  });

  // 資料請求ボタン→資料請求フォームへ
  $('.form-btn').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop' : position
    },600);

  });

// 右下固定ボタン
  var pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function() {
    if($(this).scrollTop() > 75) {
      pagetop.fadeIn();
    }else {
      pagetop.fadeOut();
    } 

  });
  pagetop.click(function() {
    $('html, body').animate({ scrollTop : 0 },600)
    return false;
  });

// 受講の流れ スマホレスポンシブデザイン アコーディオン
$(".accordion-container").click(function () {
  $(".accordion-container").not(this).removeClass("open").next().slideUp(300);
  $(this).toggleClass("open").next().slideToggle(250);
});

$(".js-accordion-title").click(function () {
  $(".js-accordion-title").not(this).removeClass("open").next().slideUp(250);
  $(this).toggleClass("open").next().slideToggle(250);
});

});