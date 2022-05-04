async function insertionSort() {
    let bars = document.querySelectorAll(".bar");
    for(let i = 1; i < bars.length; i++){
        let index = i;
        await wait(delayTime);
        bars[i].style.background = "red";
        for(let j = i-1; j >= 0; j--){
            if(parseInt(bars[index].style.height) < parseInt(bars[j].style.height)){
                await wait(delayTime);
                bars[index].style.background = "#e0a5e7";
                bars[j].style.background = "red"; 
                swap(bars[index],bars[j]);
                index = j;
            }
            else {
                break;
            }
        }
        await wait(delayTime);
        bars[index].style.background = "yellow";
        await wait(delayTime);
        bars[index].style.background = "#e0a5e7";
    }
    for(let i = 0; i < bars.length; i++){
        await wait(delayTime);
        bars[i].style.background = "#06FF00";
        bars[i].style.border = "2px solid #2FDD92"
    }
}

insertionSortButton = document.querySelector(".insertionSort");
insertionSortButton.addEventListener("click" , async function() {
    console.log("Insertion Sort button Clicked");
    disableAllSortingButtons();
    disableArraySizeChanger();
    // disableNewArraybutton();
    await insertionSort();
    enableAllSortingButtons();
    enableArraySizeChanger();
    enableNewArrayButton();
});