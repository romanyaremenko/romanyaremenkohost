"use strict";

//toggle menu
$(document).ready(function () {
  $('.menu__btn').click(function () {
    $('.header__top').addClass('header__top--active');
    $('body').addClass('overflow-hidden');
    $('html').addClass('overflow-hidden');
    $('body').addClass('bg-hide');
    $('.menu__btn').css('opacity', '0');
    $('.menu__btn-mob').css('opacity', '1');
    $('.menu__btn-mob').css('display', 'flex');
  });
  $('.menu__btn-mob').click(function () {
    hideWindiwsMenu();
  });
});

var hideWindiwsMenu = function hideWindiwsMenu() {
  $('.header__top').removeClass('header__top--active');
  $('body').removeClass('overflow-hidden');
  $('html').removeClass('overflow-hidden');
  $('body').removeClass('bg-hide');
  $('.menu__btn').css('opacity', '1');
  $('.menu__btn-mob').css('opacity', '0');
  $('.menu__btn-mob').css('display', 'none');
}; //toggle menu
// $(document).ready(function () {
//   let ticker = document.querySelector('.ticker')
//     , list = document.querySelector('.ticker__list')
//     , clone = list.cloneNode(true)
//   ticker.append(clone)
// });


var animItems = document.querySelectorAll('._anim-items');

function lazyloadBlock(blockId, html, setSwiper, setEvents) {
  var wt = $(window).scrollTop(); //* top of the window

  var wb = wt + $(window).height(); //* bottom of the window

  $(blockId).each(function () {
    var ot = $(this).offset().top - 1000; //* top of object (i.e. advertising div)

    if (!$(this).attr("loaded") && wb >= ot) {
      $(this).html(html);
      $(this).attr("loaded", true);
      animItems = document.querySelectorAll('._anim-items');

      if (setSwiper) {
        if ($('body').width() <= 768) {
          var swiper = new Swiper(".mySwiper", {
            slidesPerView: "auto",
            spaceBetween: -20,
            freeMode: true
          });
        }
      }

      if (setEvents) {
        setEvents();
      }
    }
  });
}

$('.ticker').simplemarquee({
  speed: 50,
  cycles: Infinity,
  space: 25,
  delayBetweenCycles: .1,
  handleHover: false,
  handleResize: false
});

var allLazyLoadFunctions = function allLazyLoadFunctions() {
  lazyloadBlock(aboutLazyLoad, aboutLazyLoadHTML);
  lazyloadBlock(connectNftLazyLoad, connectNftLazyLoadHTML);

  if ($('body').width() >= 1024) {
    lazyloadBlock(appLazyLoad, appLazyLoadHTML);
  }

  lazyloadBlock(appMobLazyLoad, appMobLazyLoadHTML, true);
  lazyloadBlock(roadmapLazyLoad, roadmapLazyLoadHTML, false, setRoadmapEvents);
  lazyloadBlock(infoLazyLoad, infoLazyLoadHTML);
  lazyloadBlock(addressLazyLoad, addressLazyLoadHTML, false, addressEvents);
  lazyloadBlock(contactUsLazyLoad, contactUsLazyLoadHTML, false, contactUsEvents);
}; //heder anim
// if ($('body').width() > 1024) {


console.log('window');

if (animItems.length > 0) {
  var animOnScroll = function animOnScroll() {
    allLazyLoadFunctions();

    for (var index = 0; index < animItems.length; index++) {
      var animItem = animItems[index];
      var animItemHeight = animItem.offsetHeight;
      var animItemOffset = offset(animItem).top;
      var animStart = 4;
      var animatemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animatemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (pageYOffset > animItemOffset - animatemPoint && pageYOffset < animItemOffset + animItemHeight) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-not')) {
          animItem.classList.remove('_active');
        }
      }
    }
  };

  var offset = function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  };

  window.addEventListener("scroll", animOnScroll);
  setTimeout(function () {
    animOnScroll();
  }, 300);
} // }
// var smallMediaQuery = window.matchMedia("(min-width:1025px)"),
//   mediumMediaQuery = window.matchMedia("(min-width:769px) and (max-width:1024px)"),
//   tableMediaQuery = window.matchMedia("(min-width:581px) and (max-width:768px)"),
//   mobMediaQuery = window.matchMedia("(min-width:320px) and (max-width:580px)");
// // largeMediaQuery = window.matchMedia("(min-width:769px) and (max-width:992px)");
// let interval = 30
// //Create listener for SMALL
// var smallListener = function (e) {
//   if (e.matches) {
//     var tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl.to(".banner-items-desc__item-1", { x: 100, duration: 1, opacity: 1 });
//     tl.to(".banner-items-desc__item-1", { x: 300, duration: 1, delay: interval });
//     tl.to(".banner-items-desc__item-1", { x: 300, duration: 1, delay: interval, opacity: 0 });
//     tl.to(".banner-items-desc__item-1", { x: 0, duration: 3, opacity: 0 });
//     var tl2 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl2.to(".banner-items-desc__item-2", { x: 200, duration: 1, opacity: 1 });
//     tl2.to(".banner-items-desc__item-2", { x: 400, duration: 1, delay: interval });
//     tl2.to(".banner-items-desc__item-2", { x: 400, duration: 1, delay: interval, opacity: 0 });
//     tl2.to(".banner-items-desc__item-2", { x: 0, duration: 3, opacity: 0 });
//     var tl3 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     // tl3.to(".banner-items-desc__item-3", { x: 200, duration: 1, opacity: 1 });
//     tl3.to(".banner-items-desc__item-3", { x: 400, duration: 1, opacity: 1 });
//     tl3.to(".banner-items-desc__item-3", { x: 600, duration: 1, delay: interval });
//     tl3.to(".banner-items-desc__item-3", { x: 600, duration: 1, delay: interval, opacity: 0 });
//     tl3.to(".banner-items-desc__item-3", { x: 0, duration: 3, opacity: 0 });
//     var tl4 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl4.to(".banner-items-desc__item-4", { x: 300, duration: 1, opacity: 1 });
//     tl4.to(".banner-items-desc__item-4", { x: 500, duration: 1, delay: interval });
//     tl4.to(".banner-items-desc__item-4", { x: 500, duration: 1, delay: interval, opacity: 0 });
//     tl4.to(".banner-items-desc__item-4", { x: 0, duration: 3, opacity: 0 });
//     var tl5 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     // tl5.to(".banner-items-desc__item-5", { x: 200, duration: 1, opacity: 1 });
//     tl5.to(".banner-items-desc__item-5", { x: 100, duration: 1, opacity: 1 });
//     tl5.to(".banner-items-desc__item-5", { x: 200, duration: 1, delay: interval });
//     tl5.to(".banner-items-desc__item-5", { x: 200, duration: 1, delay: interval, opacity: 0 });
//     tl5.to(".banner-items-desc__item-5", { x: 0, duration: 3, opacity: 0 });
//   }
// };
// var mediumListener = function (e) {
//   if (e.matches) {
//     var tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl.to(".banner-items-desc__item-1", { x: 77, duration: 1, opacity: 1 });
//     tl.to(".banner-items-desc__item-1", { x: 235, duration: 1, delay: interval });
//     tl.to(".banner-items-desc__item-1", { x: 235, duration: 1, delay: interval, opacity: 0 });
//     tl.to(".banner-items-desc__item-1", { x: 0, duration: 3, opacity: 0 });
//     var tl2 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl2.to(".banner-items-desc__item-2", { x: 155, duration: 1, opacity: 1 });
//     tl2.to(".banner-items-desc__item-2", { x: 312, duration: 1, delay: interval });
//     tl2.to(".banner-items-desc__item-2", { x: 312, duration: 1, delay: interval, opacity: 0 });
//     tl2.to(".banner-items-desc__item-2", { x: 0, duration: 3, opacity: 0 });
//     var tl3 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl3.to(".banner-items-desc__item-3", { x: 316, duration: 1, opacity: 1 });
//     tl3.to(".banner-items-desc__item-3", { x: 472, duration: 1, delay: interval });
//     tl3.to(".banner-items-desc__item-3", { x: 472, duration: 1, delay: interval, opacity: 0 });
//     tl3.to(".banner-items-desc__item-3", { x: 0, duration: 3, opacity: 0 });
//     var tl4 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl4.to(".banner-items-desc__item-4", { x: 234, duration: 1, opacity: 1 });
//     tl4.to(".banner-items-desc__item-4", { x: 390, duration: 1, delay: interval });
//     tl4.to(".banner-items-desc__item-4", { x: 390, duration: 1, delay: interval, opacity: 0 });
//     tl4.to(".banner-items-desc__item-4", { x: 0, duration: 3, opacity: 0 });
//     var tl5 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl5.to(".banner-items-desc__item-5", { x: 4, duration: 1, opacity: 1 });
//     tl5.to(".banner-items-desc__item-5", { x: 160, duration: 1, delay: interval });
//     tl5.to(".banner-items-desc__item-5", { x: 160, duration: 1, delay: interval, opacity: 0 });
//     tl5.to(".banner-items-desc__item-5", { x: 0, duration: 3, opacity: 0 });
//   }
// };
// var tableListener = function (e) {
//   if (e.matches) {
//     let tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl.to(".mob-icons__item--1", { x: -102, duration: 1, opacity: 1 });
//     tl.to(".mob-icons__item--1", { x: 6, duration: 1, delay: 1 });
//     tl.to(".mob-icons__item--1", { x: 6, duration: 1, delay: interval, opacity: 0 });
//     tl.to(".mob-icons__item--1", { x: -102, duration: 3, opacity: 0 });
//     let tl2 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl2.to(".mob-icons__item--2", { x: 0, duration: 1, opacity: 1 });
//     tl2.to(".mob-icons__item--2", { x: 217, duration: 1, delay: 1 });
//     tl2.to(".mob-icons__item--2", { x: 217, duration: 1, delay: interval, opacity: 0 });
//     tl2.to(".mob-icons__item--2", { x: 0, duration: 3, opacity: 0 });
//     let tl3 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl3.to(".mob-icons-b__item--3", { x: -232, duration: 1, opacity: 1 });
//     tl3.to(".mob-icons-b__item--3", { x: 220, duration: 1, delay: 1 });
//     tl3.to(".mob-icons-b__item--3", { x: 220, duration: 1, delay: interval, opacity: 0 });
//     tl3.to(".mob-icons-b__item--3", { x: -232, duration: 3, opacity: 0 });
//     let tlt = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tlt.to(".mob-icons-b__item--4", { x: 108, duration: 1, opacity: 1 });
//     tlt.to(".mob-icons-b__item--4", { x: 327, duration: 1, delay: 1 });
//     tlt.to(".mob-icons-b__item--4", { x: 327, duration: 1, delay: interval, opacity: 0 });
//     tlt.to(".mob-icons-b__item--4", { x: 108, duration: 3, opacity: 0 });
//     let tl5 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl5.to(".mob-icons-b__item--5", { x: 6, duration: 1, opacity: 1 });
//     tl5.to(".mob-icons-b__item--5", { x: 222, duration: 1, delay: 1 });
//     tl5.to(".mob-icons-b__item--5", { x: 222, duration: 1, delay: interval, opacity: 0 });
//     tl5.to(".mob-icons-b__item--5", { x: 6, duration: 3, opacity: 0 });
//     let tl6 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl6.to(".mob-icons-b__item--6", { x: 0, duration: 1, opacity: 1 });
//     tl6.to(".mob-icons-b__item--6", { x: 326, duration: 1, delay: 1 });
//     tl6.to(".mob-icons-b__item--6", { x: 326, duration: 1, delay: interval, opacity: 0 });
//     tl6.to(".mob-icons-b__item--6", { x: 0, duration: 3, opacity: 0 });
//   }
// };
// var mobListener = function (e) {
//   if (e.matches) {
//     let tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl.to(".mob-icons__item--1", { x: -152, duration: 1, opacity: 0 });
//     tl.to(".mob-icons__item--1", { x: 4, duration: 1, delay: 1, opacity: 1 });
//     tl.to(".mob-icons__item--1", { x: 4, duration: 1, delay: interval, opacity: 0 });
//     tl.to(".mob-icons__item--1", { x: -152, duration: 3, opacity: 0 });
//     let tl2 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl2.to(".mob-icons__item--2", { x: 0, duration: 1, opacity: 1 });
//     tl2.to(".mob-icons__item--2", { x: 117, duration: 1, delay: 1 });
//     tl2.to(".mob-icons__item--2", { x: 117, duration: 1, delay: interval, opacity: 0 });
//     tl2.to(".mob-icons__item--2", { x: 0, duration: 3, opacity: 0 });
//     let tl3 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl3.to(".mob-icons-b__item--3", { x: -232, duration: 1, opacity: 1 });
//     tl3.to(".mob-icons-b__item--3", { x: 372, duration: 1, delay: 1 });
//     tl3.to(".mob-icons-b__item--3", { x: 372, duration: 1, delay: interval, opacity: 0 });
//     tl3.to(".mob-icons-b__item--3", { x: -232, duration: 3, opacity: 0 });
//     let tlt = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tlt.to(".mob-icons-b__item--4", { x: 0, duration: 1, opacity: 1 });
//     tlt.to(".mob-icons-b__item--4", { x: 170, duration: 1, delay: 1 });
//     tlt.to(".mob-icons-b__item--4", { x: 170, duration: 1, delay: interval, opacity: 0 });
//     tlt.to(".mob-icons-b__item--4", { x: 0, duration: 3, opacity: 0 });
//     let tl5 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl5.to(".mob-icons-b__item--5", { x: 6, duration: 1, opacity: 1 });
//     tl5.to(".mob-icons-b__item--5", { x: 118, duration: 1, delay: 1 });
//     tl5.to(".mob-icons-b__item--5", { x: 118, duration: 1, delay: interval, opacity: 0 });
//     tl5.to(".mob-icons-b__item--5", { x: 6, duration: 3, opacity: 0 });
//     let tl6 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl6.to(".mob-icons-b__item--6", { x: 0, duration: 1, opacity: 1 });
//     tl6.to(".mob-icons-b__item--6", { x: 172, duration: 1, delay: 1 });
//     tl6.to(".mob-icons-b__item--6", { x: 172, duration: 1, delay: interval, opacity: 0 });
//     tl6.to(".mob-icons-b__item--6", { x: 0, duration: 3, opacity: 0 });
//   }
// };
// var largeListener = function(e){
//   if(e.matches){
//     var tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl.to(".banner-items-desc__item-1", { x: 79, duration: 1, opacity: 1 });
//     tl.to(".banner-items-desc__item-1", { x: 235, duration: 1, delay: interval });
//     tl.to(".banner-items-desc__item-1", { x: 235, duration: 1, delay: interval, opacity: 0  });
//     tl.to(".banner-items-desc__item-1", { x: 0, duration: 3, opacity: 0  });
//     var tl2 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl2.to(".banner-items-desc__item-2", { x: 155, duration: 1, opacity: 1 });
//     tl2.to(".banner-items-desc__item-2", { x: 312, duration: 1, delay: interval });
//     tl2.to(".banner-items-desc__item-2", { x: 312, duration: 1, delay: interval, opacity: 0  });
//     tl2.to(".banner-items-desc__item-2", { x: 0, duration: 3, opacity: 0  });
//     var tl3 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl3.to(".banner-items-desc__item-3", { x: 316, duration: 1, opacity: 1 });
//     tl3.to(".banner-items-desc__item-3", { x: 472, duration: 1, delay: interval });
//     tl3.to(".banner-items-desc__item-3", { x: 472, duration: 1, delay: interval, opacity: 0  });
//     tl3.to(".banner-items-desc__item-3", { x: 0, duration: 3, opacity: 0  });
//     var tl4 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl4.to(".banner-items-desc__item-4", { x: 234, duration: 1, opacity: 1 });
//     tl4.to(".banner-items-desc__item-4", { x: 390, duration: 1, delay: interval });
//     tl4.to(".banner-items-desc__item-4", { x: 390, duration: 1, delay: interval, opacity: 0  });
//     tl4.to(".banner-items-desc__item-4", { x: 0, duration: 3,  opacity: 0  });
//     var tl5 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl5.to(".banner-items-desc__item-5", { x: 4, duration: 1, opacity: 1 });
//     tl5.to(".banner-items-desc__item-5", { x: 160, duration: 1, delay: interval });
//     tl5.to(".banner-items-desc__item-5", { x: 160, duration: 1, delay: interval, opacity: 0  });
//     tl5.to(".banner-items-desc__item-5", { x: 0, duration: 3,  opacity: 0  });
//   }
// };
//Add the listener to MediaQueryList
// smallMediaQuery.addListener(smallListener);
// mediumMediaQuery.addListener(mediumListener);
// tableMediaQuery.addListener(tableListener);
// mobMediaQuery.addListener(mobListener);
// // largeMediaQuery.addListener(largeListener);
// // Initialise onload
// smallListener(smallMediaQuery);
// mediumListener(mediumMediaQuery);
// tableListener(tableMediaQuery);
// mobListener(mobMediaQuery);
// largeListener(largeMediaQuery);
//copy text


