const word = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", countVowel);

function countVowel() {
    let vowelCount = 0;
    let wordValue = word.nodeValue.toLowerCase();

    for (let i = 0; i < wordValue.length; i++) {
        let letter = wordVale[i];
        if (letter.match(/([a,e,i,o,u])/)) {
            vowelCount++;
        }
    }
}