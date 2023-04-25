var parts = document.querySelectorAll(".worm-part")

var i = 0
setInterval(() => {
    if (i<parts.length){
        parts.forEach(elements => {
            elements.classList.remove("worm-up")
        })
        parts[i].classList.add("worm-up")
        i++
    }
    else {
        parts.forEach(elements => {
            elements.classList.remove("worm-up")
        })
        i = 0
    }
}, 200);