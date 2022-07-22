const saudacao = document.querySelector('#saudacao');
const botaoQuiz = document.querySelectorAll('.botao-quiz');
const nomeJogador = sessionStorage.getItem('jogador');
const camada = document.querySelector('.layer');
const modal = document.querySelector('.modal');
const corretas = document.querySelector('#corretas');
const erradas = document.querySelector('#erradas');

let count = 0;
let respostasCorretas = 0;
let respostasErradas = 0;

saudacao.textContent = 'Olá ' + nomeJogador;

botaoQuiz.forEach((element,index) => {

    element.addEventListener('click',function(){

        const resposta = element.dataset.resposta;
        const posicao = index + 1;
        const seletor =  'q'+posicao+'_alt'+resposta
        const elementoCorreto = document.querySelector("label[for="+seletor+"]");
        const fieldset = element.parentNode;
        const inputs = fieldset.querySelectorAll('input');
        const [ userOption ] = [...inputs].filter(input => input.checked);

        if(userOption){

            elementoCorreto.classList.add('active');
            element.classList.add('block');

            if (seletor == userOption.id){
                respostasCorretas++
            }else {
                respostasErradas++ ;
                userOption.nextElementSibling.classList.add('error');
            }

            if (element.classList.contains('block')) count++;

            if (count == 3){
                erradas.textContent = respostasErradas;
                corretas.textContent = respostasCorretas;
                camada.classList.add('active');
                modal.classList.add('active');
            }
        } 
    })
    count = 0;
});

