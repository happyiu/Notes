var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    container.innerHTML = count++;
    console.log(this)
    console.log(e)
};

container.onmousemove = getUserAction;


