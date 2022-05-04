function disableAllSortingButtons() {
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
}

function enableAllSortingButtons() {
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
}

function disableArraySizeChanger() {
    document.querySelector("#arraySize").disabled = true;
}

function enableArraySizeChanger() {
    document.querySelector("#arraySize").disabled = false;
}

function disableNewArraybutton() {
    document.querySelector(".newArray").disabled = true;
}

function enableNewArrayButton() {
    document.querySelector(".newArray").disabled = false;
}

let arraySize = document.querySelector("#arraySize"); 

arraySize.addEventListener('input' , function(){
    createNewArray(parseInt(arraySize.value));
});


let delayTime = 260;

let delayElement = document.querySelector("#sortingSpeed"); 


delayElement.addEventListener('input' , function() {
    delayTime = 320 - parseInt(delayElement.value);
});

async function wait(delay) {
    return new Promise(resolve =>{
        setTimeout(()=>{resolve('')} , delay);
    })
}

let array = []

createNewArray();

function createNewArray(numberOfBars = 25) {
    deletePrev();
    array = []
    for(let i = 0; i < numberOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }

    console.log(array);

    const bars = document.querySelector("#bars");

    for(let i = 0; i < numberOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i] * 2}px`;
        bar.style.width = `${700/numberOfBars}px`;
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bar.classList.add("bar");
        bars.appendChild(bar);
    }
}

function deletePrev() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

newArray = document.querySelector(".newArray");
newArray.addEventListener("click" , function() {
    console.log("From newArray " + arraySize.value);
    enableAllSortingButtons();
    enableArraySizeChanger();
    createNewArray(arraySize.value);
});

function swap(element1 , element2) {
    let temp = element1.style.height;
    element1.style.height = element2.style.height;
    element2.style.height = temp;
}
