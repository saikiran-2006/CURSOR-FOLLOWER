var main = document.querySelector('#main')

var crsr = document.querySelector('#cursor')

main.addEventListener("mousemove",function(sai){
    crsr.style.left = sai.x+"px"
    crsr.style.top = sai.y+"px"
})
