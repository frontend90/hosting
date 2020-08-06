/*************  pagination   ****************/
$('.pagination').pagination({
  items: 1,
  contents: 'contents'
});

/**********   active menu    *****************/
$(function () {
  $('.first-level li a').each(function () {
    var location = window.location.href;
    var link = this.href;
    if (location == link) {
      $(this).addClass('active');
    }
  });
});

/**********   burger (выпадающие меню-desktop) ****************/
$(document).ready(function () {
  var _link = $(".first-level").children("li");
  _link.hover(function (e) {
    e.preventDefault();
    var _this = $(this);
    if (_this.children(".second-level").html() !== undefined) {
      if (e.type === "mouseenter") {
        _this.children(".second-level").slideDown(200);
      } else {
        _this.children(".second-level").slideUp(200);
      }
    }
  });
});

/*************     изменение HTML  (900-660px)    ******************/
$(window).resize(function (event) {
  adaptive_function();
});

function adaptive_header(w, h) {
  var topHeader = $('.top-header'); /* куда закинуть блок */
  var mainMenu = $('.main-menu');
  var headerMenu = $('.first-level, .burger'); /* блок, который закинуть */
  var registration = $('.registration');
  if (w < 901) {
    /* ширина */
    if (!headerMenu.hasClass('done')) {
      headerMenu.addClass('done').appendTo(topHeader);
    }
  } else {
    if (headerMenu.hasClass('done')) {
      headerMenu.removeClass('done').prependTo($('.main-menu')); /* вернуть блок на прежнее место */
    }
  }
  if (w < 661) {
    /* ширина */
    if (!registration.hasClass('done')) {
      registration.addClass('done').appendTo(mainMenu);
    }
  } else {
    if (registration.hasClass('done')) {
      registration.removeClass('done').prependTo($('.top-header')); /* вернуть блок на прежнее место */
    }
  }
}

function adaptive_function() {
  var w = $(window).outerWidth();
  var h = $(window).outerHeight();
  adaptive_header(w, h);
}
adaptive_function();

/************    burger  (открыть, закрыть)    *************/
let user_icon = document.querySelector('.burger');
user_icon.addEventListener("click", function (e) {
  let user_menu = document.querySelector('.first-level');
  user_menu.classList.toggle('show');
  user_icon.classList.toggle('active');
});

document.documentElement.addEventListener("click", function (e) {
  if (!e.target.closest('.burger')) {
    let user_menu = document.querySelector('.first-level');
    user_menu.classList.remove('show');
    user_icon.classList.remove('active');
  }
});

/*************       header  slick       ************/
$('.header-slider').slick({
  prevArrow: $('.header-arrows-left'),
  nextArrow: $('.header-arrows-right'),
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  autoplay: true,
  speed: 1000,
  responsive: [{
    breakpoint: 661,
    settings: {
      arrows: false
    }
  }]
});

/*-------------     modal windows   -------------*/
$('[data-modal]').click(function () {
  event.preventDefault();

  let $this = $(this);
  let modalId = $this.data('modal');

  $(modalId).addClass('show');
});

$('.close').click(function () {
  event.preventDefault();

  let $this = $(this);
  let modalParent = $this.parents('.modal');

  modalParent.removeClass('show');
});

$('.register-modal p a').click(function () {
  event.preventDefault();

  $('.register-modal').removeClass('show');
});

/*************       domain-other  slick       ************/
$('.domain-other-slider').slick({
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  autoplay: true,
  speed: 1000,
  responsive: [{
    breakpoint: 801,
    settings: {
      dots: false
    }
  }]
});

/*************       service-clients  slick       ************/
$('.service-clients-slider').slick({
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  autoplay: true,
  speed: 1000,
  responsive: [{
    breakpoint: 801,
    settings: {
      dots: false
    }
  }]
});

/************   input animation    *************/
$(".input input").focus(function () {
  $(this).next("p").addClass("active");
});
$(".input input").blur(function () {
  if ($(this).val() === "") {
    $(this).next("p").removeClass("active");
  }
});

/************   masonry     **************/
$('.testimonials-clients-wrap').masonry({
  itemSelector: '.block',
  gutter: 30,
  percentPosition: true
});