function copyData(containerid) {
  var range = document.createRange();
  range.selectNode(containerid); //changed here

  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}

function copyDataTwo(containeridTwo) {
  var range = document.createRange();
  range.selectNode(containeridTwo); //changed here

  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}

var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    console.log("1");
    $(".menu__btn").addClass('_active');
  } else {
    console.log("2");
    $(".menu__btn").removeClass('_active');
  }

  prevScrollpos = currentScrollPos; //fix bug ???????????????? ???????????? ???? ???????????? ???????? ?????????? ?? ?????????????????? ????????????????

  var tooltipOne = document.querySelector('.address__popup.address__popup--one-copy');
  var tooltipTow = document.querySelector('.address__popup.address__popup--tow-copy');

  if (tooltipOne && tooltipOne.classList.contains('active')) {
    $(".address__popup.address__popup--one-copy").removeClass('active');
  }

  if (tooltipTow && tooltipTow.classList.contains('active')) {
    $(".address__popup.address__popup--tow-copy").removeClass('active');
  }
};

var popupOpen = document.querySelectorAll(".popupOpen");
var popupClosed = document.querySelectorAll(".popup__btn");
var windowpopup = document.querySelector(".popup");
popupOpen.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    $("html,body").css("overflow-y", "hidden");
    hideWindiwsMenu();
    windowpopup.style.display = "flex";
  });
});
popupClosed.forEach(function (item) {
  item.addEventListener("click", function () {
    windowpopup.style.display = "none";
    $("html,body").css("overflow-y", "visible");
  });
});

window.onresize = function (event) {
  hideWindiwsMenu();
  allLazyLoadFunctions();

  if ($('body').width() > 930) {
    if ($(roadmapLazyLoad).attr("loaded") && !$(roadmapLazyLoad).attr("renderedDesktop")) {
      $(roadmapLazyLoad).html("<div class=\"roadmap__right-svg\">\n    ".concat($('body').width() > 930 ? "<svg width=\"631\" height=\"1242\" viewBox=\"0 0 631 1242\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g opacity=\"0.15\" filter=\"url(#filter0_f_274:664)\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n          d=\"M580.998 301.971C676.319 292.733 759.511 349.72 829.33 415.062C893.462 475.083 939.681 551.252 941.132 639.015C942.669 732.002 910.386 825.639 837.068 883.115C762.136 941.857 661.756 954.145 569.577 930.292C477.699 906.517 404.314 843.315 359.88 759.635C310.888 667.371 276.619 558.34 322.093 464.219C368.654 367.849 474.316 312.309 580.998 301.971Z\"\n          fill=\"url(#paint0_linear_274:664)\" />\n      </g>\n      <defs>\n        <filter id=\"filter0_f_274:664\" x=\"0.789062\" y=\"0.983398\" width=\"1240.4\" height=\"1240.77\"\n          filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n          <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n          <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\" />\n          <feGaussianBlur stdDeviation=\"150\" result=\"effect1_foregroundBlur_274:664\" />\n        </filter>\n        <linearGradient id=\"paint0_linear_274:664\" x1=\"930.021\" y1=\"562.081\" x2=\"384.763\" y2=\"425.132\"\n          gradientUnits=\"userSpaceOnUse\">\n          <stop stop-color=\"#6FDCFF\" />\n          <stop offset=\"1\" stop-color=\"#FF248D\" />\n        </linearGradient>\n      </defs>\n    </svg>" : '', "\n  </div>\n  <div class=\"roadmap__container\">\n    <div class=\"roadmap__title\">Roadmap</div>\n    ").concat($('body').width() > 930 ? "<div class=\"roadmap__lines\">\n      <div class=\"roadmap__line\">\n        <svg class=\"roadmap__line-oct\" width=\"287\" height=\"94\" viewBox=\"0 0 287 94\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M1 93V55C1 49.4772 5.47715 45 11 45H276.5C282.023 45 286.5 40.5228 286.5 35V0.5\"\n            stroke=\"url(#paint110_linear)\" stroke-linecap=\"round\" />\n          <defs>\n            <linearGradient id=\"paint110_linear\" x1=\"-298\" y1=\"51.7501\" x2=\"313.5\" y2=\"51.7501\"\n              gradientUnits=\"userSpaceOnUse\">\n              <stop stop-color=\"#FF248D\" stop-opacity=\"0\" />\n              <stop offset=\"0.115785\" stop-color=\"#FF248D\" stop-opacity=\"0.9\" />\n              <stop offset=\"1\" stop-color=\"#6FDCFF\" />\n            </linearGradient>\n          </defs>\n        </svg>\n        <svg class=\"roadmap__line-oct active\" width=\"290\" height=\"97\" viewBox=\"0 0 290 97\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M2 95V57C2 51.4772 6.47715 47 12 47H277.5C283.023 47 287.5 42.5228 287.5 37V2.5\"\n            stroke=\"url(#painto0_linear)\" stroke-width=\"4\" stroke-linecap=\"round\" />\n          <defs>\n            <linearGradient id=\"painto0_linear\" x1=\"287.5\" y1=\"53.8048\" x2=\"-11.6715\" y2=\"53.8047\"\n              gradientUnits=\"userSpaceOnUse\">\n              <stop stop-color=\"#FCB5EF\" />\n              <stop offset=\"1\" stop-color=\"#F7DE52\" />\n            </linearGradient>\n          </defs>\n        </svg>\n      </div>\n      <div class=\"roadmap__line \">\n        <svg class=\"roadmap__line-nov\" width=\"2\" height=\"93\" viewBox=\"0 0 2 93\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M1 92V0.5\" stroke=\"url(#paint120_linear)\" stroke-linecap=\"round\" />\n          <defs>\n            <linearGradient id=\"paint120_linear\" x1=\"1\" y1=\"92\" x2=\"1\" y2=\"0.999986\" gradientUnits=\"userSpaceOnUse\">\n              <stop stop-color=\"#FF248D\" />\n              <stop offset=\"1\" stop-color=\"#6FDCFF\" />\n            </linearGradient>\n          </defs>\n        </svg>\n        <svg class=\"roadmap__line-nov\" width=\"4\" height=\"96\" viewBox=\"0 0 4 96\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M2 94V2.5\" stroke=\"url(#paintn0_linear)\" stroke-width=\"4\" stroke-linecap=\"round\" />\n          <defs>\n            <linearGradient id=\"paintn0_linear\" x1=\"3\" y1=\"53.2502\" x2=\"1.95211\" y2=\"53.2502\"\n              gradientUnits=\"userSpaceOnUse\">\n              <stop stop-color=\"#FCB5EF\" />\n              <stop offset=\"1\" stop-color=\"#F7DE52\" />\n            </linearGradient>\n          </defs>\n        </svg>\n      </div>\n      <div class=\"roadmap__line\">\n        <svg class=\"roadmap__line-ter\" width=\"287\" height=\"94\" viewBox=\"0 0 287 94\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M286 93V55C286 49.4772 281.523 45 276 45H10.5C4.97715 45 0.5 40.5228 0.5 35V0.5\" stroke=\"white\"\n            stroke-linecap=\"round\" />\n          <path d=\"M286 93V55C286 49.4772 281.523 45 276 45H10.5C4.97715 45 0.5 40.5228 0.5 35V0.5\"\n            stroke=\"url(#paint130_linear)\" stroke-linecap=\"round\" />\n          <defs>\n            <linearGradient id=\"paint130_linear\" x1=\"375.5\" y1=\"51.7502\" x2=\"-85\" y2=\"51.7502\"\n              gradientUnits=\"userSpaceOnUse\">\n              <stop stop-color=\"#FF248D\" stop-opacity=\"0\" />\n              <stop offset=\"0.115785\" stop-color=\"#FF248D\" stop-opacity=\"0.9\" />\n              <stop offset=\"1\" stop-color=\"#6FDCFF\" />\n            </linearGradient>\n          </defs>\n        </svg>\n        <svg class=\"roadmap__line-ter\" width=\"290\" height=\"97\" viewBox=\"0 0 290 97\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M287.5 94.5V56.5C287.5 50.9772 283.023 46.5 277.5 46.5H12C6.47715 46.5 2 42.0228 2 36.5V2\"\n            stroke=\"url(#painttt0_linear)\" stroke-width=\"4\" stroke-linecap=\"round\" />\n          <defs>\n            <linearGradient id=\"painttt0_linear\" x1=\"287.5\" y1=\"53.3048\" x2=\"-11.6715\" y2=\"53.3047\"\n              gradientUnits=\"userSpaceOnUse\">\n              <stop stop-color=\"#FCB5EF\" />\n              <stop offset=\"1\" stop-color=\"#F7DE52\" />\n            </linearGradient>\n          </defs>\n        </svg>\n      </div>\n    </div>" : '', "\n    <div class=\"roadmap__wrapper\">\n      <div class=\"roadmap__item\">\n      ").concat($('body').width() > 930 ? "<picture>\n          <!-- <source\n          srcset=\"./img/Group_tablet.png\" media=\"(max-width: 1024px)\"> -->\n          <img src=\"./img/Group-1.png\" alt=\"\">\n        </picture>" : '', "\n\n      </div>\n      <div class=\"roadmap__item\">\n        <div class=\"roadmap__block\">\n          <div class=\"roadmap__header roadmap__header--oct active\">\n            <div class=\"roadmap__header-svg-o\">\n              ").concat($('body').width() > 930 && !isSafari ? "<svg style=\"visibility: hidden; position: absolute;\" width=\"0\" height=\"0\"\n                xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n                <defs>\n                  <filter id=\"roadmap__header--oct\">\n                    <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"3\" result=\"blur\" />\n                    <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\"\n                      result=\"roadmap__header--oct\" />\n                    <feComposite in=\"SourceGraphic\" in2=\"roadmap__header--oct\" operator=\"atop\" />\n                  </filter>\n                </defs>\n              </svg>" : '', "\n              <div class=\"roadmap__inside\">\n                <div class=\"roadmap__inside-svg-o\">\n                  <span>October</span>\n                  ").concat($('body').width() > 930 && !isSafari ? "<svg style=\"visibility: hidden; position: absolute;\" width=\"0\" height=\"0\"\n                    xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n                    <defs>\n                      <filter id=\"roadmap__inside--oct\">\n                        <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"3\" result=\"blur\" />\n                        <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\"\n                          result=\"roadmap__inside--oct\" />\n                        <feComposite in=\"SourceGraphic\" in2=\"roadmap__inside--oct\" operator=\"atop\" />\n                      </filter>\n                    </defs>\n                  </svg>" : '', "\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"roadmap__header roadmap__header--nov\">\n            <div class=\"roadmap__header-svg-n\">\n              ").concat($('body').width() > 930 && !isSafari ? "<svg style=\"visibility: hidden; position: absolute;\" width=\"0\" height=\"0\"\n                xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n                <defs>\n                  <filter id=\"roadmap__header--nov\">\n                    <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"3\" result=\"blur\" />\n                    <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\"\n                      result=\"roadmap__header--nov\" />\n                    <feComposite in=\"SourceGraphic\" in2=\"roadmap__header--nov\" operator=\"atop\" />\n                  </filter>\n                </defs>\n              </svg>" : '', "\n              <div class=\"roadmap__inside\">\n                <div class=\"roadmap__inside-svg-n\">\n                  <span>November</span>\n                  ").concat($('body').width() > 930 && !isSafari ? "<svg style=\"visibility: hidden; position: absolute;\" width=\"0\" height=\"0\"\n                    xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n                    <defs>\n                      <filter id=\"roadmap__inside--nov\">\n                        <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"3\" result=\"blur\" />\n                        <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\"\n                          result=\"roadmap__inside--nov\" />\n                        <feComposite in=\"SourceGraphic\" in2=\"roadmap__inside--nov\" operator=\"atop\" />\n                      </filter>\n                    </defs>\n                  </svg>" : '', "\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"roadmap__header roadmap__header--ter\">\n            <div class=\"roadmap__header-svg-t\">\n              ").concat($('body').width() > 930 && !isSafari ? "<svg style=\"visibility: hidden; position: absolute;\" width=\"0\" height=\"0\"\n                xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n                <defs>\n                  <filter id=\"roadmap__header--ter\">\n                    <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"3\" result=\"blur\" />\n                    <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\"\n                      result=\"roadmap__header--ter\" />\n                    <feComposite in=\"SourceGraphic\" in2=\"roadmap__header--ter\" operator=\"atop\" />\n                  </filter>\n                </defs>\n              </svg>" : '', "\n              <div class=\"roadmap__inside\">\n                <div class=\"roadmap__inside-svg-t\">\n                  <span>Long Term</span>\n                  ").concat($('body').width() > 930 && !isSafari ? "<svg style=\"visibility: hidden; position: absolute;\" width=\"0\" height=\"0\"\n                    xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n                    <defs>\n                      <filter id=\"roadmap__inside--ter\">\n                        <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"3\" result=\"blur\" />\n                        <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\"\n                          result=\"roadmap__inside--ter\" />\n                        <feComposite in=\"SourceGraphic\" in2=\"roadmap__inside--ter\" operator=\"atop\" />\n                      </filter>\n                    </defs>\n                  </svg>" : '', "\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- roadmap__inner--active -->\n        <div class=\"roadmap__inner roadmap__inner--active\">\n          <div class=\"roadmap__content roadmap__content--oct active\">\n            <ul class=\"active\">\n              <li class=\"active\">Website Launch</li>\n              <li class=\"active\">Private Presale</li>\n              <li class=\"active\">Marketing Campaign</li>\n              <li class=\"active\">Techrate Audit</li>\n              <li>Launch on PCS</li>\n              <li>Paid Dextools Trending</li>\n              <li>Poocoin Ads</li>\n              <li>Certik Audit</li>\n              <li>List on CMC</li>\n              <li>List on CG</li>\n              <li>List on Whitebit</li>\n              <li>AMA with Devs</li>\n              <li>Trend on Twitter</li>\n            </ul>\n          </div>\n          <div class=\"roadmap__content roadmap__content--nov\">\n            <ul class=\"roadmap__fix\">\n              <li class=\"active\">NFTNDR Release on Google Play Store and App Store</li>\n              <li>NFTNDR NFT Collection Release for Holders</li>\n              <li>Celebrities Ambassadors</li>\n              <li>High Profile Artists from Opensea and Solanart</li>\n              <li>Taxi Ads in NYC, Plane Ads in LA and Miami</li>\n              <li>OpenSea and Rarible Partnership</li>\n            </ul>\n          </div>\n          <div class=\"roadmap__content roadmap__content--ter\">\n            <ul class=\"roadmap__trem\">\n              <li class=\"active\">Asian marketing campaign</li>\n              <li class=\"active\">Binance Listing</li>\n              <li>Coinbase Listing</li>\n              <li>Real Life NFT Auction House</li>\n              <li>NFT Based Social Media</li>\n              <li>Multi Layer NFT Generator</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"roadmap__item\">\n       ").concat($('body').width() > 930 ? "<picture>\n          <source srcset=\"./img/Group-tablet-botton.png\" media=\"(max-width: 1020px)\">\n          <img src=\"./img/Group-2.png\" alt=\"\">\n        </picture>" : '', "\n      </div>\n    </div>\n  </div>"));
      $(roadmapLazyLoad).attr("renderedDesktop", true);
      setRoadmapEvents();
    }
  }

  if ($(roadmapLazyLoad).attr("loaded") && $('body').width() < 930) {
    setRoadmapEvents();
  }
};

