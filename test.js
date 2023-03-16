const{generateUniqueID, addAccount} = require("functions.js");

console.log(addAccount("Alan","Turing","aturing@w3c.com",58)); //valid test
console.log(addAccount("","Turing","aturing@w3c.com",58)); //checks for empty first name
console.log(addAccount("Alan","","aturing@w3c.com",58)); //checks for empty last name
console.log(addAccount("Alan","Turing","email_sample",58)); //checks for invalid email format
console.log(addAccount("Alan","Turing","aturing@w3c.com",16)); //checks for age less than 18
console.log(addAccount("Alan","Turing","aturing@w3c.com",)); //checks for empty age field
console.log(addAccount("Tim","Berners-Lee","tim@w3c.com",25)); //valid test
console.log(addAccount("Ted","Nelson","ted.n@w3c.com",43)); //valid test