document.getElementById("changediv").addEventListener("submit", function(event) {
    event.preventDefault();
    let changediv = document.getElementById("divlength").value;
    changediv = Number(changediv);

    console.log(changediv); 
    return changediv;
});


function genContainer(changediv){
    
}

document.addEventListener("DOMContentLoaded", function()
{const container = document.getElementById("container");
    container.style.gridTemplateColumns = `repeat(16), 1fr`
    container.style.gridTemplateRows = `repeat(16), 1fr`
})