let randomize_array = document.getElementById("randomize_array_btn");
let sort_btn = document.getElementById("sort_btn");
let bars_container = document.getElementById("bars_container");
let minRange = 1;
let maxRange = 100;
let numOfBars = 100;
let heightFactor = 5.5;
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
        bar.style.height = array[i] * heightFactor + "px";
        bar.style.backgroundColor = `rgb(${randomNum(0,255)}, ${randomNum(0,255)},${randomNum(0,255)})`;
        bars_container.appendChild(bar);
        
    }

}


randomize_array.addEventListener("click", function(){
createRandomArray();
bars_container.innerHTML = "";
renderBars(unsorted_array);
});


function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve,ms));
}



 async function bubbleSort(array){
let bars = document.getElementsByClassName("bar");

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length-i-1; j++){
            if(array[j] > array[j+1]){
                for (let k = 0; k < bars.length; k++) {
                    if(k !== j && k !== j +1){
                        //bars[k].style.backgroundColor = Math.floor(Math.random()*16777215).toString(16);
                    }
                    
                }
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                bars[j].style.height = array[j] * heightFactor + "px";
                //bars[j].style.backgroundColor = "lightgreen";
                //bars[j].innerText = array[j];
                bars[j+1].style.height =  array[j+1] * heightFactor + "px";
                //bars[j+1].style.backgroundColor = "lightgreen";
                //bars[j+1].innerText = array[j+1];
                await sleep(10);
            }
        }
        //await sleep(10);
    }
    return array;
}


async function insertionSort(array){
    let bars = document.getElementsByClassName("bar");
    let i, value, index;
  for (i = 0; i < array.length-1; i++) {
    await sleep(10);
    value = array[i];
    index = i;
    while (index >= 0 && array[index - 1] > value) {
        bars[index].style.height = array[index] * heightFactor + "px";
        bars[index+1].style.height =  array[index+1] * heightFactor + "px";
      array[index] = array[index - 1];
      index--;
    }
    array[index] = value;
  }
 
   return array;
}

sort_btn.addEventListener("click", function(){
    let sorted_array = bubbleSort(unsorted_array);
    console.log(sorted_array);
});

insertion_btn.addEventListener("click", function(){
    let sorted_array = insertionSort(unsorted_array);
    console.log(sorted_array);
});