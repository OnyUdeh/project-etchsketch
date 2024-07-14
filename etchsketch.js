document.getElementById("changediv").addEventListener("submit", function(event) {
    event.preventDefault();
    let changediv = document.getElementById("divlength").value;
    changediv = Number(changediv);

    console.log(changediv); 
    return changediv;
});


function genContainer(changediv){
    const container = document.getElementById("container");
    container.style.gridTemplateColumns = `repeat(${changediv}), 1fr`
    container.style.gridTemplateColumns = `repeat(${changediv}), 1fr`

}
