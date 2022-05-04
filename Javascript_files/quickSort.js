async function partition(ele, l, r){
    console.log('In partitionLomuto()');
    let i = l - 1;
    ele[r].style.background = 'red';
    for(let j = l; j <= r - 1; j++){
        ele[j].style.background = 'yellow';
        await wait(delayTime);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            i++;
            swap(ele[i], ele[j]);
            ele[i].style.background = 'orange';
            if(i != j) ele[j].style.background = 'orange';
            await wait(delayTime);
        }
        else{
            ele[j].style.background = 'pink';
        }
    }
    i++; 
    await wait(delayTime);
    swap(ele[i], ele[r]); 
    ele[r].style.background = 'pink';
    ele[i].style.background = 'green';

    await wait(delayTime);
    
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'green')
            ele[k].style.background = 'cyan';
    }
    return i;
}



async function quickSort(ele, l, r){
    console.log('In quickSort()', `l=${l} r=${r}`, typeof(l), typeof(r));
    if(l < r){
        let pivot_index = await partition(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}

const quickSortButton = document.querySelector(".quickSort");
quickSortButton.addEventListener('click',async function(){
    console.log("quick sort button clicked");
    let bars = document.querySelectorAll(".bar");
    let l = 0;
    let r = parseInt(bars.length)-1;
    disableAllSortingButtons();
    disableArraySizeChanger();
    // disableNewArraybutton();
    await quickSort(bars,l,r);
    enableAllSortingButtons();
    enableArraySizeChanger();
    enableNewArrayButton();
});