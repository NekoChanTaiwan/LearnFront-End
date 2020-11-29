let drag = (objStr) => {
    let obj = document.getElementById(String(objStr)), offsetLeft, offsetTop;
    obj.onmousedown = (event) => {
        offsetLeft = event.clientX - obj.offsetLeft;
        offsetTop = event.clientY - obj.offsetTop;
        document.onmousemove = (event) => {
            obj.style.left = `${event.clientX - offsetLeft}px`;
            obj.style.top = `${event.clientY - offsetTop}px`;
        };
        document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
        };
        return false;
    };
};

window.onload = () => {
    drag("box1");
    drag("box2")
};