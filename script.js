function processInput(){
    let maxNum = Number(document.form1.numDiceFace.value);
    if (Number.isInteger(maxNum) == false){
        throw alert("Please enter an integer")
    }
    else if (maxNum <= 0){
        throw alert("Please enter a integer value greater or equal to 1.")
    }
    else {
        rollDice(maxNum)
    }
    //let randomNumber = Math.floor(Math.random() * maxNum) + 1;
    //document.form1.total.value = randomNumber;
}

function rollDice(maxN){
    let randomNumber = Math.floor(Math.random() * maxN) + 1;
    document.form1.total.value = randomNumber;
    recordResult(randomNumber, maxN);
    return randomNumber;
}


let count = 0;

function recordResult(result, nface){
    let html = '<tr> <td>' + count + " </td> <td>"+ nface + "</td> <td>" + result + "</td>";
    count += 1;
    document.getElementById("tab1").innerHTML += html;
    
}

module.exports = rollDice;