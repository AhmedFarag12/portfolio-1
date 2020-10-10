// random background
let LandingImg = document.querySelector('.landing-img');
let ImgArr = ["04.jpg", "02.jpg" , "03.jpg" ];
setInterval(()=>{
      let RandomNumber = Math.floor(Math.random()*ImgArr.length);
      LandingImg.style.backgroundImage = 'url("images/'+ImgArr[RandomNumber]+'")';

},2500);
//the change of job
var typed = new Typed('.type', {
      strings: [
       'Designer',
       'Developer',
       'Freelancer'
      ],
      typeSpeed: 50,
      backspeed: 50,
      loop: true

});
//left toggle slider
function myslide(){
      document.getElementById("toggle").classList.toggle('active');
}
//to top page
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll" , ()=>{
      if(window.pageYOffset > 100){
            toTop.classList.add("active")
      }else{
            toTop.classList.remove("active")
   
      }
});
//animation divs
AOS.init();

// loading screen j-query
$(window).on("load",function()
{
 $(".loading-overlay .sk-folding-cube").fadeOut(2000,function(){
        $(this).parent().fadeOut(2000,function(){
            $("body").css("overflow","auto");
            $(this).remove();
    });
  }); 
});

