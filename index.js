function toggleMenu() {
    const menu = document.getElementById('logoMenu');
    const backdrop = document.getElementById('backdrop');
    const isVisible = menu.style.display === 'flex';
    menu.style.display = isVisible ? 'none' : 'flex';
    backdrop.style.display = isVisible ? 'none' : 'block';
  }
  
  
    function abrirModal(id) {
      document.getElementById(id).style.display = 'block';
    }
  
    function fecharModal(id) {
      document.getElementById(id).style.display = 'none';
    }
  
    function abrirResumoProjeto(texto) {
      document.getElementById('resumoProjeto').textContent = texto;
      abrirModal('modalProjeto');
    }
    
// Galeria de imagens e vídeos
const galeriaItens = [
    { type: 'image', src: 'portfolio/img/proj/1.jpg' },
    { type: 'image', src: 'portfolio/img/proj/2.jpg' },
    { type: 'image', src: 'portfolio/img/proj/10.jpg' },
    { type: 'image', src: 'portfolio/img/proj/9.png' },
    { type: 'image', src: 'portfolio/img/proj/3.png' },
    { type: 'image', src: 'portfolio/img/proj/4.png' },
    { type: 'image', src: 'portfolio/img/proj/8.png' },
    { type: 'image', src: 'portfolio/img/proj/7.png' },
    { type: 'image', src: 'portfolio/img/proj/5.jpg' },
    { type: 'image', src: 'portfolio/img/proj/6.png' },
  ];
  
  let itensVisiveis = 9;
  
  function renderGaleria() {
    const container = document.getElementById('gallery');
    container.innerHTML = '';
    galeriaItens.slice(0, itensVisiveis).forEach(item => {
      const el = document.createElement('div');
      el.className = 'gallery-item';
      el.onclick = () => abrirGaleriaModal(item);
      if (item.type === 'image') {
        el.innerHTML = `<img src="${item.src}" alt="Imagem da Galeria">`;
      } else {
        el.innerHTML = `<video src="${item.src}" muted autoplay loop></video>`;
      }
      container.appendChild(el);
    });
  
    const verMaisBtn = document.getElementById('verMaisBtn');
    verMaisBtn.style.display = (itensVisiveis >= galeriaItens.length) ? 'none' : 'block';
  }
  
  function mostrarMais() {
    itensVisiveis = galeriaItens.length;
    renderGaleria();
  }
  
  function abrirGaleriaModal(item) {
    const modal = document.getElementById('galeriaModal');
    const conteudo = document.getElementById('conteudoModal');
    conteudo.innerHTML = item.type === 'image'
      ? `<img src="${item.src}" alt="Imagem Ampliada">`
      : `<video src="${item.src}" controls autoplay></video>`;
    modal.style.display = 'flex';
  }
  
  function fecharGaleriaModal() {
    document.getElementById('galeriaModal').style.display = 'none';
  }
  
  renderGaleria();
  
