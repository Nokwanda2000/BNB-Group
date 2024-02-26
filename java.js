let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// function News(){
//     document.getElementsByClassName("news").style.display = "block"
//     document.getElementsByClassName("slideshow-container").style.display = "none"
// }


$(document).ready(function(){
    $("Contacts").click(function(){
      $("#contact").show();
    });
    $("#contact").dblclick(function(){
      $("#contact").hide();
      
      $(".slideshow-container").show()
    });
    $("#about").dblclick(function(){
      $("#about").hide();
      $(".slideshow-container").show()

    })
  });

  // function Contact(){
  //  document.getElementById("contact").style.display = "block"
  //  document.getElementsByClassName("slideshow-container")[0].style.display = "none"
  //   //document.getElementById("p").style.display = "block"
  //  }
  // function About(){
  //  document.getElementById("about").style.display =" block"
  //    document.getElementsByClassName("slideshow-container")[0].style.display = "none"

  //  }
