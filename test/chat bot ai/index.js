const buttondev = document.getElementById("buttondev");
const button = document.getElementById("button");


button.addEventListener("click", () =>{
    console.log("buttom1 complete");
    clickbutton();
})

buttondev.addEventListener("click", () =>{
    clickbuttondev()
})
console.log(button);
function clickbutton(){
    const div = document.createElement("div");
    div.setAttribute("class", "div")
    buttondev.appendChild(div);
    const newbutton = document.createElement("button");
    newbutton.setAttribute("id", "newbutton")
    div.appendChild(newbutton);
    console.log("click complete");

    function clickbuttondev(){
        div.style.backgroundColor = "black";
}
}

