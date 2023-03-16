const fs = require("fs");
const validator = require("validator");
const uuid = require("uuid");

function generateUniqueID(firstName, lastName){
    const letter = firstName.charAt(0).toLowerCase();
    const name = lastName.toLowerCase();
    const uniqueString = uuid.v4().split("-")[0];
    return '${letter}${name}${uniqueString}';
}

function addAccount(){

}