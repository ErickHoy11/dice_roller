const numberOfDice = document.getElementById("number_of_dice");
const rollButton = document.getElementById("roll_button");
const outputText = document.getElementById("output_text");
const outputImages = document.getElementById("output_images");

rollButton.onclick = function(){

    let text = [];
    let images = [];
    
    for(let i = 0; i < Number(numberOfDice.value); i++){
        let rolledNumber = Math.floor(Math.random() * 6) + 1;
        text.push(rolledNumber);
        images.push('<img src="images/dice_'+rolledNumber+'.png" alt="dice value '+rolledNumber+'">');
    }
    
    outputText.innerText = "Dice values: " + text.join(", ");
    outputImages.innerHTML = images.join("");
}