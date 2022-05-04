async function mergeSort(array , left , right) {
    if(left < right) {
        let mid = Math.floor(left + (right - left)/2);
        console.log(left + " " + mid);
        await mergeSort(array , left , mid);
        console.log(mid+1 + " " + right);
        await mergeSort(array , mid + 1 , right);
        await merge(array , left , mid , right);
    }
    else {
        console.log("one element");
        return;
    }
}

async function merge(array , left , mid , right) {
    let size1 = mid - left + 1;
    let size2 = right - mid;
    let leftArray = new Array(size1);
    let rightArray = new Array(size2);
    await wait(delayTime);
    for(let i = 0; i < size1; i++) {
        console.log(array[left + i].style.height + ' at ' + (left+i));
        leftArray[i] = array[i + left].style.height;
        array[i + left].style.background = "red";
    }
    for(let i = 0; i < size2; i++) {
        console.log(array[mid + 1 + i].style.height + ' at ' + (mid + 1 +i));
        rightArray[i] = array[i + mid + 1].style.height;
        array[i + mid + 1].style.background = "brown";
    }
    await wait(delayTime);
    let l = 0 , r = 0 , k = left;
    while(l < size1 && r < size2) {
        await wait(delayTime);
        if(parseInt(leftArray[l]) <= parseInt(rightArray[r])){
            if(size2 + size1 == array.length) {
                array[k].style.background = "#06FF00";
                array[k].style.border = "2px solid #2FDD92"
            }
            else {
                array[k].style.background = "yellow";
            }
            array[k].style.height = leftArray[l];
            l++;
            k++;
        }
        else{
            if(size2 + size1 == array.length) {
                array[k].style.background = "#06FF00";
                array[k].style.border = "2px solid #2FDD92"
            }
            else {
                array[k].style.background = "yellow";
            }
            array[k].style.height = rightArray[r] 
            r++;
            k++;
        }
    }
    while(l < size1){
        await wait(delayTime);
        if(size2 + size1 == array.length) {
            array[k].style.background = "#06FF00";
            array[k].style.border = "2px solid #2FDD92"
        }
        else {
            array[k].style.background = "yellow";
        }
        array[k].style.height = leftArray[l];
        l++;
        k++;
    }
    while(r < size2){
        await wait(delayTime);
        if(size2 + size1 == array.length) {
            array[k].style.background = "#06FF00";
            array[k].style.border = "2px solid #2FDD92"
        }
        else {
            array[k].style.background = "yellow";
        }
        array[k].style.height = rightArray[r];
        r++;
        k++;
    }
}

const mergeSortButton = document.querySelector(".mergeSort");
mergeSortButton.addEventListener('click' , async function(){
    console.log("mergeSort Button Clicked");
    let array = document.querySelectorAll(".bar");
    let l = 0;
    let r = parseInt(array.length) - 1;
    console.log(l+" "+r);
    disableAllSortingButtons();
    disableArraySizeChanger();
    // disableNewArraybutton();
    await mergeSort(array , l , r);
    enableAllSortingButtons();
    enableArraySizeChanger();
    enableNewArrayButton();
});