var header = document.getElementById("header")
var btn = document.getElementById("btn")

window.onscroll= function(){
    if(window.scrollY>40){
      header.classList.add("headerFixed")  
      btn.classList.add("show")
    }else{
      header.classList.remove("headerFixed") 
      btn.classList.remove("show")
    }
}
btn.addEventListener("click",function(){
    window.scroll({
        top:0,
    })
})