$(document).ready(function () {
  $(".product-buy").click(function () {
    $(".modal-wrapper").toggleClass("hidden");
  })
  $(".modal-close").click(function () {
    $(".modal-wrapper").toggleClass("hidden");
  });
});
 $(document).ready(function () {
  $('.header-burger').click(function (event) {
  $('.header-burger,.nav,.header').toggleClass('active');
  $('body').toggleClass('lock');
   });
 });
