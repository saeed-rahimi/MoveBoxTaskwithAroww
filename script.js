"use strict"; 
let row=1;
let col=4;
const items=document.querySelectorAll(".item")
console.log(items);

function updateRedBox() {
    items.forEach(item => item.classList.remove('bg-red')); 
    console.log(row,col);
    const index = (row - 1)*6  + (col - 1); 
    console.log(row,col);
    items[index].classList.add('bg-red');    
}


document.addEventListener('keydown', (e) => {
console.log(row,col);

    switch (e.key) {
        case 'ArrowUp':
            if (row > 1) row--; 
            break;
        case 'ArrowDown':
            if (row < 6) row++; 
            break;
        case 'ArrowLeft':
            if (col > 1) col--; 
            break;
        case 'ArrowRight':
            if (col <6) col++; 
            break;
    }
    console.log(row,col);
    updateRedBox(); 
});
