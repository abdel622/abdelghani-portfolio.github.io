
// Icon Menu
// function myFunction(x) {
//     x.classList.toggle("change");
//     if (x.classList.contains("change")){
//         var el = document.getElementById("links");
//         el.classList.add("working");
//         document.querySelector('header').setAttribute("style", "max-height:190px !important;")
//     }else{
//         var el = document.getElementById("links");
//         el.classList.remove("working")
//         document.querySelector('header').setAttribute("style", "max-height:125px !important;")
//     }
// } 



// When the user scrolls down 10px from the top of the document, resize the navbar's padding and the logo's font size
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

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
} 