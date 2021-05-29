const messages = [
    "juan",
    "camilo",
    "tatiana",
    "juliana",
    "juana",
    "carolina",
    "natalia"
];
const randomMsg = () =>{
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
};
module.exports = { randomMsg };
