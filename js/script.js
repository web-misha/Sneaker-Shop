
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});


$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

$(document).ready(function () {
  $(".header_burger").click(function (event) {
    $(".header_burger, .header_nav_menu").toggleClass("active");
  });
});

var mySwiperMain = new Swiper(".card_slider_main", {
  // Optional parameters
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  thumbs: {
    swiper: {
      el: ".card_slider_sub",
      slidesPerView: 4,
    },
  },
  zoom: {
    maxRatio: 1.5,
    minRatio: 1,
  },
});

$(document).ready(function () {
  $("#minus").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $("#plus").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});

$(document).ready(function () {
  $(".acordion_item_trigger").click(function () {
    $(this).toggleClass("acordion_item_trigger_active");
    $(this).next(".acordion_item_content").slideToggle();
  });
});







