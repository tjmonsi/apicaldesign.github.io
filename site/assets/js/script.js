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
