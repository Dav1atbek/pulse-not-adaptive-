$(document).ready(() => {
  $('.catalog-heart__slick').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed:1000,
    autoplay: true,
    autoplaySpeed: 2500,
  });
  
  $('ul.catalog-tabs').on('click', 'li:not(.catalog-tab_active)', function () {
      $(this)
          .addClass('catalog-tab_active').siblings().removeClass('catalog-tab_active')
          .closest('div.container').find('div.catalog-content').removeClass('catalog-content_active').eq($(this).index()).addClass('catalog-content_active');
  });
  
  $('.catalog-item__link').each(function (i) {
    $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  })
  
  $('.catalog-item__back').each(function (i) {
    $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  })


  // modal
  
  // $('[data-modal=consultation]').on('click', function(){
  //   $('.overlay, #consultation').fadeIn('slow');
  // });
  // $('.modal__close').on('click', function(){
  //   $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  // });


  // $('.button_buy').each(function(i) {
  //   $(this).on('click', function() {
  //     $('#order .modal__descr').text($('.catalog-item__name').eq(i).text());
  //     $('.overlay, #order').fadeIn('slow');
  //   })
  // })1
  // $('.button_buy').on('click', function() {
  //   $('.button_buy').fadeIn('slow');
  // });
  // $('.button_buy').on('click', function() {
  //   $('.order').fadeOut('slow');
  // });
  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
});

$('.button_buy').each(function (i) {
    $(this).on('click', function () {
        $('#order .modal__descr').text($('.catalog-item__name').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    });
});

  // $('.button_submit').on('click', function(){
  //   $('.modal_mini').fadeIn('slow');
  // });
  // $('.button_submit').on('click', function(){
  //   $('.modal_mini').fadeOut('slow');
  // });
});