$('a.anchor').on('click', function (event) {
  var target = $($(this).attr('href'));

  if (target.length) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 3500);
  }
});
"use strict";

var aboutLazyLoad = '.aboutLazyLoad';
var connectNftLazyLoad = '.connectNftLazyLoad';
var appLazyLoad = '.appLazyLoad';
var appMobLazyLoad = '.appMobLazyLoad';
var roadmapLazyLoad = '.roadmapLazyLoad';
var infoLazyLoad = '.infoLazyLoad';
var addressLazyLoad = '.addressLazyLoad';
var contactUsLazyLoad = '.contactUsLazyLoad';

var isSafari = /constructor/i.test(window.HTMLElement) || function (p) {
  return p.toString() === "[object SafariRemoteNotification]";
}(!window['safari'] || typeof safari !== 'undefined' && window['safari'].pushNotification);
"use strict";

var aboutLazyLoadHTML = "<div class=\"about__desc _anim-items\">\n    <b>User experience is key</b>\n    <h3>What is NFTNDR</h3>\n    <p>NFTinder is an idea inspired by a new\n      exploding crypto industry of <span>non-fungible tokens</span>.\n      So many ordinary investors are trying to get into NFTs,\n      but right now it can be extremely overwhelming \u2014\n      all the different platforms, thousands of different NFT Collections.\n      It's hard to understand where to start\u2026 NFTNDR is an application\n      which is dedicated to ease the entry level for\n      new investors and thus immensely expand the market capitalization.\n    </p>\n\n    <div class=\"about__contactUs\">\n      <p>Connect with our community on <span>Telegram</span></p>\n      <a href=\"#\" target=\"_blank\">Join</a>\n    </div>\n  </div>\n  <div class=\"about__connecting  \">\n    <div class=\"about-animate _anim-items\">\n      <div class=\"about-animate__item\">\n        <img src=\"./img/NFTinder Landing page flow/NFT_10.png\"\n          srcset=\"./img/NFTinder Landing page flow/NFT_10.png 1x, ./img/about/NFT_10.png 2x\" alt=\"icon\">\n      </div>\n      <div class=\"about-animate__item\">\n        <img src=\"./img/NFTinder Landing page flow/NFT_9.png\"\n          srcset=\"./img/NFTinder Landing page flow/NFT_9.png 1x, ./img/about/NFT_9.png 2x\" alt=\"icon\">\n      </div>\n      <div class=\"about-animate__item\">\n        <img src=\"./img/NFTinder Landing page flow/NFT_8.png\"\n          srcset=\"./img/NFTinder Landing page flow/NFT_8.png 1x, ./img/about/NFT_8.png 2x\" alt=\"icon\">\n      </div>\n      <div class=\"about-animate__item\">\n        <img src=\"./img/NFTinder Landing page flow/NFT_7.png\"\n          srcset=\"./img/NFTinder Landing page flow/NFT_7.png 1x, ./img/about/NFT_7.png 2x\" alt=\"icon\">\n      </div>\n      <div class=\"about-animate__item\">\n        <img src=\"./img/NFTinder Landing page flow/NFT_6.png\"\n          srcset=\"./img/NFTinder Landing page flow/NFT_6.png 1x, ./img/about/NFT_6.png 2x\" alt=\"icon\">\n      </div>\n    </div>\n    <div class=\"about__text\">\n      <h3>connecting sellers and buyers</h3>\n      <p>Finding new NFTs and collections is often\n        overwhelming with thousands being minted every single day.\n        With the help of NFTNDR you can start browsing NFTs wherever\n        you are \u2014 during the <span>bus or subway ride</span>, <span>shopping with your\n          girlfriend</span>, just open up your smartphone and start <span>swiping</span>.\n      </p>\n    </div>\n  </div>";
var connectNftLazyLoadHTML = "\n<div class=\"connect-nft__left-svg\">\n    <svg width=\"422\" height=\"791\" viewBox=\"0 0 422 791\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g opacity=\"0.65\" filter=\"url(#filter0_f_274:3401)\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n          d=\"M24.1476 267.767C-13.5168 271.569 -41.3511 300.111 -63.3545 330.858C-83.5657 359.1 -95.583 392.216 -89.349 426.361C-82.7441 462.537 -62.979 496.346 -30.1082 512.953C3.48627 529.927 43.3477 526.915 77.2316 510.525C111.004 494.188 134.556 463.996 145.3 428.105C157.145 388.532 161.986 343.599 137.07 310.624C111.559 276.862 66.3007 263.511 24.1476 267.767Z\"\n          fill=\"url(#paint0_radial_274:3401)\" />\n      </g>\n      <defs>\n        <filter id=\"filter0_f_274:3401\" x=\"-357.667\" y=\"0.333313\" width=\"779.333\" height=\"790.666\"\n          filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n          <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n          <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\" />\n          <feGaussianBlur stdDeviation=\"133.333\" result=\"effect1_foregroundBlur_274:3401\" />\n        </filter>\n        <radialGradient id=\"paint0_radial_274:3401\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\"\n          gradientTransform=\"translate(78.8288 338.67) rotate(145.613) scale(198.063 177.681)\">\n          <stop stop-color=\"#D1F4FF\" />\n          <stop offset=\"0.306681\" stop-color=\"#6FDCFF\" />\n          <stop offset=\"1\" stop-color=\"#24FF3A\" />\n        </radialGradient>\n      </defs>\n    </svg>\n    <svg width=\"376\" height=\"790\" viewBox=\"0 0 376 790\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g opacity=\"0.15\" filter=\"url(#filter0_f_376:4100)\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n          d=\"M6.93875 151.46C78.5928 158.7 131.546 213.049 173.406 271.594C211.857 325.371 234.719 388.43 222.859 453.446C210.294 522.331 172.692 586.707 110.157 618.331C46.2456 650.651 -29.5883 644.916 -94.0503 613.707C-158.301 582.599 -203.107 525.108 -223.546 456.767C-246.081 381.415 -255.29 295.855 -207.889 233.067C-159.356 168.779 -73.255 143.357 6.93875 151.46Z\"\n          fill=\"url(#paint0_linear_376:4100)\" />\n      </g>\n      <defs>\n        <filter id=\"filter0_f_376:4100\" x=\"-392\" y=\"0\" width=\"768\" height=\"790\" filterUnits=\"userSpaceOnUse\"\n          color-interpolation-filters=\"sRGB\">\n          <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n          <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\" />\n          <feGaussianBlur stdDeviation=\"75\" result=\"effect1_foregroundBlur_376:4100\" />\n        </filter>\n        <linearGradient id=\"paint0_linear_376:4100\" x1=\"226\" y1=\"395.001\" x2=\"-156.094\" y2=\"213.826\"\n          gradientUnits=\"userSpaceOnUse\">\n          <stop stop-color=\"#6FDCFF\" />\n          <stop offset=\"1\" stop-color=\"#FF248D\" />\n        </linearGradient>\n      </defs>\n    </svg>\n  </div>\n  <div class=\"connect-nft__header\">\n    <h3 class=\"connect-nft__title\">CONNECT EXISTING NFTs OR MINT YOUR OWN THROUGH NFTNDR</h3>\n    <p class=\"connect-nft__desc\">\n      NFTNDR is a multi-chain platform \u2014 you can start selling your\n      NFTs from any of the supported blockchains:\n      Solana, Ethereum, BSC, Polygon and many more coming.\n    </p>\n  </div>\n  <div class=\"connect-nft__wrapper\">\n    <div class=\"connect-nft__left _anim-items\">\n      <img src=\"./img/NFT_raw_left.png\" srcset=\"./img/NFT_raw_left.png 1x, ./img/conect/NFT_raw_left.png 2x\" alt=\"img\">\n    </div>\n    <div class=\"connect-nft__right _anim-items\">\n      <img src=\"./img/NFT_Raw_right.png\" srcset=\"./img/NFT_Raw_right.png 1x, ./img/conect/NFT_Raw_right.png 2x\"\n        alt=\"img\">\n    </div>\n  </div>\n  <div class=\"connect-nft__right-svg\">\n    <svg width=\"482\" height=\"880\" viewBox=\"0 0 482 880\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g opacity=\"0.65\" filter=\"url(#filter0_f_274:3402)\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n          d=\"M424.977 297.852C383.117 302.078 352.182 333.8 327.727 367.971C305.265 399.36 291.909 436.165 298.837 474.113C306.178 514.32 328.145 551.894 364.677 570.352C402.014 589.217 446.316 585.87 483.974 567.653C521.51 549.497 547.685 515.941 559.625 476.051C572.791 432.071 578.17 382.132 550.479 345.484C522.126 307.961 471.826 293.122 424.977 297.852Z\"\n          fill=\"url(#paint0_linear_274:3402)\" />\n      </g>\n      <defs>\n        <filter id=\"filter0_f_274:3402\" x=\"0.628906\" y=\"0.626953\" width=\"866.15\" height=\"878.746\"\n          filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n          <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n          <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\" />\n          <feGaussianBlur stdDeviation=\"148.187\" result=\"effect1_foregroundBlur_274:3402\" />\n        </filter>\n        <linearGradient id=\"paint0_linear_274:3402\" x1=\"394.061\" y1=\"440.001\" x2=\"599.167\" y2=\"342.659\"\n          gradientUnits=\"userSpaceOnUse\">\n          <stop stop-color=\"#94162C\" />\n          <stop offset=\"1\" stop-color=\"#FF4F8E\" />\n        </linearGradient>\n      </defs>\n    </svg>\n  </div>";
var appLazyLoadHTML = "<h3 class=\"app__title\">NFTNDR App</h3>\n  <div class=\"app__wrapper\">\n    <div class=\"app__inner\">\n      <div class=\"app__item app__item--1\">\n        <div class=\"app__icon\">\n          <img src=\"./img/app/Start_conversation_icon.png\"\n            srcset=\"./img/app/Start_conversation_icon.png 1x, ./img/app/x2/Start_conversation_icon.png 2x\" alt=\"icon\">\n        </div>\n        <div class=\"app__desc\">\n          <b>Start conversation</b>\n          <p>You can start a conversation </br> with other users and</br> negotiate offers.</p>\n        </div>\n      </div>\n      <div class=\"app__item app__item--2\">\n        <div>\n          <img src=\"./img/app/Skip_icon.png\" srcset=\"./img/app/Skip_icon.png 1x, ./img/app/x2/Skip_icon.png 2x\"\n            alt=\"icon\">\n        </div>\n        <div class=\"app__desc\">\n          <b>Skip</b>\n          <p>Don't like an</br> NFT? Skip.</p>\n        </div>\n      </div>\n      <div class=\"app__item app__item--3\">\n        <div>\n          <img src=\"./img/app/Add_to_favourites_icon.png\"\n            srcset=\"./img/app/Add_to_favourites_icon.png 1x, ./img/app/x2/Add_to_favourites_icon.png 2x\" alt=\"icon\">\n        </div>\n        <div class=\"app__desc\">\n          <b>Add to Favorites</b>\n          <p>If you liked an NFT but</br> cannot make a choice</br> now, you can save it</br> for later! </p>\n        </div>\n      </div>\n      <div class=\"app__item\">\n        <div class=\"app__desc\">\n          <b>NFTndr app</b>\n          <p>The application is designed to quickly connect\n            <span>buyers</span> and <span>sellers of NFTs</span>, you can browse\n            through NFTs that will be automatically sorted\n            for you through our <span>AI filter</span>, you will be able to\n            quickly swipe through different NFTs and then\n            <span>trade your NFTs </span>/ <span>buy NFT instantly</span> / <span>start a </span>\n            <span>conversation</span> with a seller and negotiate a\n            better offer.</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"app__center\">\n      <picture>\n        <img src=\"./img/app/x2/iPhone_12_Pro_mockup.png\"\n          srcset=\"./img/app/iPhone_12_Pro_mockup.png 1x, ./img/app/x2/iPhone_12_Pro_mockup.png 2x\" alt=\"Logo\">\n      </picture>\n    </div>\n    <div class=\"app__inner\">\n      <div class=\"app__item app__item--4\">\n        <div class=\"app__icon\">\n          <img src=\"./img/app/Trade_offer_icon.png\"\n            srcset=\"./img/app/Trade_offer_icon.png 1x, ./img/app/x2/Trade_offer_icon.png 2x\" alt=\"icon\">\n        </div>\n        <div class=\"app__desc\">\n          <b>Trade offer</b>\n          <p>If you own and NFT and</br> you like someone elses</br> NFT, you can always</br> offer a fair trade.</p>\n        </div>\n      </div>\n      <div class=\"app__item app__item--5\">\n        <div>\n          <img src=\"./img/app/Buy_now_icon.png\" srcset=\"./img/app/Buy_now_icon.png 1x, ./img/app/x2/Buy_now_icon.png 2x\"\n            alt=\"icon\">\n        </div>\n        <div class=\"app__desc\">\n          <b>Buy Now</b>\n          <p>If you fell in love with NFT on</br> first sight and the price is right,</br> you can buy it instantly\n            without</br>\n            unnecessary words.</p>\n        </div>\n      </div>\n      <div class=\"app__item app__item--6\">\n        <div>\n          <img src=\"./img/app/Switch_mode_icon.png\"\n            srcset=\"./img/app/Switch_mode_icon.png 1x, ./img/app/x2/Switch_mode_icon.png 2x\" alt=\"icon\">\n        </div>\n        <div class=\"app__desc\">\n          <b>Switch Mode</b>\n          <p>Browse <span>single</span> NFT's or</br> <span>whole collections</span> that a</br> person is looking to\n            sell.</p>\n        </div>\n      </div>\n      <div class=\"app__item\">\n        <div class=\"app__desc\">\n          <b>Multi-chain</b>\n          <p>One of the major problems that users are facing\n            right now is inability to browse and sell their NFTs\n            on one platform, due to that users are always\n            forced to switch between platforms and keep\n            several tabs opened. Our aim is to remove the\n            limitations between blockchains and make one\n            <span>hub</span> that hosts everyone in one place: Solana,\n            Ethereum, BSC, Polygon and more to come.</p>\n        </div>\n      </div>\n    </div>\n  </div>";
var appMobLazyLoadHTML = " <h3 class=\"app-mob__title\">NFTNDR App</h3>\n  <div class=\"app-mob__desc-top\">\n    <b>NFTNDR App</b>\n    <p>The application is designed to quickly connect\n      <span>buyers</span> and <span>sellers of NFTs</span>, you can browse\n      through NFTs that will be automatically sorted\n      for you through our <span>AI filter</span>, you will be able to\n      quickly swipe through different NFTs and then\n      <span>trade your NFTs </span>/ <span>buy NFT instantly</span> / <span>start a </span>\n      <span>conversation</span> with a seller and negotiate a\n      better offer.</p>\n  </div>\n  <div class=\"app-mob__inner\">\n    <div class=\"app-mob__iphone\">\n      <img src=\"./img/app/iPhone_12_Pro_mockup-tablet.png\"\n        srcset=\"./img/app/iPhone_12_Pro_mockup-tablet.png 1x, ./img/app/iPhone_12_Pro_mockup-tablet_x2.png 2x\"\n        alt=\"img\">\n    </div>\n    <div class=\"app-mob__wrapper\">\n      <div class=\"swiper mySwiper\">\n        <div class=\"swiper-wrapper app-mob__items\">\n          <div class=\"app-mob__item swiper-slide\">\n            <div class=\"app-mob__icon\">\n              <svg width=\"52\" height=\"52\" viewBox=\"0 0 52 52\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n                  d=\"M26 2.99996C13.2975 2.99996 3 13.2974 3 26C3 38.7025 13.2975 49 26 49C38.7026 49 49 38.7025 49 26C49 13.2974 38.7026 2.99996 26 2.99996ZM14.6985 11.4575C17.8184 9.02941 21.7403 7.58324 26 7.58324C36.1713 7.58324 44.4167 15.8287 44.4167 26C44.4167 30.2596 42.9706 34.1816 40.5424 37.3015L14.6985 11.4575ZM11.4576 14.6984C9.02945 17.8184 7.58328 21.7403 7.58328 26C7.58328 36.1712 15.8287 44.4167 26 44.4167C30.2597 44.4167 34.1816 42.9705 37.3015 40.5424L11.4576 14.6984Z\"\n                  fill=\"url(#paint0_radial_274:3578)\" />\n                <defs>\n                  <radialGradient id=\"paint0_radial_274:3578\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\"\n                    gradientTransform=\"translate(6.46758 2.32001) rotate(51.4675) scale(64.6465 71.8757)\">\n                    <stop stop-color=\"#ED4245\" />\n                    <stop offset=\"1\" stop-color=\"#ED428A\" />\n                  </radialGradient>\n                </defs>\n              </svg>\n            </div>\n\n            <div class=\"app__desc\">\n              <b>Skip</b>\n              <p>Don't like an NFT? Skip.</p>\n            </div>\n          </div>\n          <div class=\"app-mob__item swiper-slide\">\n            <div class=\"app-mob__icon\">\n              <svg width=\"52\" height=\"46\" viewBox=\"0 0 52 46\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n                  d=\"M4.11204 5.26969C9.85175 -2.15783 20.9559 -1.53766 26 5.89497C31.0441 -1.53766 42.1482 -2.15783 47.888 5.26969L48.6773 6.29112C53.6818 12.7673 52.9592 22.0026 47.0089 27.6148L29.2183 44.3942C28.9593 44.6388 28.6469 44.9336 28.3469 45.1656C27.9928 45.4395 27.461 45.7854 26.737 45.9281C26.2503 46.024 25.7497 46.024 25.263 45.9281C24.539 45.7854 24.0072 45.4395 23.6531 45.1656C23.3531 44.9336 23.0408 44.6388 22.7817 44.3942L4.99113 27.6148C-0.959222 22.0026 -1.68181 12.7673 3.32272 6.29112L4.11204 5.26969ZM8.14382 8.41034C12.0015 3.41824 19.745 4.25545 22.4556 9.95772C23.8784 12.9507 28.1216 12.9507 29.5444 9.95772C32.255 4.25545 39.9985 3.41824 43.8562 8.41033L44.6455 9.43176C48.0366 13.82 47.5469 20.0778 43.515 23.8806L26 40.4001L8.485 23.8806C4.45307 20.0778 3.96344 13.82 7.3545 9.43176L8.14382 8.41034Z\"\n                  fill=\"url(#paint0_linear_288:400)\" />\n                <defs>\n                  <linearGradient id=\"paint0_linear_288:400\" x1=\"-9.68576e-08\" y1=\"23\" x2=\"53.3109\" y2=\"23\"\n                    gradientUnits=\"userSpaceOnUse\">\n                    <stop stop-color=\"#6FDCFF\" />\n                    <stop offset=\"1\" stop-color=\"#24FF3A\" />\n                  </linearGradient>\n                </defs>\n              </svg>\n            </div>\n            <div class=\"app__desc\">\n              <b>Buy Now</b>\n              <p>If you fell in love with NFT on first sight and the price is right, you can buy it instantly without\n                unnecessary words.</p>\n            </div>\n          </div>\n          <div class=\"app-mob__item swiper-slide\">\n            <div class=\"app-mob__icon\">\n              <svg width=\"52\" height=\"52\" viewBox=\"0 0 52 52\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n                  d=\"M25.7144 3C23.4272 3 22.1362 4.75383 21.3933 6.04912C20.6141 7.40755 19.8348 9.35074 18.9274 11.6134L18.7656 12.0168C18.1995 13.428 17.8411 14.3134 17.5004 14.9616C17.1862 15.5595 16.982 15.7629 16.8246 15.8799C16.6671 15.997 16.4135 16.1339 15.7505 16.2626C15.0317 16.4022 14.0805 16.4904 12.5661 16.626L11.8469 16.6904C9.61301 16.8903 7.66994 17.0642 6.23437 17.403C4.82562 17.7354 2.9132 18.447 2.21929 20.5103C1.52538 22.5735 2.6191 24.2961 3.54065 25.4123C4.47971 26.5497 5.92278 27.8624 7.58184 29.3716L8.91085 30.5807C9.84275 31.4285 10.4254 31.9615 10.8393 32.4092C11.2225 32.8238 11.3385 33.039 11.3971 33.1888C11.4362 33.289 11.4688 33.3916 11.4945 33.4961C11.533 33.6522 11.5622 33.8949 11.488 34.4546C11.4078 35.059 11.2389 35.8303 10.966 37.0603L10.77 37.9435C10.3121 40.0069 9.92509 41.7511 9.77368 43.0927C9.63759 44.2986 9.54762 46.1222 10.7659 47.4786C11.3985 48.1831 12.2208 48.6903 13.1343 48.9396C14.8932 49.4195 16.4825 48.5207 17.499 47.8579C18.63 47.1205 20.0149 45.9919 21.6533 44.6568L21.767 44.5642C22.9426 43.6062 23.6935 42.9976 24.3076 42.587C24.8851 42.2008 25.1575 42.1195 25.326 42.0926C25.5833 42.0516 25.8455 42.0516 26.1028 42.0926C26.2712 42.1195 26.5437 42.2008 27.1212 42.587C27.7353 42.9976 28.4861 43.6062 29.6618 44.5642L29.7753 44.6567C31.4137 45.9919 32.7987 47.1205 33.9297 47.8579C34.9463 48.5207 36.5355 49.4195 38.2944 48.9396C39.2079 48.6903 40.0302 48.1831 40.6629 47.4786C41.8811 46.1222 41.7912 44.2986 41.6551 43.0927C41.5037 41.7511 41.1166 40.007 40.6588 37.9437L40.4628 37.0603C40.1899 35.8303 40.0209 35.059 39.9408 34.4546C39.8665 33.8949 39.8957 33.6522 39.9342 33.4961C39.96 33.3916 39.9925 33.289 40.0317 33.1888C40.0902 33.039 40.2063 32.8238 40.5895 32.4092C41.0033 31.9615 41.586 31.4285 42.5179 30.5807L43.8469 29.3716C45.506 27.8624 46.949 26.5497 47.8881 25.4123C48.8096 24.2961 49.9034 22.5735 49.2095 20.5103C48.5155 18.447 46.6031 17.7354 45.1944 17.403C43.7588 17.0642 41.8157 16.8903 39.5818 16.6904L38.8626 16.626C37.3482 16.4904 36.397 16.4022 35.6783 16.2626C35.0152 16.1339 34.7616 15.997 34.6042 15.8799C34.4467 15.7629 34.2426 15.5595 33.9283 14.9616C33.5876 14.3134 33.2292 13.428 32.6632 12.0168L32.5014 11.6134C31.5939 9.35076 30.8146 7.40756 30.0354 6.04912C29.2925 4.75383 28.0015 3 25.7144 3ZM23.4282 13.626C24.4276 11.1345 25.081 9.52147 25.6668 8.50025C25.6698 8.49494 25.6729 8.48966 25.6759 8.48442C25.689 8.46172 25.7018 8.43971 25.7144 8.41839C25.7298 8.44463 25.7457 8.47191 25.762 8.50025C26.3477 9.52147 27.0012 11.1345 28.0006 13.626L28.133 13.9562C28.6441 15.2306 29.095 16.3547 29.5675 17.2537C30.0794 18.2277 30.7067 19.1212 31.6648 19.8335C32.6228 20.5458 33.6591 20.8891 34.7392 21.0988C35.7362 21.2924 36.9425 21.4004 38.3101 21.5228L38.9526 21.5803C41.432 21.8024 43.0142 21.9503 44.0628 22.1978C44.0693 22.1993 44.0757 22.2009 44.0821 22.2024C44.1012 22.2069 44.1198 22.2114 44.1379 22.2159C44.1223 22.2353 44.106 22.2553 44.0891 22.2757C43.4031 23.1066 42.2319 24.1806 40.3905 25.8558L39.1328 27.0001C38.2914 27.7655 37.5479 28.4419 36.9717 29.0652C36.349 29.7389 35.8046 30.4707 35.4432 31.3952C35.3257 31.6958 35.2281 32.0038 35.1508 32.3171C34.9133 33.281 34.9364 34.1927 35.057 35.1022C35.1686 35.9436 35.3863 36.9249 35.6327 38.0352L35.8174 38.8677C36.3155 41.1125 36.6413 42.5967 36.7596 43.6452C36.7671 43.7117 36.7734 43.7739 36.7787 43.8318C36.7292 43.8011 36.6765 43.7676 36.6204 43.731C35.7365 43.1548 34.5564 42.1975 32.7738 40.745L32.6906 40.6772C31.6223 39.8066 30.6907 39.0474 29.8598 38.4917C28.9707 37.8972 28.0193 37.4097 26.8795 37.2277C26.1076 37.1045 25.3211 37.1045 24.5492 37.2277C23.4094 37.4097 22.458 37.8972 21.569 38.4917C20.738 39.0474 19.8065 39.8066 18.7381 40.6772L18.6549 40.745C16.8724 42.1975 15.6922 43.1548 14.8084 43.731C14.7522 43.7676 14.6995 43.8011 14.6501 43.8318C14.6553 43.7739 14.6616 43.7117 14.6691 43.6452C14.7875 42.5967 15.1132 41.1125 15.6113 38.8677L15.796 38.0352C16.0424 36.9249 16.2602 35.9436 16.3718 35.1022C16.4924 34.1927 16.5155 33.281 16.2779 32.3171C16.2007 32.0038 16.103 31.6958 15.9855 31.3952C15.6241 30.4707 15.0797 29.7389 14.457 29.0652C13.8808 28.4419 13.1373 27.7655 12.296 27.0001L11.0382 25.8558C9.19688 24.1806 8.02567 23.1066 7.33968 22.2757C7.32277 22.2553 7.30649 22.2353 7.29083 22.2159C7.31502 22.21 7.34004 22.2039 7.3659 22.1978C8.41456 21.9503 9.99673 21.8024 12.4761 21.5803L13.1186 21.5228C14.4862 21.4004 15.6925 21.2924 16.6895 21.0988C17.7696 20.8891 18.8059 20.5458 19.764 19.8335C20.722 19.1212 21.3493 18.2277 21.8612 17.2537C22.3338 16.3547 22.7846 15.2307 23.2957 13.9563L23.4282 13.626ZM26.1648 7.79346C26.1648 7.79346 26.1572 7.8018 26.1419 7.81261C26.1571 7.79788 26.1648 7.79346 26.1648 7.79346ZM25.2869 7.81261C25.2716 7.80181 25.2639 7.79346 25.2639 7.79346C25.2639 7.79346 25.2716 7.79789 25.2869 7.81261ZM44.7878 22.4401C44.7878 22.4401 44.7784 22.4357 44.7646 22.4252C44.7817 22.4346 44.7878 22.4401 44.7878 22.4401ZM44.5108 21.6705C44.5154 21.6538 44.5202 21.6446 44.5202 21.6446C44.5202 21.6446 44.5187 21.6527 44.5108 21.6705ZM6.90855 21.6446C6.90855 21.6446 6.91335 21.6538 6.91799 21.6705C6.91003 21.6527 6.90855 21.6446 6.90855 21.6446ZM6.66419 22.4252C6.65039 22.4357 6.64098 22.4401 6.64098 22.4401C6.64098 22.4401 6.64704 22.4346 6.66419 22.4252Z\"\n                  fill=\"url(#paint0_linear_274:3571)\" />\n                <defs>\n                  <linearGradient id=\"paint0_linear_274:3571\" x1=\"49.4287\" y1=\"26.0376\" x2=\"-0.271186\" y2=\"26.0376\"\n                    gradientUnits=\"userSpaceOnUse\">\n                    <stop stop-color=\"#FCB5EF\" />\n                    <stop offset=\"1\" stop-color=\"#F7DE52\" />\n                  </linearGradient>\n                </defs>\n              </svg>\n            </div>\n            <div class=\"app__desc\">\n              <b>Add to Favorites</b>\n              <p>If you liked an NFT but cannot make a choice now, you can save it for later! </p>\n            </div>\n          </div>\n          <div class=\"app-mob__item swiper-slide\">\n            <div class=\"app-mob__icon\">\n              <svg width=\"52\" height=\"52\" viewBox=\"0 0 52 52\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                  d=\"M8.15464 25.0275C8.15464 26.2807 9.15334 27.2967 10.3853 27.2967C11.6173 27.2967 12.616 26.2807 12.616 25.0275V22.7583C12.616 18.9985 15.6121 15.9506 19.308 15.9506H38.46L33.3454 21.1537L36.5 24.3628L47 13.6814L36.5 3L33.3454 6.20915L38.46 11.4122H19.308C13.1482 11.4122 8.15464 16.492 8.15464 22.7583V25.0275Z\"\n                  fill=\"url(#paint0_linear_376:4532)\" />\n                <path\n                  d=\"M43.8454 26.9725C43.8454 25.7193 42.8467 24.7033 41.6147 24.7033C40.3827 24.7033 39.384 25.7193 39.384 26.9725V29.2417C39.384 33.0015 36.3879 36.0494 32.692 36.0494H13.54L18.6546 30.8463L15.5 27.6372L5 38.3186L15.5 49L18.6546 45.7909L13.54 40.5878H32.692C38.8518 40.5878 43.8454 35.508 43.8454 29.2417V26.9725Z\"\n                  fill=\"url(#paint1_linear_376:4532)\" />\n                <defs>\n                  <linearGradient id=\"paint0_linear_376:4532\" x1=\"46.305\" y1=\"48.9997\" x2=\"17.8319\" y2=\"4.53904\"\n                    gradientUnits=\"userSpaceOnUse\">\n                    <stop stop-color=\"#FF248D\" />\n                    <stop offset=\"1\" stop-color=\"#6FDCFF\" />\n                  </linearGradient>\n                  <linearGradient id=\"paint1_linear_376:4532\" x1=\"46.305\" y1=\"48.9997\" x2=\"17.8319\" y2=\"4.53904\"\n                    gradientUnits=\"userSpaceOnUse\">\n                    <stop stop-color=\"#FF248D\" />\n                    <stop offset=\"1\" stop-color=\"#6FDCFF\" />\n                  </linearGradient>\n                </defs>\n              </svg>\n            </div>\n            <div class=\"app__desc\">\n              <b>Trade offer</b>\n              <p>If you own and NFT and you like someone elses NFT, you can always offer a fair trade.</p>\n            </div>\n          </div>\n          <div class=\"app-mob__item swiper-slide\">\n\n            <div class=\"app-mob__icon\">\n              <svg width=\"52\" height=\"52\" viewBox=\"0 0 52 52\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                  d=\"M18.3353 20.7324C16.9239 20.7324 15.7798 21.8766 15.7798 23.288C15.7798 24.6994 16.9239 25.8436 18.3353 25.8436H33.6687C35.0801 25.8436 36.2242 24.6994 36.2242 23.288C36.2242 21.8766 35.0801 20.7324 33.6687 20.7324H18.3353Z\"\n                  fill=\"url(#paint0_linear_376:4511)\" />\n                <path\n                  d=\"M23.4469 33.5134C23.4469 32.102 24.591 30.9578 26.0024 30.9578H33.6691C35.0805 30.9578 36.2246 32.102 36.2246 33.5134C36.2246 34.9248 35.0805 36.0689 33.6691 36.0689H26.0024C24.591 36.0689 23.4469 34.9248 23.4469 33.5134Z\"\n                  fill=\"url(#paint1_linear_376:4511)\" />\n                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n                  d=\"M26 3.00004C13.2975 3.00004 3 13.2975 3 26C3 38.7026 13.2975 49 26 49H39.0842C40.1028 49.0001 40.9817 49.0001 41.7105 48.9548C42.4771 48.9073 43.2456 48.8027 44.0126 48.5167C46.0961 47.7395 47.7395 46.0961 48.5166 44.0126C48.8027 43.2456 48.9072 42.4771 48.9548 41.7105C49 40.9817 49 40.1028 49 39.0843V26C49 13.2975 38.7025 3.00004 26 3.00004ZM8.11111 26C8.11111 16.1203 16.1202 8.11115 26 8.11115C35.8798 8.11115 43.8889 16.1203 43.8889 26V39.0101C43.8889 40.1237 43.8877 40.8425 43.8535 41.3938C43.8205 41.925 43.764 42.1294 43.7278 42.2264C43.4687 42.9209 42.9209 43.4688 42.2264 43.7278C42.1294 43.764 41.925 43.8206 41.3938 43.8536C40.8424 43.8878 40.1236 43.8889 39.0101 43.8889H26C16.1202 43.8889 8.11111 35.8798 8.11111 26Z\"\n                  fill=\"url(#paint2_linear_376:4511)\" />\n                <defs>\n                  <linearGradient id=\"paint0_linear_376:4511\" x1=\"49.043\" y1=\"3.00903\" x2=\"-10.4466\" y2=\"35.127\"\n                    gradientUnits=\"userSpaceOnUse\">\n                    <stop stop-color=\"#6FDCFF\" />\n                    <stop offset=\"1\" stop-color=\"#6F86FF\" />\n                  </linearGradient>\n                  <linearGradient id=\"paint1_linear_376:4511\" x1=\"49.043\" y1=\"3.00903\" x2=\"-10.4466\" y2=\"35.127\"\n                    gradientUnits=\"userSpaceOnUse\">\n                    <stop stop-color=\"#6FDCFF\" />\n                    <stop offset=\"1\" stop-color=\"#6F86FF\" />\n                  </linearGradient>\n                  <linearGradient id=\"paint2_linear_376:4511\" x1=\"49.043\" y1=\"3.00903\" x2=\"-10.4466\" y2=\"35.127\"\n                    gradientUnits=\"userSpaceOnUse\">\n                    <stop stop-color=\"#6FDCFF\" />\n                    <stop offset=\"1\" stop-color=\"#6F86FF\" />\n                  </linearGradient>\n                </defs>\n              </svg>\n            </div>\n            <div class=\"app__desc\">\n              <b>Start conversation</b>\n              <p>You can start a conversation with other users and negotiate offers.</p>\n            </div>\n          </div>\n          <div class=\"app-mob__item swiper-slide\">\n            <div class=\"app-mob__icon\">\n              <svg width=\"66\" height=\"52\" viewBox=\"0 0 66 52\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <g filter=\"url(#filter0_d_274:3550)\">\n                  <path\n                    d=\"M54.6711 13.842C54.4787 12.562 53.3791 11.6152 52.0847 11.6152L38.0376 11.6152C36.4383 11.6152 35.2136 13.0378 35.4512 14.6193L39.3814 40.7731C39.5738 42.0531 40.6734 42.9998 41.9678 42.9998L56.0149 42.9998C57.6142 42.9998 58.839 41.5773 58.6013 39.9958L54.6711 13.842Z\"\n                    fill=\"url(#paint0_linear_274:3550)\" />\n                  <path\n                    d=\"M54.6711 13.842C54.4787 12.562 53.3791 11.6152 52.0847 11.6152L38.0376 11.6152C36.4383 11.6152 35.2136 13.0378 35.4512 14.6193L39.3814 40.7731C39.5738 42.0531 40.6734 42.9998 41.9678 42.9998L56.0149 42.9998C57.6142 42.9998 58.839 41.5773 58.6013 39.9958L54.6711 13.842Z\"\n                    fill=\"url(#paint1_linear_274:3550)\" />\n                </g>\n                <g filter=\"url(#filter1_d_274:3550)\">\n                  <path\n                    d=\"M59.9016 11.2267C59.7092 9.94676 58.6095 9 57.3152 9L43.268 9C41.6688 9 40.444 10.4226 40.6817 12.0041L44.6119 38.1579C44.8042 39.4378 45.9039 40.3846 47.1982 40.3846L61.2454 40.3846C62.8447 40.3846 64.0694 38.962 63.8318 37.3805L59.9016 11.2267Z\"\n                    fill=\"url(#paint2_linear_274:3550)\" />\n                </g>\n                <g filter=\"url(#filter2_d_274:3550)\">\n                  <path\n                    d=\"M22.6711 13.842C22.4787 12.562 21.3791 11.6152 20.0847 11.6152L6.03757 11.6152C4.43832 11.6152 3.21355 13.0378 3.45121 14.6193L7.38143 40.7731C7.57377 42.0531 8.67343 42.9998 9.96778 42.9998L24.0149 42.9998C25.6142 42.9998 26.839 41.5773 26.6013 39.9958L22.6711 13.842Z\"\n                    fill=\"url(#paint3_linear_274:3550)\" />\n                </g>\n                <defs>\n                  <filter id=\"filter0_d_274:3550\" x=\"32.2062\" y=\"9.21423\" width=\"28.011\" height=\"36.1868\"\n                    filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n                    <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n                    <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"\n                      result=\"hardAlpha\" />\n                    <feOffset dx=\"-0.814628\" />\n                    <feGaussianBlur stdDeviation=\"1.2005\" />\n                    <feComposite in2=\"hardAlpha\" operator=\"out\" />\n                    <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0.325 0 0 0 0 0.0326484 0 0 0 0.25 0\" />\n                    <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_274:3550\" />\n                    <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_274:3550\" result=\"shape\" />\n                  </filter>\n                  <filter id=\"filter1_d_274:3550\" x=\"37.4367\" y=\"6.59899\" width=\"28.011\" height=\"36.1868\"\n                    filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n                    <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n                    <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"\n                      result=\"hardAlpha\" />\n                    <feOffset dx=\"-0.814628\" />\n                    <feGaussianBlur stdDeviation=\"1.2005\" />\n                    <feComposite in2=\"hardAlpha\" operator=\"out\" />\n                    <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0.325 0 0 0 0 0.0326484 0 0 0 0.25 0\" />\n                    <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_274:3550\" />\n                    <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_274:3550\" result=\"shape\" />\n                  </filter>\n                  <filter id=\"filter2_d_274:3550\" x=\"0.20624\" y=\"9.21423\" width=\"28.011\" height=\"36.1868\"\n                    filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n                    <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n                    <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"\n                      result=\"hardAlpha\" />\n                    <feOffset dx=\"-0.814628\" />\n                    <feGaussianBlur stdDeviation=\"1.2005\" />\n                    <feComposite in2=\"hardAlpha\" operator=\"out\" />\n                    <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0.325 0 0 0 0 0.0326484 0 0 0 0.25 0\" />\n                    <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_274:3550\" />\n                    <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_274:3550\" result=\"shape\" />\n                  </filter>\n                  <linearGradient id=\"paint0_linear_274:3550\" x1=\"59.0527\" y1=\"27.2967\" x2=\"32.363\" y2=\"27.2967\"\n                    gradientUnits=\"userSpaceOnUse\">\n                    <stop stop-color=\"#6FDCFF\" />\n                    <stop offset=\"1\" stop-color=\"#FF248D\" />\n                  </linearGradient>\n                  <linearGradient id=\"paint1_linear_274:3550\" x1=\"54.6874\" y1=\"27.3075\" x2=\"30.7654\" y2=\"27.3075\"\n                    gradientUnits=\"userSpaceOnUse\">\n                    <stop stop-color=\"#6FDCFF\" />\n                    <stop offset=\"1\" stop-color=\"#24FF3A\" />\n                  </linearGradient>\n                  <linearGradient id=\"paint2_linear_274:3550\" x1=\"64.2832\" y1=\"24.6814\" x2=\"37.5934\" y2=\"24.6814\"\n                    gradientUnits=\"userSpaceOnUse\">\n                    <stop stop-color=\"#6FDCFF\" />\n                    <stop offset=\"1\" stop-color=\"#FF248D\" />\n                  </linearGradient>\n                  <linearGradient id=\"paint3_linear_274:3550\" x1=\"22.6874\" y1=\"27.3075\" x2=\"-1.23458\" y2=\"27.3075\"\n                    gradientUnits=\"userSpaceOnUse\">\n                    <stop stop-color=\"#6FDCFF\" />\n                    <stop offset=\"1\" stop-color=\"#24FF3A\" />\n                  </linearGradient>\n                </defs>\n              </svg>\n            </div>\n            <div class=\"app__desc\">\n              <b>Switch Mode</b>\n              <p>Browse <span>single</span> NFT's or <span>whole collections</span> that a person is looking to sell.\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"nav-swipe\">\n        <svg width=\"18\" height=\"7\" viewBox=\"0 0 18 7\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M17 3.5H1M1 3.5L4 6.5M1 3.5L4 0.5\" stroke=\"url(#paint0_linear_787:2941)\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n          <defs>\n            <linearGradient id=\"paint0_linear_787:2941\" x1=\"0.769559\" y1=\"3.50001\" x2=\"17\" y2=\"3.50001\" gradientUnits=\"userSpaceOnUse\">\n              <stop stop-color=\"#FCB5EF\"/>\n              <stop offset=\"1\" stop-color=\"#F7DE52\"/>\n            </linearGradient>\n          </defs>\n        </svg>\n        <svg width=\"45\" height=\"11\" viewBox=\"0 0 45 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M4.416 10.132C2.752 10.132 1.388 9.752 0.324 8.992L1.188 7.732C2.124 8.356 3.184 8.668 4.368 8.668C5.224 8.668 5.804 8.576 6.108 8.392C6.42 8.2 6.576 7.884 6.576 7.444C6.576 7.052 6.408 6.784 6.072 6.64C5.744 6.488 5.164 6.348 4.332 6.22C3.828 6.148 3.412 6.076 3.084 6.004C2.764 5.924 2.444 5.82 2.124 5.692C1.812 5.564 1.568 5.412 1.392 5.236C1.224 5.06 1.088 4.836 0.984 4.564C0.88 4.284 0.828 3.956 0.828 3.58C0.828 2.636 1.116 1.964 1.692 1.564C2.268 1.164 3.172 0.964 4.404 0.964C5.86 0.964 7.02 1.248 7.884 1.816L6.96 3.172C6.664 2.972 6.28 2.808 5.808 2.68C5.336 2.552 4.864 2.488 4.392 2.488C3.688 2.488 3.2 2.568 2.928 2.728C2.656 2.888 2.52 3.16 2.52 3.544C2.52 3.912 2.684 4.172 3.012 4.324C3.34 4.468 3.924 4.6 4.764 4.72C5.172 4.784 5.504 4.844 5.76 4.9C6.016 4.948 6.292 5.016 6.588 5.104C6.892 5.192 7.132 5.296 7.308 5.416C7.484 5.536 7.652 5.684 7.812 5.86C7.972 6.036 8.088 6.252 8.16 6.508C8.232 6.756 8.268 7.04 8.268 7.36C8.268 8.288 7.968 8.984 7.368 9.448C6.776 9.904 5.792 10.132 4.416 10.132ZM12.088 10.06L9.32803 1.108H11.116L12.94 7.228L14.836 1.108H16.372L18.268 7.228L20.092 1.108H21.772L19.024 10.06H17.512L15.556 3.772L13.6 10.06H12.088ZM23.8241 10V1.108H25.5161V10H23.8241ZM28.2327 10V1.108H32.4087C33.6407 1.108 34.5167 1.352 35.0367 1.84C35.5567 2.328 35.8167 3.052 35.8167 4.012C35.8167 5.004 35.5527 5.772 35.0247 6.316C34.4967 6.852 33.5967 7.12 32.3247 7.12H29.9007V10H28.2327ZM29.9007 5.62H32.3967C32.9967 5.62 33.4327 5.504 33.7047 5.272C33.9767 5.032 34.1127 4.64 34.1127 4.096C34.1127 3.536 33.9767 3.148 33.7047 2.932C33.4407 2.716 32.9967 2.608 32.3727 2.608H29.9007V5.62ZM37.9176 10V1.108H44.3976V2.692H39.6216V4.672H44.2776V6.22H39.6216V8.464H44.4456V10H37.9176Z\" fill=\"url(#paint0_linear_785:1554)\"/>\n          <defs>\n            <linearGradient id=\"paint0_linear_785:1554\" x1=\"46.6625\" y1=\"5.50002\" x2=\"-3.05893e-05\" y2=\"5.50002\" gradientUnits=\"userSpaceOnUse\">\n              <stop stop-color=\"#FCB5EF\"/>\n              <stop offset=\"1\" stop-color=\"#F7DE52\"/>\n            </linearGradient>\n          </defs>\n        </svg>\n        <svg width=\"17\" height=\"7\" viewBox=\"0 0 17 7\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M0.5 3.5H16.5M16.5 3.5L13.5 6.5M16.5 3.5L13.5 0.5\" stroke=\"url(#paint0_linear_787:2940)\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n          <defs>\n            <linearGradient id=\"paint0_linear_787:2940\" x1=\"16.7304\" y1=\"3.50001\" x2=\"0.499989\" y2=\"3.50001\" gradientUnits=\"userSpaceOnUse\">\n              <stop stop-color=\"#FCB5EF\"/>\n              <stop offset=\"1\" stop-color=\"#F7DE52\"/>\n            </linearGradient>\n          </defs>\n        </svg>\n      </div>\n    </div>\n    </div>\n    <div class=\"swiper-pagination\"></div>\n  </div>\n  <div class=\"app-mob__items\">\n  </div>\n  <div class=\"app-mob__desc-bottom\">\n    <b>Multi-chain</b>\n    <p>One of the major problems that users are facing\n      right now is inability to browse and sell their NFTs\n      on one platform, due to that users are always\n      forced to switch between platforms and keep\n      several tabs opened. Our aim is to remove the\n      limitations between blockchains and make one\n      <span>hub</span> that hosts everyone in one place: Solana,\n      Ethereum, BSC, Polygon and more to come.</p>\n  </div>";
var roadmapLazyLoadHTML = "<div class=\"roadmap__right-svg\">\n    ".concat($('body').width() > 930 ? "<svg width=\"631\" height=\"1242\" viewBox=\"0 0 631 1242\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g opacity=\"0.15\" filter=\"url(#filter0_f_274:664)\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n          d=\"M580.998 301.971C676.319 292.733 759.511 349.72 829.33 415.062C893.462 475.083 939.681 551.252 941.132 639.015C942.669 732.002 910.386 825.639 837.068 883.115C762.136 941.857 661.756 954.145 569.577 930.292C477.699 906.517 404.314 843.315 359.88 759.635C310.888 667.371 276.619 558.34 322.093 464.219C368.654 367.849 474.316 312.309 580.998 301.971Z\"\n          fill=\"url(#paint0_linear_274:664)\" />\n      </g>\n      <defs>\n        <filter id=\"filter0_f_274:664\" x=\"0.789062\" y=\"0.983398\" width=\"1240.4\" height=\"1240.77\"\n          filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n          <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n          <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\" />\n          <feGaussianBlur stdDeviation=\"150\" result=\"effect1_foregroundBlur_274:664\" />\n        </filter>\n        <linearGradient id=\"paint0_linear_274:664\" x1=\"930.021\" y1=\"562.081\" x2=\"384.763\" y2=\"425.132\"\n          gradientUnits=\"userSpaceOnUse\">\n          <stop stop-color=\"#6FDCFF\" />\n          <stop offset=\"1\" stop-color=\"#FF248D\" />\n        </linearGradient>\n      </defs>\n    </svg>" : '', "\n  </div>\n  <div class=\"roadmap__container\">\n    <div class=\"roadmap__title\">Roadmap</div>\n    ").concat($('body').width() > 930 ? "<div class=\"roadmap__lines\">\n      <div class=\"roadmap__line\">\n        <svg class=\"roadmap__line-oct\" width=\"287\" height=\"94\" viewBox=\"0 0 287 94\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M1 93V55C1 49.4772 5.47715 45 11 45H276.5C282.023 45 286.5 40.5228 286.5 35V0.5\"\n            stroke=\"url(#paint110_linear)\" stroke-linecap=\"round\" />\n          <defs>\n            <linearGradient id=\"paint110_linear\" x1=\"-298\" y1=\"51.7501\" x2=\"313.5\" y2=\"51.7501\"\n              gradientUnits=\"userSpaceOnUse\">\n              <stop stop-color=\"#FF248D\" stop-opacity=\"0\" />\n              <stop offset=\"0.115785\" stop-color=\"#FF248D\" stop-opacity=\"0.9\" />\n              <stop offset=\"1\" stop-color=\"#6FDCFF\" />\n            </linearGradient>\n          </defs>\n        </svg>\n        <svg class=\"roadmap__line-oct active\" width=\"290\" height=\"97\" viewBox=\"0 0 290 97\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M2 95V57C2 51.4772 6.47715 47 12 47H277.5C283.023 47 287.5 42.5228 287.5 37V2.5\"\n            stroke=\"url(#painto0_linear)\" stroke-width=\"4\" stroke-linecap=\"round\" />\n          <defs>\n            <linearGradient id=\"painto0_linear\" x1=\"287.5\" y1=\"53.8048\" x2=\"-11.6715\" y2=\"53.8047\"\n              gradientUnits=\"userSpaceOnUse\">\n              <stop stop-color=\"#FCB5EF\" />\n              <stop offset=\"1\" stop-color=\"#F7DE52\" />\n            </linearGradient>\n          </defs>\n        </svg>\n      </div>\n      <div class=\"roadmap__line \">\n        <svg class=\"roadmap__line-nov\" width=\"2\" height=\"93\" viewBox=\"0 0 2 93\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M1 92V0.5\" stroke=\"url(#paint120_linear)\" stroke-linecap=\"round\" />\n          <defs>\n            <linearGradient id=\"paint120_linear\" x1=\"1\" y1=\"92\" x2=\"1\" y2=\"0.999986\" gradientUnits=\"userSpaceOnUse\">\n              <stop stop-color=\"#FF248D\" />\n              <stop offset=\"1\" stop-color=\"#6FDCFF\" />\n            </linearGradient>\n          </defs>\n        </svg>\n        <svg class=\"roadmap__line-nov\" width=\"4\" height=\"96\" viewBox=\"0 0 4 96\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M2 94V2.5\" stroke=\"url(#paintn0_linear)\" stroke-width=\"4\" stroke-linecap=\"round\" />\n          <defs>\n            <linearGradient id=\"paintn0_linear\" x1=\"3\" y1=\"53.2502\" x2=\"1.95211\" y2=\"53.2502\"\n              gradientUnits=\"userSpaceOnUse\">\n              <stop stop-color=\"#FCB5EF\" />\n              <stop offset=\"1\" stop-color=\"#F7DE52\" />\n            </linearGradient>\n          </defs>\n        </svg>\n      </div>\n      <div class=\"roadmap__line\">\n        <svg class=\"roadmap__line-ter\" width=\"287\" height=\"94\" viewBox=\"0 0 287 94\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M286 93V55C286 49.4772 281.523 45 276 45H10.5C4.97715 45 0.5 40.5228 0.5 35V0.5\" stroke=\"white\"\n            stroke-linecap=\"round\" />\n          <path d=\"M286 93V55C286 49.4772 281.523 45 276 45H10.5C4.97715 45 0.5 40.5228 0.5 35V0.5\"\n            stroke=\"url(#paint130_linear)\" stroke-linecap=\"round\" />\n          <defs>\n            <linearGradient id=\"paint130_linear\" x1=\"375.5\" y1=\"51.7502\" x2=\"-85\" y2=\"51.7502\"\n              gradientUnits=\"userSpaceOnUse\">\n              <stop stop-color=\"#FF248D\" stop-opacity=\"0\" />\n              <stop offset=\"0.115785\" stop-color=\"#FF248D\" stop-opacity=\"0.9\" />\n              <stop offset=\"1\" stop-color=\"#6FDCFF\" />\n            </linearGradient>\n          </defs>\n        </svg>\n        <svg class=\"roadmap__line-ter\" width=\"290\" height=\"97\" viewBox=\"0 0 290 97\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M287.5 94.5V56.5C287.5 50.9772 283.023 46.5 277.5 46.5H12C6.47715 46.5 2 42.0228 2 36.5V2\"\n            stroke=\"url(#painttt0_linear)\" stroke-width=\"4\" stroke-linecap=\"round\" />\n          <defs>\n            <linearGradient id=\"painttt0_linear\" x1=\"287.5\" y1=\"53.3048\" x2=\"-11.6715\" y2=\"53.3047\"\n              gradientUnits=\"userSpaceOnUse\">\n              <stop stop-color=\"#FCB5EF\" />\n              <stop offset=\"1\" stop-color=\"#F7DE52\" />\n            </linearGradient>\n          </defs>\n        </svg>\n      </div>\n    </div>" : '', "\n    <div class=\"roadmap__wrapper\">\n      <div class=\"roadmap__item\">\n      ").concat($('body').width() > 930 ? "<picture>\n          <!-- <source\n          srcset=\"./img/Group_tablet.png\" media=\"(max-width: 1024px)\"> -->\n          <img src=\"./img/Group-1.png\" alt=\"\">\n        </picture>" : '', "\n\n      </div>\n      <div class=\"roadmap__item\">\n        <div class=\"roadmap__block\">\n          <div class=\"roadmap__header roadmap__header--oct active\">\n            <div class=\"roadmap__header-svg-o\">\n              ").concat($('body').width() > 930 && !isSafari ? "<svg style=\"visibility: hidden; position: absolute;\" width=\"0\" height=\"0\"\n                xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n                <defs>\n                  <filter id=\"roadmap__header--oct\">\n                    <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"3\" result=\"blur\" />\n                    <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\"\n                      result=\"roadmap__header--oct\" />\n                    <feComposite in=\"SourceGraphic\" in2=\"roadmap__header--oct\" operator=\"atop\" />\n                  </filter>\n                </defs>\n              </svg>" : '', "\n              <div class=\"roadmap__inside\">\n                <div class=\"roadmap__inside-svg-o\">\n                  <span>October</span>\n                  ").concat($('body').width() > 930 && !isSafari ? "<svg style=\"visibility: hidden; position: absolute;\" width=\"0\" height=\"0\"\n                    xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n                    <defs>\n                      <filter id=\"roadmap__inside--oct\">\n                        <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"3\" result=\"blur\" />\n                        <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\"\n                          result=\"roadmap__inside--oct\" />\n                        <feComposite in=\"SourceGraphic\" in2=\"roadmap__inside--oct\" operator=\"atop\" />\n                      </filter>\n                    </defs>\n                  </svg>" : '', "\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"roadmap__header roadmap__header--nov\">\n            <div class=\"roadmap__header-svg-n\">\n              ").concat($('body').width() > 930 && !isSafari ? "<svg style=\"visibility: hidden; position: absolute;\" width=\"0\" height=\"0\"\n                xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n                <defs>\n                  <filter id=\"roadmap__header--nov\">\n                    <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"3\" result=\"blur\" />\n                    <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\"\n                      result=\"roadmap__header--nov\" />\n                    <feComposite in=\"SourceGraphic\" in2=\"roadmap__header--nov\" operator=\"atop\" />\n                  </filter>\n                </defs>\n              </svg>" : '', "\n              <div class=\"roadmap__inside\">\n                <div class=\"roadmap__inside-svg-n\">\n                  <span>November</span>\n                  ").concat($('body').width() > 930 && !isSafari ? "<svg style=\"visibility: hidden; position: absolute;\" width=\"0\" height=\"0\"\n                    xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n                    <defs>\n                      <filter id=\"roadmap__inside--nov\">\n                        <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"3\" result=\"blur\" />\n                        <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\"\n                          result=\"roadmap__inside--nov\" />\n                        <feComposite in=\"SourceGraphic\" in2=\"roadmap__inside--nov\" operator=\"atop\" />\n                      </filter>\n                    </defs>\n                  </svg>" : '', "\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"roadmap__header roadmap__header--ter\">\n            <div class=\"roadmap__header-svg-t\">\n              ").concat($('body').width() > 930 && !isSafari ? "<svg style=\"visibility: hidden; position: absolute;\" width=\"0\" height=\"0\"\n                xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n                <defs>\n                  <filter id=\"roadmap__header--ter\">\n                    <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"3\" result=\"blur\" />\n                    <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\"\n                      result=\"roadmap__header--ter\" />\n                    <feComposite in=\"SourceGraphic\" in2=\"roadmap__header--ter\" operator=\"atop\" />\n                  </filter>\n                </defs>\n              </svg>" : '', "\n              <div class=\"roadmap__inside\">\n                <div class=\"roadmap__inside-svg-t\">\n                  <span>Long Term</span>\n                  ").concat($('body').width() > 930 && !isSafari ? "<svg style=\"visibility: hidden; position: absolute;\" width=\"0\" height=\"0\"\n                    xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n                    <defs>\n                      <filter id=\"roadmap__inside--ter\">\n                        <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"3\" result=\"blur\" />\n                        <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\"\n                          result=\"roadmap__inside--ter\" />\n                        <feComposite in=\"SourceGraphic\" in2=\"roadmap__inside--ter\" operator=\"atop\" />\n                      </filter>\n                    </defs>\n                  </svg>" : '', "\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- roadmap__inner--active -->\n        <div class=\"roadmap__inner roadmap__inner--active\">\n          <div class=\"roadmap__content roadmap__content--oct active\">\n            <ul class=\"active\">\n              <li class=\"active\">Website Launch</li>\n              <li class=\"active\">Private Presale</li>\n              <li class=\"active\">Marketing Campaign</li>\n              <li class=\"active\">Techrate Audit</li>\n              <li>Launch on PCS</li>\n              <li>Paid Dextools Trending</li>\n              <li>Poocoin Ads</li>\n              <li>Certik Audit</li>\n              <li>List on CMC</li>\n              <li>List on CG</li>\n              <li>List on Whitebit</li>\n              <li>AMA with Devs</li>\n              <li>Trend on Twitter</li>\n            </ul>\n          </div>\n          <div class=\"roadmap__content roadmap__content--nov\">\n            <ul class=\"roadmap__fix\">\n              <li class=\"active\">NFTNDR Release on Google Play Store and App Store</li>\n              <li>NFTNDR NFT Collection Release for Holders</li>\n              <li>Celebrities Ambassadors</li>\n              <li>High Profile Artists from Opensea and Solanart</li>\n              <li>Taxi Ads in NYC, Plane Ads in LA and Miami</li>\n              <li>OpenSea and Rarible Partnership</li>\n            </ul>\n          </div>\n          <div class=\"roadmap__content roadmap__content--ter\">\n            <ul class=\"roadmap__trem\">\n              <li class=\"active\">Asian marketing campaign</li>\n              <li class=\"active\">Binance Listing</li>\n              <li>Coinbase Listing</li>\n              <li>Real Life NFT Auction House</li>\n              <li>NFT Based Social Media</li>\n              <li>Multi Layer NFT Generator</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"roadmap__item\">\n       ").concat($('body').width() > 930 ? "<picture>\n          <source srcset=\"./img/Group-tablet-botton.png\" media=\"(max-width: 1020px)\">\n          <img src=\"./img/Group-2.png\" alt=\"\">\n        </picture>" : '', "\n      </div>\n    </div>\n  </div>");
var infoLazyLoadHTML = "\n<div class=\"info__left\">\n    ".concat($('body').width() > 1024 && !isSafari ? "<svg width=\"234\" height=\"540\" viewBox=\"0 0 234 540\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g opacity=\"0.15\" filter=\"url(#filter0_f_274:3328)\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n          d=\"M-16.8917 89.0843C36.3895 94.4627 75.7649 134.836 106.892 178.327C135.483 218.276 152.483 265.119 143.664 313.417C134.321 364.589 106.361 412.411 59.8604 435.903C12.3365 459.912 -44.0528 455.652 -91.9861 432.468C-139.762 409.359 -173.079 366.652 -188.278 315.884C-205.035 259.908 -211.882 196.35 -176.636 149.707C-140.547 101.95 -76.523 83.0649 -16.8917 89.0843Z\"\n          fill=\"url(#paint0_linear_274:3328)\" />\n      </g>\n      <defs>\n        <filter id=\"filter0_f_274:3328\" x=\"-289.756\" y=\"0.243912\" width=\"523.512\" height=\"539.512\"\n          filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n          <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n          <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\" />\n          <feGaussianBlur stdDeviation=\"43.878\" result=\"effect1_foregroundBlur_274:3328\" />\n        </filter>\n        <linearGradient id=\"paint0_linear_274:3328\" x1=\"146\" y1=\"270.001\" x2=\"-138.018\" y2=\"135.197\"\n          gradientUnits=\"userSpaceOnUse\">\n          <stop stop-color=\"#6FFF97\" />\n          <stop offset=\"1\" stop-color=\"#24FF89\" />\n        </linearGradient>\n      </defs>\n    </svg>" : '', "\n  </div>\n  <div class=\"info__container\">\n    <div class=\"info__title\">Tokenomics</div>\n    <div class=\"info__items\">\n      <div class=\"info__item\">\n        <img src=\"./img/tokenomits/Re-NFTurn_LP_icon.png\"\n          srcset=\"./img/tokenomits/Re-NFTurn_LP_icon.png 1x, ./img/tokenomits/x2/Re-NFTurn_LP_icon.png 2x\" alt=\"icon\">\n        <div class=\"info__desc\">\n          <b>3%</b>\n          <span>Re-NFTurn LP</span>\n        </div>\n      </div>\n      <div class=\"info__item\">\n        <img src=\"./img/tokenomits/Rflection_icon.png\"\n          srcset=\"./img/tokenomits/Rflection_icon.png 1x, ./img/tokenomits/x2/Rflection_icon.png 2x\" alt=\"icon\">\n        <div class=\"info__desc\">\n          <b>3%</b>\n          <span>Reflection</span>\n        </div>\n      </div>\n      <div class=\"info__item\">\n        <img src=\"./img/tokenomits/Marketing_icon.png\"\n          srcset=\"./img/tokenomits/Marketing_icon.png 1x, ./img/tokenomits/x2/Marketing_icon.png 2x\" alt=\"icon\">\n        <div class=\"info__desc\">\n          <b>5%</b>\n          <span>Marketing</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"info__right\">\n    ").concat($('body').width() > 1024 && !isSafari ? "<svg width=\"214\" height=\"457\" viewBox=\"0 0 214 457\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g opacity=\"0.15\" filter=\"url(#filter0_f_274:3329)\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n          d=\"M231.087 88.837C272.272 92.989 302.709 124.156 326.77 157.731C348.871 188.57 362.011 224.732 355.195 262.017C347.972 301.52 326.359 338.438 290.415 356.574C253.68 375.108 210.091 371.819 173.039 353.922C136.109 336.082 110.355 303.113 98.6072 263.921C85.654 220.71 80.3611 171.644 107.606 135.636C135.502 98.769 184.992 84.1902 231.087 88.837Z\"\n          fill=\"url(#paint0_linear_274:3329)\" />\n      </g>\n      <defs>\n        <filter id=\"filter0_f_274:3329\" x=\"0.243912\" y=\"0.243912\" width=\"444.512\" height=\"456.512\"\n          filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n          <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n          <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\" />\n          <feGaussianBlur stdDeviation=\"43.878\" result=\"effect1_foregroundBlur_274:3329\" />\n        </filter>\n        <linearGradient id=\"paint0_linear_274:3329\" x1=\"357\" y1=\"228.5\" x2=\"137.563\" y2=\"124.212\"\n          gradientUnits=\"userSpaceOnUse\">\n          <stop stop-color=\"#6FFF97\" />\n          <stop offset=\"1\" stop-color=\"#24FF89\" />\n        </linearGradient>\n      </defs>\n    </svg>" : '', "\n  </div>");
var addressLazyLoadHTML = "<div class=\"address__left-svg\">\n    ".concat($('body').width() > 768 && !isSafari ? "<svg width=\"574\" height=\"1238\" viewBox=\"0 0 574 1238\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <g opacity=\"0.15\" filter=\"url(#filter0_f_274:665)\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n          d=\"M-108.644 303.265C-14.1179 287.892 72.5802 339.388 146.472 400.086C214.346 455.839 265.387 528.865 272.502 616.352C280.04 709.045 253.871 804.571 184.417 866.662C113.435 930.12 14.0576 948.863 -79.4694 931.012C-172.69 913.22 -250.003 854.889 -299.748 774.252C-354.595 685.344 -395.833 578.754 -356.531 481.892C-316.291 382.717 -214.435 320.471 -108.644 303.265Z\"\n          fill=\"url(#paint0_linear_274:665)\" />\n      </g>\n      <defs>\n        <filter id=\"filter0_f_274:665\" x=\"-672.075\" y=\"0.519531\" width=\"1245.83\" height=\"1236.91\"\n          filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n          <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n          <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\" />\n          <feGaussianBlur stdDeviation=\"150\" result=\"effect1_foregroundBlur_274:665\" />\n        </filter>\n        <linearGradient id=\"paint0_linear_274:665\" x1=\"256.446\" y1=\"540.295\" x2=\"-296.516\" y2=\"438.84\"\n          gradientUnits=\"userSpaceOnUse\">\n          <stop stop-color=\"#6FDCFF\" />\n          <stop offset=\"1\" stop-color=\"#FF248D\" />\n        </linearGradient>\n      </defs>\n    </svg>" : '', "\n  </div>\n  <div class=\"address__title\">Contract adDress</div>\n  <div class=\"address__link\">\n    <div class=\"address__copy\">\n      <p id=\"selectText\">0x1b41821625d8cfad21cd56491dacd57ecacc83de</p>\n      <div class=\"address__popup address__popup--one\">\n        <div>Copy to clipboard</div>\n      </div>\n      <div class=\"address__popup address__popup--one-copy\">\n        <div>Copied</div>\n      </div>\n    </div>\n    <span class=\"address__copy-btn\" onclick=\"copyData(selectText)\">\n      <svg width=\"36\" height=\"36\" viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path\n          d=\"M15 25.5H10.5C8.51088 25.5 6.60322 24.7098 5.1967 23.3033C3.79018 21.8968 3 19.9891 3 18C3 16.0109 3.79018 14.1032 5.1967 12.6967C6.60322 11.2902 8.51088 10.5 10.5 10.5H15C15.3978 10.5 15.7794 10.658 16.0607 10.9393C16.342 11.2206 16.5 11.6022 16.5 12C16.5 12.3978 16.342 12.7794 16.0607 13.0607C15.7794 13.342 15.3978 13.5 15 13.5H10.5C9.30653 13.5 8.16193 13.9741 7.31802 14.818C6.47411 15.6619 6 16.8065 6 18C6 19.1935 6.47411 20.3381 7.31802 21.182C8.16193 22.0259 9.30653 22.5 10.5 22.5H15C15.3978 22.5 15.7794 22.658 16.0607 22.9393C16.342 23.2206 16.5 23.6022 16.5 24C16.5 24.3978 16.342 24.7794 16.0607 25.0607C15.7794 25.342 15.3978 25.5 15 25.5ZM25.5 25.5H21C20.6022 25.5 20.2206 25.342 19.9393 25.0607C19.658 24.7794 19.5 24.3978 19.5 24C19.5 23.6022 19.658 23.2206 19.9393 22.9393C20.2206 22.658 20.6022 22.5 21 22.5H25.5C26.6935 22.5 27.8381 22.0259 28.682 21.182C29.5259 20.3381 30 19.1935 30 18C30 16.8065 29.5259 15.6619 28.682 14.818C27.8381 13.9741 26.6935 13.5 25.5 13.5H21C20.6022 13.5 20.2206 13.342 19.9393 13.0607C19.658 12.7794 19.5 12.3978 19.5 12C19.5 11.6022 19.658 11.2206 19.9393 10.9393C20.2206 10.658 20.6022 10.5 21 10.5H25.5C27.4891 10.5 29.3968 11.2902 30.8033 12.6967C32.2098 14.1032 33 16.0109 33 18C33 19.9891 32.2098 21.8968 30.8033 23.3033C29.3968 24.7098 27.4891 25.5 25.5 25.5Z\"\n          fill=\"white\" />\n        <path\n          d=\"M22.5 19.5H13.5C13.1022 19.5 12.7206 19.342 12.4393 19.0607C12.158 18.7794 12 18.3978 12 18C12 17.6022 12.158 17.2206 12.4393 16.9393C12.7206 16.658 13.1022 16.5 13.5 16.5H22.5C22.8978 16.5 23.2794 16.658 23.5607 16.9393C23.842 17.2206 24 17.6022 24 18C24 18.3978 23.842 18.7794 23.5607 19.0607C23.2794 19.342 22.8978 19.5 22.5 19.5Z\"\n          fill=\"white\" />\n      </svg>\n\n      <svg width=\"36\" height=\"36\" viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path\n          d=\"M15 25.5H10.5C8.51088 25.5 6.60322 24.7098 5.1967 23.3033C3.79018 21.8968 3 19.9891 3 18C3 16.0109 3.79018 14.1032 5.1967 12.6967C6.60322 11.2902 8.51088 10.5 10.5 10.5H15C15.3978 10.5 15.7794 10.658 16.0607 10.9393C16.342 11.2206 16.5 11.6022 16.5 12C16.5 12.3978 16.342 12.7794 16.0607 13.0607C15.7794 13.342 15.3978 13.5 15 13.5H10.5C9.30653 13.5 8.16193 13.9741 7.31802 14.818C6.47411 15.6619 6 16.8065 6 18C6 19.1935 6.47411 20.3381 7.31802 21.182C8.16193 22.0259 9.30653 22.5 10.5 22.5H15C15.3978 22.5 15.7794 22.658 16.0607 22.9393C16.342 23.2206 16.5 23.6022 16.5 24C16.5 24.3978 16.342 24.7794 16.0607 25.0607C15.7794 25.342 15.3978 25.5 15 25.5ZM25.5 25.5H21C20.6022 25.5 20.2206 25.342 19.9393 25.0607C19.658 24.7794 19.5 24.3978 19.5 24C19.5 23.6022 19.658 23.2206 19.9393 22.9393C20.2206 22.658 20.6022 22.5 21 22.5H25.5C26.6935 22.5 27.8381 22.0259 28.682 21.182C29.5259 20.3381 30 19.1935 30 18C30 16.8065 29.5259 15.6619 28.682 14.818C27.8381 13.9741 26.6935 13.5 25.5 13.5H21C20.6022 13.5 20.2206 13.342 19.9393 13.0607C19.658 12.7794 19.5 12.3978 19.5 12C19.5 11.6022 19.658 11.2206 19.9393 10.9393C20.2206 10.658 20.6022 10.5 21 10.5H25.5C27.4891 10.5 29.3968 11.2902 30.8033 12.6967C32.2098 14.1032 33 16.0109 33 18C33 19.9891 32.2098 21.8968 30.8033 23.3033C29.3968 24.7098 27.4891 25.5 25.5 25.5Z\"\n          fill=\"#00001E\" />\n        <path\n          d=\"M15 25.5H10.5C8.51088 25.5 6.60322 24.7098 5.1967 23.3033C3.79018 21.8968 3 19.9891 3 18C3 16.0109 3.79018 14.1032 5.1967 12.6967C6.60322 11.2902 8.51088 10.5 10.5 10.5H15C15.3978 10.5 15.7794 10.658 16.0607 10.9393C16.342 11.2206 16.5 11.6022 16.5 12C16.5 12.3978 16.342 12.7794 16.0607 13.0607C15.7794 13.342 15.3978 13.5 15 13.5H10.5C9.30653 13.5 8.16193 13.9741 7.31802 14.818C6.47411 15.6619 6 16.8065 6 18C6 19.1935 6.47411 20.3381 7.31802 21.182C8.16193 22.0259 9.30653 22.5 10.5 22.5H15C15.3978 22.5 15.7794 22.658 16.0607 22.9393C16.342 23.2206 16.5 23.6022 16.5 24C16.5 24.3978 16.342 24.7794 16.0607 25.0607C15.7794 25.342 15.3978 25.5 15 25.5ZM25.5 25.5H21C20.6022 25.5 20.2206 25.342 19.9393 25.0607C19.658 24.7794 19.5 24.3978 19.5 24C19.5 23.6022 19.658 23.2206 19.9393 22.9393C20.2206 22.658 20.6022 22.5 21 22.5H25.5C26.6935 22.5 27.8381 22.0259 28.682 21.182C29.5259 20.3381 30 19.1935 30 18C30 16.8065 29.5259 15.6619 28.682 14.818C27.8381 13.9741 26.6935 13.5 25.5 13.5H21C20.6022 13.5 20.2206 13.342 19.9393 13.0607C19.658 12.7794 19.5 12.3978 19.5 12C19.5 11.6022 19.658 11.2206 19.9393 10.9393C20.2206 10.658 20.6022 10.5 21 10.5H25.5C27.4891 10.5 29.3968 11.2902 30.8033 12.6967C32.2098 14.1032 33 16.0109 33 18C33 19.9891 32.2098 21.8968 30.8033 23.3033C29.3968 24.7098 27.4891 25.5 25.5 25.5Z\"\n          fill=\"url(#paint110_linear_274:1850)\" />\n        <path\n          d=\"M22.5 19.5H13.5C13.1022 19.5 12.7206 19.342 12.4393 19.0607C12.158 18.7794 12 18.3978 12 18C12 17.6022 12.158 17.2206 12.4393 16.9393C12.7206 16.658 13.1022 16.5 13.5 16.5H22.5C22.8978 16.5 23.2794 16.658 23.5607 16.9393C23.842 17.2206 24 17.6022 24 18C24 18.3978 23.842 18.7794 23.5607 19.0607C23.2794 19.342 22.8978 19.5 22.5 19.5Z\"\n          fill=\"#00001E\" />\n        <path\n          d=\"M22.5 19.5H13.5C13.1022 19.5 12.7206 19.342 12.4393 19.0607C12.158 18.7794 12 18.3978 12 18C12 17.6022 12.158 17.2206 12.4393 16.9393C12.7206 16.658 13.1022 16.5 13.5 16.5H22.5C22.8978 16.5 23.2794 16.658 23.5607 16.9393C23.842 17.2206 24 17.6022 24 18C24 18.3978 23.842 18.7794 23.5607 19.0607C23.2794 19.342 22.8978 19.5 22.5 19.5Z\"\n          fill=\"url(#paint111_linear_274:1850)\" />\n        <defs>\n          <linearGradient id=\"paint110_linear_274:1850\" x1=\"18\" y1=\"26.6111\" x2=\"18.003\" y2=\"3.27778\"\n            gradientUnits=\"userSpaceOnUse\">\n            <stop stop-color=\"#6FDCFF\" />\n            <stop offset=\"1\" stop-color=\"white\" />\n          </linearGradient>\n          <linearGradient id=\"paint111_linear_274:1850\" x1=\"18\" y1=\"19.7222\" x2=\"18.0003\" y2=\"15.0556\"\n            gradientUnits=\"userSpaceOnUse\">\n            <stop stop-color=\"#6FDCFF\" />\n            <stop offset=\"1\" stop-color=\"white\" />\n          </linearGradient>\n        </defs>\n      </svg>\n    </span>\n  </div>\n  <a href=\"#\" class=\"address__btn\" target=\"_blank\">Check on bscscan</a>");
var contactUsLazyLoadHTML = "<div class=\"contactUs__left\">\n    <div class=\"contactUs__desc\">\n      <b>Contact us</b>\n      <span>For all business enquires, subscribe to get in touch with us.</span>\n    </div>\n    <div class=\"contactUs__email\">\n      <div class=\"address__copy\">\n        <p id=\"selectText_two\">\n          hello@nftinder.app\n        </p>\n        <div class=\"address__popup address__popup--tow\">\n          <div>Copy to clipboard</div>\n        </div>\n        <div class=\"address__popup address__popup--tow-copy\">\n          <div>Copied</div>\n        </div>\n      </div>\n      <span class=\"contactUs__copy-btn\" onclick=\"copyDataTwo(selectText_two)\">\n        <svg width=\"36\" height=\"36\" viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path\n            d=\"M15 25.5H10.5C8.51088 25.5 6.60322 24.7098 5.1967 23.3033C3.79018 21.8968 3 19.9891 3 18C3 16.0109 3.79018 14.1032 5.1967 12.6967C6.60322 11.2902 8.51088 10.5 10.5 10.5H15C15.3978 10.5 15.7794 10.658 16.0607 10.9393C16.342 11.2206 16.5 11.6022 16.5 12C16.5 12.3978 16.342 12.7794 16.0607 13.0607C15.7794 13.342 15.3978 13.5 15 13.5H10.5C9.30653 13.5 8.16193 13.9741 7.31802 14.818C6.47411 15.6619 6 16.8065 6 18C6 19.1935 6.47411 20.3381 7.31802 21.182C8.16193 22.0259 9.30653 22.5 10.5 22.5H15C15.3978 22.5 15.7794 22.658 16.0607 22.9393C16.342 23.2206 16.5 23.6022 16.5 24C16.5 24.3978 16.342 24.7794 16.0607 25.0607C15.7794 25.342 15.3978 25.5 15 25.5ZM25.5 25.5H21C20.6022 25.5 20.2206 25.342 19.9393 25.0607C19.658 24.7794 19.5 24.3978 19.5 24C19.5 23.6022 19.658 23.2206 19.9393 22.9393C20.2206 22.658 20.6022 22.5 21 22.5H25.5C26.6935 22.5 27.8381 22.0259 28.682 21.182C29.5259 20.3381 30 19.1935 30 18C30 16.8065 29.5259 15.6619 28.682 14.818C27.8381 13.9741 26.6935 13.5 25.5 13.5H21C20.6022 13.5 20.2206 13.342 19.9393 13.0607C19.658 12.7794 19.5 12.3978 19.5 12C19.5 11.6022 19.658 11.2206 19.9393 10.9393C20.2206 10.658 20.6022 10.5 21 10.5H25.5C27.4891 10.5 29.3968 11.2902 30.8033 12.6967C32.2098 14.1032 33 16.0109 33 18C33 19.9891 32.2098 21.8968 30.8033 23.3033C29.3968 24.7098 27.4891 25.5 25.5 25.5Z\"\n            fill=\"white\" />\n          <path\n            d=\"M22.5 19.5H13.5C13.1022 19.5 12.7206 19.342 12.4393 19.0607C12.158 18.7794 12 18.3978 12 18C12 17.6022 12.158 17.2206 12.4393 16.9393C12.7206 16.658 13.1022 16.5 13.5 16.5H22.5C22.8978 16.5 23.2794 16.658 23.5607 16.9393C23.842 17.2206 24 17.6022 24 18C24 18.3978 23.842 18.7794 23.5607 19.0607C23.2794 19.342 22.8978 19.5 22.5 19.5Z\"\n            fill=\"white\" />\n        </svg>\n\n        <svg width=\"36\" height=\"36\" viewBox=\"0 0 36 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path\n            d=\"M15 25.5H10.5C8.51088 25.5 6.60322 24.7098 5.1967 23.3033C3.79018 21.8968 3 19.9891 3 18C3 16.0109 3.79018 14.1032 5.1967 12.6967C6.60322 11.2902 8.51088 10.5 10.5 10.5H15C15.3978 10.5 15.7794 10.658 16.0607 10.9393C16.342 11.2206 16.5 11.6022 16.5 12C16.5 12.3978 16.342 12.7794 16.0607 13.0607C15.7794 13.342 15.3978 13.5 15 13.5H10.5C9.30653 13.5 8.16193 13.9741 7.31802 14.818C6.47411 15.6619 6 16.8065 6 18C6 19.1935 6.47411 20.3381 7.31802 21.182C8.16193 22.0259 9.30653 22.5 10.5 22.5H15C15.3978 22.5 15.7794 22.658 16.0607 22.9393C16.342 23.2206 16.5 23.6022 16.5 24C16.5 24.3978 16.342 24.7794 16.0607 25.0607C15.7794 25.342 15.3978 25.5 15 25.5ZM25.5 25.5H21C20.6022 25.5 20.2206 25.342 19.9393 25.0607C19.658 24.7794 19.5 24.3978 19.5 24C19.5 23.6022 19.658 23.2206 19.9393 22.9393C20.2206 22.658 20.6022 22.5 21 22.5H25.5C26.6935 22.5 27.8381 22.0259 28.682 21.182C29.5259 20.3381 30 19.1935 30 18C30 16.8065 29.5259 15.6619 28.682 14.818C27.8381 13.9741 26.6935 13.5 25.5 13.5H21C20.6022 13.5 20.2206 13.342 19.9393 13.0607C19.658 12.7794 19.5 12.3978 19.5 12C19.5 11.6022 19.658 11.2206 19.9393 10.9393C20.2206 10.658 20.6022 10.5 21 10.5H25.5C27.4891 10.5 29.3968 11.2902 30.8033 12.6967C32.2098 14.1032 33 16.0109 33 18C33 19.9891 32.2098 21.8968 30.8033 23.3033C29.3968 24.7098 27.4891 25.5 25.5 25.5Z\"\n            fill=\"#00001E\" />\n          <path\n            d=\"M15 25.5H10.5C8.51088 25.5 6.60322 24.7098 5.1967 23.3033C3.79018 21.8968 3 19.9891 3 18C3 16.0109 3.79018 14.1032 5.1967 12.6967C6.60322 11.2902 8.51088 10.5 10.5 10.5H15C15.3978 10.5 15.7794 10.658 16.0607 10.9393C16.342 11.2206 16.5 11.6022 16.5 12C16.5 12.3978 16.342 12.7794 16.0607 13.0607C15.7794 13.342 15.3978 13.5 15 13.5H10.5C9.30653 13.5 8.16193 13.9741 7.31802 14.818C6.47411 15.6619 6 16.8065 6 18C6 19.1935 6.47411 20.3381 7.31802 21.182C8.16193 22.0259 9.30653 22.5 10.5 22.5H15C15.3978 22.5 15.7794 22.658 16.0607 22.9393C16.342 23.2206 16.5 23.6022 16.5 24C16.5 24.3978 16.342 24.7794 16.0607 25.0607C15.7794 25.342 15.3978 25.5 15 25.5ZM25.5 25.5H21C20.6022 25.5 20.2206 25.342 19.9393 25.0607C19.658 24.7794 19.5 24.3978 19.5 24C19.5 23.6022 19.658 23.2206 19.9393 22.9393C20.2206 22.658 20.6022 22.5 21 22.5H25.5C26.6935 22.5 27.8381 22.0259 28.682 21.182C29.5259 20.3381 30 19.1935 30 18C30 16.8065 29.5259 15.6619 28.682 14.818C27.8381 13.9741 26.6935 13.5 25.5 13.5H21C20.6022 13.5 20.2206 13.342 19.9393 13.0607C19.658 12.7794 19.5 12.3978 19.5 12C19.5 11.6022 19.658 11.2206 19.9393 10.9393C20.2206 10.658 20.6022 10.5 21 10.5H25.5C27.4891 10.5 29.3968 11.2902 30.8033 12.6967C32.2098 14.1032 33 16.0109 33 18C33 19.9891 32.2098 21.8968 30.8033 23.3033C29.3968 24.7098 27.4891 25.5 25.5 25.5Z\"\n            fill=\"url(#paint1120_linear_274:1850)\" />\n          <path\n            d=\"M22.5 19.5H13.5C13.1022 19.5 12.7206 19.342 12.4393 19.0607C12.158 18.7794 12 18.3978 12 18C12 17.6022 12.158 17.2206 12.4393 16.9393C12.7206 16.658 13.1022 16.5 13.5 16.5H22.5C22.8978 16.5 23.2794 16.658 23.5607 16.9393C23.842 17.2206 24 17.6022 24 18C24 18.3978 23.842 18.7794 23.5607 19.0607C23.2794 19.342 22.8978 19.5 22.5 19.5Z\"\n            fill=\"#00001E\" />\n          <path\n            d=\"M22.5 19.5H13.5C13.1022 19.5 12.7206 19.342 12.4393 19.0607C12.158 18.7794 12 18.3978 12 18C12 17.6022 12.158 17.2206 12.4393 16.9393C12.7206 16.658 13.1022 16.5 13.5 16.5H22.5C22.8978 16.5 23.2794 16.658 23.5607 16.9393C23.842 17.2206 24 17.6022 24 18C24 18.3978 23.842 18.7794 23.5607 19.0607C23.2794 19.342 22.8978 19.5 22.5 19.5Z\"\n            fill=\"url(#paint1112_linear_274:1850)\" />\n          <defs>\n            <linearGradient id=\"paint1120_linear_274:1850\" x1=\"18\" y1=\"26.6111\" x2=\"18.003\" y2=\"3.27778\"\n              gradientUnits=\"userSpaceOnUse\">\n              <stop stop-color=\"#6FDCFF\" />\n              <stop offset=\"1\" stop-color=\"white\" />\n            </linearGradient>\n            <linearGradient id=\"paint1112_linear_274:1850\" x1=\"18\" y1=\"19.7222\" x2=\"18.0003\" y2=\"15.0556\"\n              gradientUnits=\"userSpaceOnUse\">\n              <stop stop-color=\"#6FDCFF\" />\n              <stop offset=\"1\" stop-color=\"white\" />\n            </linearGradient>\n          </defs>\n        </svg>\n      </span>\n    </div>\n  </div>\n  <div class=\"contactUs__right\">\n    <div class=\"about__contactUs\">\n      <p>Connect with our community on <span>Telegram</span></p>\n      <a href=\"#\" target=\"_blank\">Join</a>\n    </div>\n  </div>";
"use strict";

