// Callback Function - é uma função passada para outra
// função como um argumento

function execute(taskName, Callback) {
    console.log(`Executing task: ${taskName}`);
  Callback();
}

function Callback() {
    console.log("Task completed.");
}

// Passando para função
execute("Download do arquivo...", Callback);

// Criando a função no próprio paramentro (função anônima)
execute("Upload do arquivo...", function() {
    console.log("Upload do arquivo concluído.");
});

//Utilizando Arrow Function
execute("Download do arquivo...", () => {
    console.log("Download do arquivo concluído.");
});

// Utilizando so uma linha 
execute("Download do arquivo...", () => console.log("Download do arquivo concluído."));