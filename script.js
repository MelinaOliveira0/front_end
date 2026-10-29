document.getElementById('meuForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const telefone = document.getElementById('telefone');
  const quantidade = document.getElementById('quantidade');

  if (nome.value.trim() === '') {
    alert('Preencha o nome!');
    nome.focus();
  } else if (email.value.trim() === '') {
    alert('Preencha o e-mail!');
    email.focus();
  } else if (telefone.value.trim() === '') {
    alert('Preencha o telefone!');
    telefone.focus();
  } else if (quantidade.value.trim() === '' || Number(quantidade.value) < 1) {
    alert('Informe uma quantidade válida!');
    quantidade.focus();
  } else {
    window.location.href = 'obrigado.html';
  }
});