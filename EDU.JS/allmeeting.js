











let filtersdiv = document.querySelectorAll(".MEETING .filters div")
console.log(filtersdiv)
let meetingitem = document.querySelectorAll(".MEETINGlanding .meeting-item")


// filtersdiv.forEach((div)=>{
//     div.addEventListener("click",function(e){
//         filtersdiv.forEach(function(ele){
//             ele.classList.remove("active")
//         })
//         this.classList.add("active")        
//     })
// })

        // $(this).addClass ('active').siblings ().removeClass('active') 

$(function(){
    $(".MEETING .filters div").on("click",function(){
        $(".MEETING .filters div").siblings ().removeClass('active') 
        this.classList.add("active")
    })
})

filtersdiv.forEach((div)=>{
    div.addEventListener("click",function(e){
        meetingitem.forEach(function(ele){
            ele.classList.remove("active")

        })
            document.querySelectorAll(div.dataset.chosen).forEach(function(ele){
                ele.classList.add("active")
            })

    })
})

$(function(){
    $(".MEETING .filters div").on("click",function(){
        // $(".MEETINGlanding .meeting-item").siblings ().removeClass('active')
        // $(".MEETINGlanding .meeting-item").attr("data-chosen").classList.add("active")
    })
})


