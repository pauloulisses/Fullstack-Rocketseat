// Função anônima (função que não possui nome)

const showMessage = function() {
    return "Olá, Paulo"
}

console.log(showMessage());


const showMessage2 = function(name,age) {
    return "Olá, " + name + ". Você tem " + age + " anos.";
}

console.log(showMessage2("Paulo", 30));