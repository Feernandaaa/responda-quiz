const inicio = document.querySelector('#botao-iniciar');
const nome = document.querySelector('.input-name');

inicio.addEventListener('click',function(e){
    e.preventDefault();
    if (nome.value){
        sessionStorage.setItem('jogador',nome.value);
        location.assign('perguntas-resposta.html');
    }
})

