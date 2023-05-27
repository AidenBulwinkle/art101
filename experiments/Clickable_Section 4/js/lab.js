function openPopup() {
  $('.popup').css('display', 'block');
  $("p, h2, button").addClass("open-popup"); //sets to block so popup is visible 
  $("p, h2, button").removeClass("popup");
}

function closePopup() {
  $('.popup').css('display', 'none'); //closes popup, sets state to none
  $("p, h2, button").addClass("popup");
  $("p, h2, button").removeClass("open-popup");
}

function changeImage() {
  $('.button1 img').attr('src', 'img/untiled.jpg');
  $("img").addClass("popup-img")} //changes image from environment.jpg to IMG