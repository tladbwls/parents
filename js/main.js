$(function () {
  $("#fullpage").fullpage({
    verticalCentered: false,
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    navigationPosition: "right",
    // paddingTop: "90px",
    anchors: ["1st", "2st", "3st", "4st", "5st"],
    afterLoad: function (anchors) {
      if (anchors == "1st") {
        // console.log(true);
        // const fpNavBorder = document.querySelectorAll("#fp-nav ul li");
        // const fpNavSpan = document.querySelectorAll("#fp-nav ul li a span");
        $("#fp-nav ul li").css("border", "#fff");
        $("#fp-nav ul li a span").css("background-color", "#fff");
        $(".header-wrapper .left .logo-img").css(
          "background-image",
          "url(/img/logo-white.png)"
        );
      }
      if (
        anchors == "2st" ||
        anchors == "3st" ||
        anchors == "4st" ||
        anchors == "5st"
      ) {
        $("#fp-nav ul li a span").css("background-color", "#c4c4c4");
        $(".header-wrapper .left .logo-img").css(
          "background-image",
          "url(/img/logo-black.png)"
        );
      }
    },
  });
});

var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

// function name(params) {}

// const fpNav = document.querySelectorAll("#fp-nav ul li");

// console.log(fpNav);
