async function selectionSort() {
    let array = document.querySelectorAll(".bar");
    for(let i = 0; i < array.length; i++) {
        await wait(delayTime);
        array[i].style.background = "red";
        let prevIndex = i;
        let minimum = parseInt(array[i].style.height);
        await wait(delayTime);
        for(let j = i+1; j < array.length; j++) {
            array[j].style.background = "blue";
            await wait(delayTime);
            if(minimum > parseInt(array[j].style.height)) {
                minimum = parseInt(array[j].style.height);
                array[j].style.background = "red";
                array[prevIndex].style.background = "#e0a5e7";
                prevIndex = j;
            }
            else {
                array[j].style.background = "#e0a5e7";
            }
        }
        swap(array[i] , array[prevIndex]);
        array[prevIndex].style.background = "#e0a5e7";
        array[i].style.background = "#06FF00";
        array[i].style.border = "2px solid #2FDD92"
    }

}

const selectionSortButton = document.querySelector(".selectionSort");
selectionSortButton.addEventListener("click", async function(){
    console.log("Selection Sort Button Clicked");
    disableAllSortingButtons();
    disableArraySizeChanger();
    // disableNewArraybutton();
    await selectionSort();
    enableAllSortingButtons();
    enableArraySizeChanger();
    enableNewArrayButton();
} );
