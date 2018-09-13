$(function () {

  // slider
  var mySwiper = new Swiper ('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  // horizontal scroll
  var ps = new PerfectScrollbar('#cardList', {
    maxScrollbarLength: 255
  });

  // smooth scroll
  $('.smooth-scroll').on('click',function (e) {
    e.preventDefault();
    var headerHeight = $('.header').height();
    var target = $(this).attr('href');
    var pos = $(target).offset().top - headerHeight;
    $('html,body').animate({scrollTop: pos}, 500, 'linear');
  });

  // menu icon
  $('.menu-icon').on('click',function () {
    $(this).toggleClass('is-open');
    $('.header_nav').stop().slideToggle();
  })

  // tab menu
  var windowWidth = window.innerWidth;

  $(window).on('load resize', function () {
    if (windowWidth > 768) {
      $outputHTML = $('.tab-contents').html();
      $('.tab-contents-output').html($outputHTML);
      $('.tab-item:first-child').addClass('is-active');
      $('.tab-item:first-child img').attr('src','/img/tab/tab-item01-active.png');
      $('tab-contents-output').fadeIn('fast');
    };
  });

  $('.tab-item').on('click', function () {
    if(windowWidth > 768) {
      $('.tab-item').removeClass('is-active');
      $(this).addClass('is-active');

      $('.tab-item img').each(function () {
        $(this).attr('src',$(this).attr('src').replace('-active.','-passive.'));
      });

      $img = $('img',this).attr('src').replace('-passive.','-active.');
      $('img',this).attr('src',$img);

      $outputHTML = $(this).next('.tab-contents').html();
      $('.tab-contents-output').html($outputHTML);
    }

    else {
      if($(this).hasClass('is-active')) {
        $(this).removeClass('is-active');
        $(this).next('.tab-contents').slideUp(200,'linear');
      }else {
        $(this).addClass('is-active');
        $(this).next('.tab-contents').slideDown(200,'linear');
      };
    };
  });

});
