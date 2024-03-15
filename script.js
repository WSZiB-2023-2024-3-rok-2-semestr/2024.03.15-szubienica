const letters = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H",
    "I", "J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "R", "S", "Ś",
    "T", "U", "W", "Y", "Z", "Ź", "Ż"];

window.onload = initLetters;


function initLetters() {
    lettersHTML = "";

    for(i = 0; i < letters.length; i++) {
        lettersHTML = lettersHTML + '<div class="letter">' + letters[i] + '</div>';
    }

    document.getElementById("litery").innerHTML = lettersHTML;
}