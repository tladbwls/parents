$(function () {
  $("#fullpage").fullpage({
    verticalCentered: false,
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    navigationPosition: "right",
    // paddingTop: "90px",
  });
});

var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
