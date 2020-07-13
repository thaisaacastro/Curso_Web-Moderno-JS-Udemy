function novoElemento(tagName, className) {
  const elem = document.createElement(tagName);
  elem.className = className;
  return elem;
}

function Barreira(reversa = false) {
  this.elemento = novoElemento("div", "barreira"); //instanciar o elemento Barreira

  const borda = novoElemento("div", "borda");
  const corpo = novoElemento("div", "corpo");
  this.elemento.appendChild(reversa ? corpo : borda); // definindo se atende primeiro o corpo ou a borda
  this.elemento.appendChild(reversa ? borda : corpo); // false ou true

  //instanciar a altura das barreiras
  this.setAltura = (altura) => (corpo.style.height = `${altura}px`);
}

const b = new Barreira(true);
b.setAltura(200);
document.querySelector("[wm-flappy]").appendChild(b.elemento);
