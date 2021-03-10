AOS.init();

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
  if ((document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) && window.innerWidth > 600) {
      document.querySelector("header").classList.add("shrink")
  } else {
      document.querySelector("header").classList.remove("shrink")
  }

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // mybutton.style.display = "block";
    mybutton.style.visibility = "visible";
    mybutton.style.opacity = "1";
    mybutton.style.bottom = "20px";
  } else {
    mybutton.style.visibility = "hidden";
    mybutton.style.opacity = "0";
    mybutton.style.bottom = "-20px"
  } 
} 


// Scroll to up Button
//Get the button:
mybutton = document.getElementById("scroll-to-up-btn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
} 