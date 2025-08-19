// Functions - são apenas acessíveis dentro do seu escopo

// function
function message() {
    // escopo da function
    console.log("Hello, World!");
}

// chmando a function
message();
message();
message();

// Parâmentros é a variável (escopo da função) que irá
// receber um valor em uma função.
// Argumentos: é o valor que é passado para a função



// FUNCTION LOCAL 
// A function recebe o parâmetro username
// function - message2
// parâmetro - username
function message2(username) {
    console.log("Olá", username)
}

// argumento da função - "João"
// argumento da função - "Maria"
message2("João");
message2("Maria");



// function global 
let username = "João";
let age = 30;
function message3() {
    console.log("Olá", username, "Você tem", age, "Anos")
}

message3();





// Function somando
function sum(a, b) {
    console.log(a + b);
}

sum(10, 20);
sum(5, 15);
sum(100, 200);

// A ordem importa na função
// Definindo um valor (argumento) padrão
function joinText(text1, text2, text3) {
    console.log(text1, text2, text3);
}

joinText("Rodrigo", "Silva", "Junior");
joinText("Junior", "Silva", "Rodrigo");



function sum (c, d) {
    let result = c + d;

    // retornando o resultado para quem chamou a function
    return result;
}

// Recebendo o resultado da função retornada
let result1 = sum(10, 20);
console.log(result1);

// pode usar de forma mais poratica 
console.log(sum(5, 15));


// Usando a function mesmo antes dela está sendo declarada
showMessage("Olá, Mundo!");


// Escopo da function
function showMessage(mensagem){
    console.log(mensagem);
    innerFunction();


    function innerFunction() {
        console.log("------Esta é uma função interna-------");
    }
}

// chmando a function
showMessage("OLÁ, TUDO BEM?")

