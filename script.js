const letters = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H",
    "I", "J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "R", "S", "Ś",
    "T", "U", "W", "Y", "Z", "Ź", "Ż"];

window.onload = init;

password = "tajne haslo";
password = password.toUpperCase();
hiddenPassword = "";
skuchy = 0;

for(i = 0; i < password.length; i++) {
    if(password.charAt(i) == ' ') {
        hiddenPassword = hiddenPassword + " ";
    } else {
        hiddenPassword = hiddenPassword + "-";
    }
}

function init() {
    initLetters();
    document.getElementById("haslo").innerHTML = hiddenPassword;
}

function initLetters() {
    lettersHTML = "";

    for(i = 0; i < letters.length; i++) {
        lettersHTML = lettersHTML + '<div class="letter" onclick="check(' + i + ')" id="l' + i + '">' + letters[i] + '</div>';
    }

    document.getElementById("litery").innerHTML = lettersHTML;
}

function check(letterNumber) {
    letterDivId = "l" + letterNumber;
    document.getElementById(letterDivId).setAttribute( "onClick", ";" );

    letter = letters[letterNumber];
    if(password.includes(letter)) {
        for (i = 0; i < password.length; i++) {
            if(password.charAt(i) == letter) {
                hiddenPassword = hiddenPassword.substring(0, i) + letter + hiddenPassword.substring(i + 1);
            }
        }
        document.getElementById(letterDivId).style.color = "green";
        document.getElementById(letterDivId).style.border = "2px solid green";
        document.getElementById(letterDivId).style.cursor = "auto";
    } else {
        skuchy++;
        document.getElementById("szubienica").innerHTML = '<img src="img/s' + skuchy + '.jpg">';
        document.getElementById(letterDivId).style.color = "red";
        document.getElementById(letterDivId).style.border = "2px solid red";
        document.getElementById(letterDivId).style.cursor = "auto";
    }

    if(hiddenPassword == password) {
        document.getElementById("litery").innerHTML = '<p id="result">Wygrana !!</p>';
    }

    if(skuchy == 9) {
        document.getElementById("litery").innerHTML = '<p id="result">Przegrana !!</p>';
    }

    document.getElementById("haslo").innerHTML = hiddenPassword;
}