console.log('maxgraph');
"use strict";

function setActiveFirstBlockRoadmap() {
  var setActiveFirst = !$('.roadmap__header--nov').hasClass("active") || !$('.roadmap__header--ter').hasClass('active');

  if (setActiveFirst) {
    $(".roadmap__header--oct").addClass("active");
    $(".roadmap__content--oct").addClass("active");
    $(".roadmap__content--oct").children('ul').addClass("_active");

    if ($(".roadmap__line-oct:last")) {
      $(".roadmap__line-oct:last").addClass("active");
    }

    $('.roadmap__header--nov').removeClass("active");
    $(".roadmap__header--oct").removeClass("active--nov");
    $(".roadmap__content--nov").removeClass("active");
    $(".roadmap__line-nov:last").removeClass("active");
    $(".roadmap__content--nov").children('ul').removeClass("_active");
    $('.roadmap__header--ter').removeClass("active");
    $(".roadmap__header--nov").removeClass("active--ter");
    $(".roadmap__header--oct").removeClass("active--nov");
    $(".roadmap__content--ter").removeClass("active");
    $(".roadmap__line-ter:last").removeClass("active");
    $(".roadmap__content--ter").children('ul').removeClass("_active");
  }
}

function onResizeSetEvents() {
  if ($('body').width() <= 1024) {
    setActiveFirstBlockRoadmap();
  } else {
    $(".roadmap__content--oct").hover(function () {
      $('.roadmap__header--oct').addClass("active");
      $(".roadmap__content--oct").addClass("active");
      $(".roadmap__line-oct:last").addClass("active");
      $(".roadmap__content--oct").children('ul').addClass("_active");
    }, function () {
      $('.roadmap__header--oct').removeClass("active");
      $(".roadmap__content--oct").removeClass("active");
      $(".roadmap__line-oct:last").removeClass("active");
      $(".roadmap__content--oct").children('ul').removeClass("_active");
    });
    $(".roadmap__content--nov").hover(function () {
      $('.roadmap__header--nov').addClass("active");
      $(".roadmap__header--oct").addClass("active--nov");
      $(".roadmap__content--nov").addClass("active");
      $(".roadmap__line-nov:last").addClass("active");
      $(".roadmap__content--nov").children('ul').addClass("_active");
      $(".roadmap__header--oct").removeClass("active");
      $(".roadmap__content--oct").removeClass("active");
    }, function () {
      $('.roadmap__header--nov').removeClass("active");
      $(".roadmap__header--oct").removeClass("active--nov");
      $(".roadmap__content--nov").removeClass("active");
      $(".roadmap__line-nov:last").removeClass("active");
      $(".roadmap__content--nov").children('ul').removeClass("_active");
    });
    $(".roadmap__content--ter").hover(function () {
      $('.roadmap__header--ter').addClass("active");
      $(".roadmap__header--nov").addClass("active--ter");
      $(".roadmap__header--oct").addClass("active--nov");
      $(".roadmap__content--ter").addClass("active");
      $(".roadmap__line-ter:last").addClass("active");
      $(".roadmap__content--ter").children('ul').addClass("_active");
      $(".roadmap__header--oct").removeClass("active");
      $(".roadmap__content--oct").removeClass("active");
    }, function () {
      $('.roadmap__header--ter').removeClass("active");
      $(".roadmap__header--nov").removeClass("active--ter");
      $(".roadmap__header--oct").removeClass("active--nov");
      $(".roadmap__content--ter").removeClass("active");
      $(".roadmap__line-ter:last").removeClass("active");
      $(".roadmap__content--ter").children('ul').removeClass("_active");
    });
  }
}

