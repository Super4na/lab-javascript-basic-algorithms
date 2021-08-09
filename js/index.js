// Iteration 1: Names and Input
const hacker1 = "Ana";
console.log(`The drivers name is ${hacker1}.`); // 
const hacker2 = "Joao";
console.log(`The navigators name is ${hacker2}.`)

// Iteration 2: Conditionals
lh1 = hacker1.length // length hacker 1;
lh2 = hacker2.length // length hacker 2;

if (lh1 > lh2) {
    console.log(`The driver has the longest name, it has ${lh1} characters`);
}
else if ( lh1 < lh2) {
    console.log(`It seems that the navigator has the longest name, it has ${lh2} characters.`)

}
else if (lh1 === lh2) {  //podia ter omitido esta condicao
    console.log(`Wow, you both have equally long names, ${lh1} characters!`)
}

// Iteration 3: Loops
hacker1Cap = hacker1.toUpperCase();

let nameSC = ""; // name spaced capped
for ( i= 0; i < lh1-1; i++) {
    nameSC = nameSC + hacker1Cap[i] + " ";
}
nameSC = nameSC + hacker1Cap[i];
console.log(nameSC);

let nameBack = "";
for (j =lh1 -1; j>=0; j--) {
    nameBack = nameBack + hacker1[j];
}
console.log(nameBack);

if (hacker1 > hacker2) {
    console.log(`The driver's name goes first.`);
}
else if (hacker1<hacker2) {
    console.log(`Yo, the navigator goes first definitely.`);
}
else {
    console.log(`What?! You both have the same name?`);
}