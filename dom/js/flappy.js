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

//const b = new Barreira(true);
//b.setAltura(200);
//document.querySelector("[wm-flappy]").appendChild(b.elemento);

function ParDeBarreiras(altura, abertura, x) {
  this.elemento = novoElemento("div", "par-de-barreiras");

  this.superior = new Barreira(true); //barreira reversa, 1 corpo e depois a borda
  this.superior = new Barreira(false);

  this.elemento.appendChild(this.superior.elemento);
  this.elemento.appendChild(this.inferior.elemento);

  this.sortearAbertura = () => {
    const alturaSuperior = Math.random() /*de 0 a 1*/ * (altura - abertura);
    const alturaInferior = altura - abertura - alturaSuperior;
    this.superior.setAltura(alturaSuperior);
    this.inferior.setAltura(alturaInferior);
  };

  this.getX = () => parseInt(this.elemento.style.left.split("px")[0]);
  this.setX = (x) => (this.elemento.style.left = `${x}px`); // passa para o px o x
  this.getLargura = () => this.elemento.clientWidth; //setar a largura

  this.sortearAbertura();
  this.setX(x);
}
//const b = new ParDeBarreiras(700, 200, 400); //altura, abertura e posição X
//document.querySelector("[wm-flappy]").appendChild(b.elemento);

function Barreiras(altura, largura, abertura, espaço, notificarPonto) {
  this.pares = [
    new ParDeBarreiras(altura, abertura, largura),
    new ParDeBarreiras(altura, abertura, largura + espaço),
    new ParDeBarreiras(altura, abertura, largura + espaço * 2),
    new ParDeBarreiras(altura, abertura, largura + espaço * 3),
  ];
  const deslocamento = 3; // função responsável por dar um passo na animação
  this.animar = () => {
    this.pares.forEach((par) => {
      par.setX(par.getX() - deslocamento);

      // quando o elemento sair da área do jogo
      if (par.getX() < -par.getLargura()) {
        par.setX(par.getX() + espaço * this.pares.length); // o x vai para o final
      }
    });
  };
}
