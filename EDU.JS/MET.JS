let bars = document.querySelector(".bars")
let span1 = document.querySelector(".bars span:nth-child(1)")
let span2 = document.querySelector(".bars span:nth-child(2)")
let span3 = document.querySelector(".bars span:nth-child(3)")
let show = document.querySelector(".HOME .container .HOMElanding .NAVlandinG .NAV")

bars.onclick = function(){

    span1.classList.toggle("rotateup")
    span2.classList.toggle("display")
    span3.classList.toggle("rotatedown")
    show.classList.toggle("shownav")

}


// jQuery start 

// $(document).ready(function(){
//     $(".bars").on("click", function(){
//         $(show).toggleClass("shownav")

//         $(span1).toggleClass("rotateup")
//         $(span2).toggleClass("display")
//         $(span3).toggleClass("rotatedown")        
//       });
// })

// jQuery start 

let SERVICES = document.querySelector(".SERVICES")
let NAVlandinG = document.querySelector(".HOMElanding .NAVlandinG")


// window.onscroll = function(){

//     if(window.scrollY >= SERVICES.offsetTop - 50){

//         NAVlandinG.classList.add("animation") 
//     }else if((window.scrollY <= SERVICES.offsetTop - 50)) {
//         NAVlandinG.classList.remove("animation") 


//     }
// }