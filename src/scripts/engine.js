const emojis = ["😊","😊","😜","😜","👺","👺","👻",
    "👻","😼","😼","🤡","🤡","🐼","🐼","🐺","🐺"];
let openCards = [];

let shuffleEmojis = emojis.sort(() => Math.random() > 0.5 ? 2: -1);

for(let i=0; i<emojis.length; i++){
    let boc = document.createElement("div");
    boc.className = "item";
    boc.innerHTML = shuffleEmojis[i];
    boc.onclick = handleClick;
    document.querySelector(".game").appendChild(boc);
}

function handleClick(){
    if(openCards.length < 2){
        this.classList.add("open");
        openCards.push(this);
    }

    if(openCards.length === 2){
        setTimeout(checkMatch, 500);
    }
}

function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("matched");
        openCards[1].classList.add("matched");}
    else{
        openCards[0].classList.remove("open");
        openCards[1].classList.remove("open");}
    openCards = [];
    if(document.querySelectorAll(".matched").length === emojis.length){
        alert("You won!");
    }
}