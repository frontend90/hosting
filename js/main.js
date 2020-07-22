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