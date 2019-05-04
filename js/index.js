// Your code goes here

//NavBar prevent default
const navBar = document.querySelectorAll('a');
console.log(navBar);

navBar.forEach(function(i){
    i.addEventListener('click', function(e){
        e.preventDefault();
        console.log(`${e} prevented.`);
    })
})

//MouseOver
const navHeader = document.querySelector('.nav-container');
//console.log(navHeader);

navHeader.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'red';
    console.log(e);
});


//KeyLogger (keydown)
let keysLogged = '';
document.addEventListener('keydown', function(e) {
    keysLogged += e.key;
    console.log(keysLogged);
});

//wheel zoom
function zoom(e) {
    e.preventDefault();

    if(e.deltaY < 0) {
        scale *= event.deltaY * -1.5;
    } else {
        scale /= event.deltaY * 1.5;
    }

    scale = Math.min(Math.max(.125, scale), 2);

    headerImg.style.transform = `scale(${scale})`;
}

let scale = 1;
const headerImg = document.querySelector('header img');
headerImg.onwheel = zoom;

//Drag/Drop

//Load

//Focus

//Resize

//Scroll

//Select

//DblClick

//Prevent Propagation