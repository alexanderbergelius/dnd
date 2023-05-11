
// When the user scrolls down 20px from the top of the document, slidel down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}




/* ''animationen'' för hamburgar menyn */
function openNavHamburger() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNavHamburger() {
  document.getElementById("myNav").style.width = "0%";
}



/* animationen för sido menyn vid media query*/
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  /* document.getElementById("main").style.marginLeft = "250px"; */ /* tog bort detta fr att inte flytta text */
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}