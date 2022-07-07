function rollDice(){
    let maxNum = Number(document.form1.numDiceFace.value);
    let randomNumber = Math.floor(Math.random() * maxNum) + 1;
    document.form1.total.value = randomNumber;
}