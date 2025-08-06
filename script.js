const alimentos = document.querySelectorAll('.alimento');
const zonas = document.querySelectorAll('.dropzone');

alimentos.forEach(alimento => {
  alimento.addEventListener('dragstart', dragStart);
});

zonas.forEach(zona => {
  zona.addEventListener('dragover', dragOver);
  zona.addEventListener('drop', drop);
});

function dragStart(event) {
  event.dataTransfer.setData('alimento-src', event.target.src);
  event.dataTransfer.setData('nivel', event.target.dataset.nivel);
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const alimentoSrc = event.dataTransfer.getData('alimento-src');
  const alimentoNivel = event.dataTransfer.getData('nivel');
  const zonaNivel = event.currentTarget.dataset.nivel;

  if (alimentoNivel === zonaNivel) {
    const img = document.createElement('img');
    img.src = alimentoSrc;
    img.className = 'alimento';
    img.style.width = '60px';
    img.style.margin = '5px';
    event.currentTarget.appendChild(img);
  } else {
    alert('Ops! Esse alimento pertence a outro nível da pirâmide.');
  }
}
