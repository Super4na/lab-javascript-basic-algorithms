let phraseToCheck = `Was it a car or a cat I saw?`;

phraseToCheck = phraseToCheck.replace(/\s/g, '');
phraseToCheck = phraseToCheck.toLowerCase();
phraseToCheck = phraseToCheck.replace(/[^0-9a-z]/gi, '') //removes underscores too

let lphrase = phraseToCheck.length;
let rightway = ``;
for (i = 0; i< lphrase; i++) {
rightway = rightway + phraseToCheck[i];
}
console.log(rightway);
let backway = ``;
for ( j = lphrase-1; j>= 0; j --) {
backway = backway + phraseToCheck[j];
}
console.log(backway);
if ( rightway === backway) {
    console.log(` ${phraseToCheck} is a Palindrome!`);
}
else {
    console.log(`${phraseToCheck} is not a Palindrome!`);
}
