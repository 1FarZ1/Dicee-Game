let dices= document.getElementsByTagName("img");



function StartGame(){
    let dice1 = dices[0];
    let dice2 = dices[1];
    // get a ranodm number between 1 and 6
    let random1 = Math.floor(Math.random() * 6) + 1 ;
    let random2 = Math.floor(Math.random() * 6) + 1 ;
    dice1.setAttribute('src', 'images/dice' + random1 + '.png');
    dice2.setAttribute('src', 'images/dice' + random2 + '.png');
    const WinString= checkWinner(random1, random2);
    document.querySelector('h1').textContent = WinString;
    
}


function checkWinner(random1, random2){
    if(random1 > random2){
        return 'Player 1 Wins!';
    }else if(random1 < random2){
        return 'Player 2 Wins!';
    }else{
        return 'Draw!';
    }
};

document.getElementsByClassName("btn")[0].addEventListener("click", StartGame);
