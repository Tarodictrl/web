function drag(event) {
    event.path[1].style.left = event.pageX + "px";
    event.path[1].style.top = event.pageY + "px";
    event.path[1].style.position = "absolute";
}