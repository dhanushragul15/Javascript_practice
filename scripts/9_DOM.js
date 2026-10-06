// Selection
const divs = document.getElementsByTagName('div');

const squares = document.getElementsByClassName('square');

const gridPlay = document.getElementById('grid-play');

const first_circle = document.querySelector('.circle');

const circles = document.querySelectorAll('.circle');

// first_circle.styles.visibility = 'hidden';
// console.log(first_circle.styles.visibility);

// circles.styles.visibility = 'hidden';

// for(let circle of circles){
//     console.log(circle)
//     circle.style.visibility = 'hidden';
// }

const circle1 = document.querySelector('#c1');
function f1(){
    alert('yahooo');
}
console.log(circle1);
circle1.addEventListener('click', f1);
