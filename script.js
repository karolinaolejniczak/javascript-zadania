const newElement = document.createElement('p');
newElement.textContent = 'To jest nowy paragraf';
document.body.appendChild(newElement);

//2. Zmiana koloru pierwszego paragrafu
const firstParagraph = document.querySelector('p');
firstParagraph.style.color = 'blue';
