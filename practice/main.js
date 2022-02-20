document.getElementById("loo").addEventListener("mouseenter" , turn);
document.getElementById("loo").addEventListener("mouseout", back)

function turn(){
    // console.log(c);
    var rect = document.getElementById("rec");
    rect.classList.add("red");
    rect.classList.remove("rectangle");
    // rect.style.backgroundColor="#000000";
}

function back(){
    var rect = document.getElementById("rec");
    rect.classList.remove("red");
    rect.classList.add("rectangle");
}

