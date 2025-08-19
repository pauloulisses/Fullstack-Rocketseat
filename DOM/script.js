// DOM - Document Object Model
// É a estrutura de objetos que representa a página web
// Permite acessar e manipular elementos HTML e CSS

// Visualizar o conteúdo do documento
console.log(document);

// Obtendo o title da página
console.log(document.title);

// Alterando o title da página
document.title = "Página Inicial";

// Obtendo o novo title da página
console.log(document.title);


// Obtendo o elemento com id "guest-1" (SELETOR ID)
const guest = document.getElementById("guest-1");

// Alterando o conteúdo do elemento
guest.querySelector("span").textContent = "Paulo Silva";


// Mostra as propriedades do objeto.
console.dir(guest);

// Acessando elemento com class "guest" (SELETOR CLASS)
const guests = document.getElementsByClassName("guest");
console.log(guests);

// Exibir o primeiro elemento da lista
console.log(guests.item(0));

// Selecionar lista elementos pela tag
const guestsTag = document.getElementsByTagName("li");
console.log(guestsTag);