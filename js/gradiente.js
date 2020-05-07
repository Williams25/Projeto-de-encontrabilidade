var gradient = document.querySelector(".content-img");

function onMouseMove(event) {
    gradient.style.backgroundImage = 'radial-gradient(at ' + event.clientX + 'px ' + event.clientY +
     'px, rgba(0, 18, 78, 0.44) 0, rgb(0, 0, 15, 0.100) 45%), url("../img/dfdf.jpg")';
}
document.addEventListener("mousemove", onMouseMove);