var links = document.getElementsByClassName("nav-link");

for (i = 0; i < links.length; i++)
  links[i].addEventListener('click', linkClick, false);


function linkClick(e) {
  var nav = document.getElementById("nav");
  if (document.documentElement.clientWidth <= 800) {
    nav.style.display = 'none';
  }
}

function toggleMenu() {
  var nav = document.getElementById("nav");
  
  if(nav.style.display === 'none' || nav.style.display === '') {
    nav.style.display = 'flex';
  }
  else {
    nav.style.display = 'none';
  }
}

window.addEventListener("resize", function(){
  var nav = document.getElementById("nav");

  if (document.documentElement.clientWidth > 800) {
    nav.style.display = 'flex';
  }
  else {
    nav.style.display = 'none';
  }
}, true);


$( window ).ready (function() {
  var halfWidth = (parseInt($(".box-top").css( "width" )))/2;
  halfWidth += "px";

  $( ".box-bottom" ).css("border-left-width", halfWidth);
  $( ".box-bottom" ).css("border-right-width", halfWidth);  
});

$( window ).resize(function() {
  var halfWidth = (parseInt($(".box").css( "width" )))/2;
  halfWidth += "px";

  $( ".box-bottom" ).css("border-left-width", halfWidth);
  $( ".box-bottom" ).css("border-right-width", halfWidth);
});

/*
$(document).ready(function() {

  $("#plan-1").click(function() {
    $(".test").removeClass('vis');

    $("#product-component-b024af3399e").removeClass('hidden');
    $("#product-component-7f19a269fab").addClass('hidden');
    $("#product-component-e5db81df11d").addClass('hidden');

    $("#product-component-c57d9771612").removeClass('hidden');
    $("#product-component-1ab7c2d7d22").removeClass('hidden');
    $("#product-component-d129be31736").removeClass('hidden');
    $("#product-component-576c0fd2934").removeClass('hidden');
  });
  $("#plan-2").click(function() {
    $(".test").removeClass('vis');
    $("#product-component-b024af3399e").addClass('hidden');
    $("#product-component-7f19a269fab").removeClass('hidden');
    $("#product-component-e5db81df11d").addClass('hidden');

    $("#product-component-c57d9771612").addClass('hidden');
    $("#product-component-1ab7c2d7d22").removeClass('hidden');
    $("#product-component-d129be31736").removeClass('hidden');
    $("#product-component-576c0fd2934").removeClass('hidden');
  });
  $("#plan-3").click(function() {
    $(".test").removeClass('vis');
    $("#product-component-b024af3399e").addClass('hidden');
    $("#product-component-7f19a269fab").addClass('hidden');
    $("#product-component-e5db81df11d").removeClass('hidden');

    $("#product-component-c57d9771612").addClass('hidden');
    $("#product-component-1ab7c2d7d22").addClass('hidden');
    $("#product-component-d129be31736").addClass('hidden');
    $("#product-component-576c0fd2934").removeClass('hidden');
  });
});
*/