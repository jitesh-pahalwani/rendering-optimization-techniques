/* 
The function onSizeInput causes Forced Synchronous Layout (or Layout Thrashing).
In each iteration of the loop, it requests for the dimensions of the UI elements and then 
updates the dimensions. This causes multiple layout measuring and style recalculations.
*/
function onSizeInput(e){
    var allBoxes = document.getElementsByClassName('coloredBox');

    for(i=0;i<allBoxes.length;i++){
        allBoxes[i].style.width = allBoxes[i].offsetWidth * ( 1 + (e.target.value / 100));
        allBoxes[i].style.height = allBoxes[i].offsetHeight * ( 1 + (e.target.value / 100));
    }
}

/*
The function onSizeInputOptimized is a solution to Forced Synchronous Layout.
In the first for loop, all layout measurements are done together and in the second loop
the elements are updated in the UI in one batch. This avoids multiple synchronous calls
to layout measurement and style recalculations.
*/
function onSizeInputOptimized(e){
    const {value} = e.target;
    let dimensionArray = [];
    var allBoxes = document.getElementsByClassName('coloredBox');

    for(i=0;i<allBoxes.length;i++){
        dimensionArray[i] = allBoxes[i].offsetWidth * ( 1 + (value / 100));
    }

    for(i=0;i<allBoxes.length;i++){
        allBoxes[i].style.width = dimensionArray[i]
        allBoxes[i].style.height = dimensionArray[i]
    }
}