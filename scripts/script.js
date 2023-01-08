$(document).ready(function () {
  $(".product-buy").click(function () {
    $(".modal-wrapper").toggleClass("hidden");
  });
  $(".modal-close").click(function () {
    $(".modal-wrapper").toggleClass("hidden");
  });
});
$(document).ready(function () {
  $(".header-burger").click(function (event) {
    $(".header-burger,.nav,.header").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
function preloader() {
  $(document).ready(function () {
    $("#overflow").css("overflow", "hidden");
    setTimeout(function load() {
      let loading = $(".preloader");
      loading.css("display", "none");
      $("#overflow").css("overflow", "hidden");
    }, 4000);
  });
}
preloader();
