let randomize_array = document.getElementById("randomize_array_btn");
let sort_btn = document.getElementById("sort_btn");
let bars_container = document.getElementById("bars_container");
let minRange = 1;
let maxRange = 20;
let numOfBars = 10;
let unsorted_array = new Array(numOfBars);

function randomNum(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function createRandomArray(){
    for (let i = 0; i < numOfBars; i++) {
        unsorted_array[i] = randomNum(minRange, maxRange);
        
    }
}


document.addEventListener("DOMContentLoaded",function(){
    createRandomArray();
    renderBars(unsorted_array);
});

function renderBars(array){
    for (let i = 0; i < array.length; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = array[i] * 10 + "px";
        //bar.style.backgroundColor = `rgb(${randomNum(0,255)}, ${randomNum(0,255)},${randomNum(0,255)})`;
        bars_container.appendChild(bar);
        
    }

}