function setRoadmapEvents() {
  onResizeSetEvents();
  $(".roadmap__header--oct span").hover(function () {
    $('.roadmap__header--oct').addClass("active");
    $(".roadmap__content--oct").addClass("active");
    $(".roadmap__line-oct:last").addClass("active");
    $(".roadmap__content--oct").children('ul').addClass("_active");
  }, function () {
    $('.roadmap__header--oct').removeClass("active");
    $(".roadmap__content--oct").removeClass("active");
    $(".roadmap__line-oct:last").removeClass("active");
    $(".roadmap__content--oct").children('ul').removeClass("_active");
  });
  $(".roadmap__header--nov span").hover(function () {
    $('.roadmap__header--nov').addClass("active");
    $(".roadmap__header--oct").addClass("active--nov");
    $(".roadmap__content--nov").addClass("active");
    $(".roadmap__line-nov:last").addClass("active");
    $(".roadmap__content--nov").children('ul').addClass("_active");
    $(".roadmap__header--oct").removeClass("active");
    $(".roadmap__content--oct").removeClass("active");
    $(".roadmap__line-oct:last").removeClass("active");
  }, function () {
    $('.roadmap__header--nov').removeClass("active");
    $(".roadmap__header--oct").removeClass("active--nov");
    $(".roadmap__content--nov").removeClass("active");
    $(".roadmap__line-nov:last").removeClass("active");
    $(".roadmap__content--nov").children('ul').removeClass("_active");

    if ($('body').width() <= 1024) {
      setActiveFirstBlockRoadmap();
    }
  });
  $(".roadmap__header--ter span").hover(function () {
    $('.roadmap__header--ter').addClass("active");
    $(".roadmap__header--nov").addClass("active--ter");
    $(".roadmap__header--oct").addClass("active--nov");
    $(".roadmap__content--ter").addClass("active");
    $(".roadmap__line-ter:last").addClass("active");
    $(".roadmap__content--ter").children('ul').addClass("_active");
    $(".roadmap__header--oct").removeClass("active");
    $(".roadmap__content--oct").removeClass("active");
    $(".roadmap__line-oct:last").removeClass("active");
  }, function () {
    $('.roadmap__header--ter').removeClass("active");
    $(".roadmap__header--nov").removeClass("active--ter");
    $(".roadmap__header--oct").removeClass("active--nov");
    $(".roadmap__content--ter").removeClass("active");
    $(".roadmap__line-ter:last").removeClass("active");
    $(".roadmap__content--ter").children('ul').removeClass("_active");

    if ($('body').width() <= 1024) {
      setActiveFirstBlockRoadmap();
    }
  }); ////////////
}

function addressEvents() {
  $(".address__copy-btn").hover(function () {
    $('.address__popup--one').addClass('active');
  }, function () {
    $('.address__popup--one').removeClass('active');
  });
  $(".address__copy-btn").click(function () {
    $('.address__popup--one-copy').addClass('active');
    $('.address__popup--one').removeClass('active');
    setTimeout(function () {
      $('.address__popup--one-copy').removeClass('active');
    }, 2000);
  });
}

function contactUsEvents() {
  $(".contactUs__copy-btn").hover(function () {
    $('.address__popup--tow').addClass('active');
  }, function () {
    $('.address__popup--tow').removeClass('active');
  });
  $(".contactUs__copy-btn").click(function () {
    $('.address__popup--tow-copy').addClass('active');
    $('.address__popup--tow').removeClass('active');
    setTimeout(function () {
      $('.address__popup--tow-copy').removeClass('active');
    }, 2000);
  });
}
/**
  * ???????????????? ??????????????
  *
  * @param {number} first - ???????????? ??????????
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
