const{generateUniqueID, addAccount} = require("functions.js");

console.log(addAccount("Alan","Turing","aturing@w3c.com",58));
console.log(addAccount("","Turing","aturing@w3c.com",58));
console.log(addAccount("Alan","","aturing@w3c.com",58));
console.log(addAccount("Alan","Turing","email_sample",58));
console.log(addAccount("Alan","Turing","aturing@w3c.com",16));
console.log(addAccount("Alan","Turing","aturing@w3c.com",));
console.log(addAccount("Tim","Berners-Lee","tim@w3c.com",25));
console.log(addAccount("Ted","Nelson","ted.n@w3c.com",43));