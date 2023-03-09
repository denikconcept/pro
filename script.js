let menu = document.querySelector
   ('#menu-btn');
let navbar = document.querySelector
   ('.navbar');

menu.onclick = () => {
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');

}
window.onscroll = () => {
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');



}

document.getElementById('submit').addEventListener('submit', function(event){
   event.preventDefault();
   var myname= document.getElementById("name")
   var mynumber= document.getElementById("number")
   var myemail= document.getElementById("email")
   var mydate= document.getElementById("date")
   // var nameerror= document.getElementById("nameerror")
   if(myname.value){
      myname.classList.replace("error-mode","box")
      // myname.classList.add("box")
   }else{
      myname.classList.replace("box","error-mode")
      // myname.classList.remove("box")
   }
   if(mynumber.value){
      mynumber.classList.replace("error-mode","box")
      // myname.classList.add("box")
   }else{
      mynumber.classList.replace("box","error-mode")
      // myname.classList.remove("box")
   }

   if(myemail.value){
      myemail.classList.replace("error-mode","box")
      // myname.classList.add("box")
   }else{
      myemail.classList.replace("box","error-mode")
      // myname.classList.remove("box")
   }
   
   if(mydate.value){
      mydate.classList.replace("error-mode","box")
      // myname.classList.add("box")
   }else{
      mydate.classList.replace("box","error-mode")
      // myname.classList.remove("box")
   }
   console.log(event);
})

// function validate(e) {
//    e.preventDefault()
// }






var swiper = new Swiper(".review-slider", {
   loop:true,
   spaceBetween: 20,
   autoplay: {
    delay:7500,
   disableOnInteraction: false,
   },
   centeredSlides: true,

   pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },

   breakpoints: {
     0: {
       slidesPerView: 1,
      
     },
     768: {
       slidesPerView: 2,
      
     },
     1020: {
       slidesPerView: 3,
       
     },
   },
 });