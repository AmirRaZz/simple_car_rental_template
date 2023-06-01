function choose(ev) {
    var current_item =document.querySelector(".c.dot")
    current_item.classList.remove("dot")
    var item =ev.querySelector(".c")
    item.classList.add("dot")
}

function rotate (ev){
    var element=ev.querySelector(".chevron")
    element.classList.toggle("rotate")
    element.style.transition = "all 0.1s"
}

function like(ev){
    var heart = ev.getElementsByClassName("heart")[0]
    var condition = heart.getAttribute("fill")
    if (condition==="currentColor"){
        heart.setAttribute("fill", "none")
        heart.classList.remove("heart-color")
    }else{
        heart.setAttribute("fill", "currentColor");
        heart.classList.add("heart-color")
    }
}