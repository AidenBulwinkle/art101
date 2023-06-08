//Napkin

function openPopup1() {
  $('.popup1').css('display', 'block');
  $('napkin').addClass("open-popup1"); //sets to block so popup is visible 
  $('napkin').removeClass("popup1");
}

function closePopup1() {
  $('.popup1').css('display', 'none'); //closes popup, sets state to none
  $('napkin').addClass("popup1");
  $('napkin').removeClass("open-popup1");
}

function changeImage1() {
  $('.button1 img').attr('src', 'desk-img/1_Napkin1.png');
  $("img").addClass("popup-img1")} //changes image from environment.jpg to IMG



//Sheath

function openPopup2() {
  $('.popup2').css('display', 'block');
  $('sheath').addClass("open-popup2"); //sets to block so popup is visible 
  $('sheath').removeClass("popup2");
}

function closePopup2() {
  $('.popup2').css('display', 'none'); //closes popup, sets state to none
  $('sheath').addClass("popup2");
  $('sheath').removeClass("open-popup2");
}

function changeImage2() {
  $('.button2 img').attr('src', 'desk-img/2_Sheath1.png');
  $("img").addClass("popup-img2")} //changes image from environment.jpg to IMG




//Glove

function openPopup3() {
  $('.popup3').css('display', 'block');
  $('glove').addClass("open-popup3"); //sets to block so popup is visible 
  $('glove').removeClass("popup3");
}

function closePopup3() {
  $('.popup3').css('display', 'none'); //closes popup, sets state to none
  $('glove').addClass("popup3");
  $('glove').removeClass("open-popup3");
}

function changeImage3() {
  $('.button3 img').attr('src', 'desk-img/3_Glove.png');
  $("img").addClass("popup-img3")} //changes image from environment.jpg to IMG


//Obitiary

function openPopup4() {
  $('.popup4').css('display', 'block');
  $('obit').addClass("open-popup3"); //sets to block so popup is visible 
  $('obit').removeClass("popup3");
}

function closePopup4() {
  $('.popup4').css('display', 'none'); //closes popup, sets state to none
  $('obit').addClass("popup4");
  $('obit').removeClass("open-popup4");
}

function changeImage4() {
  $('.button4 img').attr('src', 'desk-img/4_Obitiary.png');
  $("img").addClass("popup-img4")} //changes image from environment.jpg to IMG


  