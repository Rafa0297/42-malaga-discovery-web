const balloon = document.getElementById('balloon');

let widthSize = 200;
let heightSize = 200;
const maxSize = 420;

balloon.addEventListener('click', changeColor);

balloon.addEventListener('mouseleave', reduceSize);


let index = 0;

function changeColor() {
    const color = ['green', 'blue', 'red'];
    
    widthSize = widthSize + 10
    heightSize += 10
    balloon.style.width = widthSize + 'px';
    balloon.style.height = heightSize + 'px';
    balloon.style.backgroundColor = color[index];
    
    index++

    if (index === 3) {
        index = 0
    } 

    if (widthSize > maxSize) {
        widthSize = 200;
        heightSize = 200
    }
}

function reduceSize() {
    const color = ['red', 'blue', 'green'];
    widthSize -= 10
    heightSize -= 10
    balloon.style.width = widthSize + 'px';
    balloon.style.height = heightSize + 'px';
    balloon.style.backgroundColor = color[index];
    index++;

    if(index === 3){
        index = 0
    }

    if (widthSize <= 200) {
        widthSize = 200;
        heightSize = 200;
        index = 0;
    }
}
