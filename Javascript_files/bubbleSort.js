async function BubbleSort() {
    console.log("Inside bs");
    let element = document.querySelectorAll(".bar");
    console.log(element.length);
    for(let i = 0; i < element.length - 1; i++) {
        for(let j = 0; j < element.length - i - 1; j++) {
            console.log("inside loop");
            element[j].style.background = 'blue';
            element[j+1].style.background = 'blue';
            console.log(delayTime);
            await wait(delayTime);
            if(parseInt(element[j].style.height) > parseInt(element[j+1].style.height)) {
                element[j].style.background = '#FF5677';
                element[j+1].style.background = '#FF5677';
                await wait(delayTime);
                swap(element[j] , element[j+1]);
            }
            element[j].style.background = '#e0a5e7';
            element[j+1].style.background = '#e0a5e7';
        }
        element[element.length - 1 - i].style.background = "#06FF00";
        element[element.length - 1 - i].style.border = "2px solid #2FDD92"
    }
    element[0].style.background = "#06FF00";
    element[0].style.border = "2px solid #2FDD92"
}

const bubbleSortButton = document.querySelector(".bubbleSort");
bubbleSortButton.addEventListener('click' ,async function(){
    console.log("bubbleSort clicked");
    disableAllSortingButtons();
    disableArraySizeChanger();
    // disableNewArraybutton();
    await BubbleSort();
    enableAllSortingButtons();
    enableArraySizeChanger();
    enableNewArrayButton();
});

