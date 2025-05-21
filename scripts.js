function trocaImagem(caminho) {
  const imagem = document.getElementById("imagem-copo");
  imagem.src = caminho;
}

function trocarCor(cor) {
  document.querySelector(".circulo").style.background = cor;
  document.querySelector(".caixa-texto span").style.color = cor;
  document.querySelector(".caixa-texto button").style.backgroundColor = cor;
  document.querySelector(".navbar").style.backgroundColor = cor;
  document.querySelector("footer").style.backgroundColor = cor; 
  document.querySelector(".caixa-texto button").onmouseover = function () {
    this.style.backgroundColor = escurecerCor(cor, 20);
  };
  document.querySelector(".caixa-texto button").onmouseout = function () {
    this.style.backgroundColor = cor;
  };

  document.querySelector(".caixa-texto button").onmouseover = function () {
    this.style.backgroundColor = escurecerCor(cor, 20);
  };
  document.querySelector(".caixa-texto button").onmouseout = function () {
    this.style.backgroundColor = cor;
  };
}

function escurecerCor(hex, percent) {
  const num = parseInt(hex.slice(1), 16);
  let r = (num >> 16) - percent;
  let g = ((num >> 8) & 0x00FF) - percent;
  let b = (num & 0x0000FF) - percent;

  r = r < 0 ? 0 : r;
  g = g < 0 ? 0 : g;
  b = b < 0 ? 0 : b;

  return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
