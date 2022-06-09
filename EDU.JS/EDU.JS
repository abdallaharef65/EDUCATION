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

// jQuery end 



//ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

let click = document.querySelectorAll(".accordions .accordiondetails div ")
let Paragraphs = document.querySelectorAll(".accordions .accordiondetails P ")
let span = document.querySelectorAll(".accordions .accordiondetails span ")
let h1 = document.querySelectorAll(".accordions .accordiondetails h1 ")




click.forEach((ele)=>{
    ele.addEventListener("click",function(ala){    
        Paragraphs.forEach((ele)=>{
        ele.classList.remove("active")
        })

        span.forEach((ele)=>{
        ele.classList.remove("active2")
        })

        h1.forEach((ele)=>{
        ele.classList.remove("active3")
        })

        document.querySelectorAll(("."+ele.dataset.name)).forEach((el) => {
        el.classList.add("active")
        el.classList.add("active2")
        el.classList.add("active3")
        });
    });
})


// jQuery start 

// $(document).ready(function(){

//     $(".accordions .accordiondetails>div").on("click", function(){        
//         $(this).parent().removeClass('active') 
//     .addClass ('active')
//     .siblings ()
//     .removeClass('active') 

//       });

// })

// jQuery end 

// start Count

    let data = document.querySelectorAll(".count div .NUM")
    let facts = document.querySelector(".facts")
    let start = false

function startCount(el){
    let num = el.dataset.number    
    let Count = setInterval(()=>{
        el.textContent++
        if(el.textContent == num){
            clearInterval(Count)
        }
    },2500 / num )
}


window.onscroll = function(){
if(window.scrollY >= (facts.offsetTop)){
    if(!start){
        console.log("aref")
        data.forEach((ele)=>{startCount(ele)})
    }
    start = true
}
}




// $(function () {


//     var ourCountup = setInterval(function AAA() { 


//             let counter =  $(".count div .NUM ").attr("data-number")
//             counter = parseInt(counter) 
            
            
//             let countertext = $(".count div .NUM").html() 
//             countertext = parseInt(countertext)

//         if (counter -1 >= countertext ) { 
            
//             $(".count div .NUM").html(countertext + 1)

//         } else {    
//             clearInterval(ourCountup)
//         }

//    }, 10 );

// });

let preventDefault = document.querySelector("#lishow .preventDefault")
preventDefault.addEventListener("click",function(e){
    e.preventDefault()
})

// let lishow = document.querySelector("#lishow")

// let deepli = document.querySelector(".NAV #lishow ul")
//  console.log(deepli)

//     lishow.addEventListener("click",function(){

//         deepli.classList.toggle("active")

//     })

    // jQuery start 

    $(function(){
        $("#lishow").on("click",function(){
            $(".NAV #lishow ul").toggleClass("active")
        })
    })
// jQuery end 
