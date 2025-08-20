// Acessa o elemento pelo selector ID
const query = document.querySelector('#query');
console.log(query);

const query2 = document.querySelector('.title');
console.log(query2);

// Retorna todos os elementos encontrados pelo query
const query3 = document.querySelectorAll('h1');
console.log(query3);


// Retorna o texto do primeiro elemento encontrado pelo query
const query4 = document.querySelector('footer p');
console.log(query4.textContent);

query4.textContent = 'Texto alterado pelo JavaScript';

// Retorna o HTML como texto
console.log(query4.innerHTML);

// Retorna o conteúdo visivel e oculto
console.log(query4.textContent);    

// Retorna o conteúdo visivel
console.log(query4.innerText);