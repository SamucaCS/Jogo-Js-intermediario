function alterarStatus(id) {
        let gameClicado = document.getElementById(`game-${id}`);
        let imagem = gameClicado.querySelector('.dashboard__item__img');
        let botao = gameClicado.querySelector('.dashboard__item__button');

        if (imagem.classList.contains('dashboard__item__img--rented')) {
                if (confirm('Deseja realmente devolver este jogo?')) {
                        imagem.classList.remove('dashboard__item__img--rented');
                        botao.classList.remove('dashboard__item__button--return');
                        botao.textContent = 'Alugar';
                }
        } else {
                imagem.classList.add('dashboard__item__img--rented');
                botao.classList.add('dashboard__item__button--return');
                botao.textContent = 'Devolver';
        }
}

function jogosAlugados() {
        let jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented');
        console.log(`Número de jogos alugados: ${jogosAlugados.length}`);
}

function palindrome(word) {
        let reversedWord = word.split('').reverse().join('');
        return word === reversedWord;
}

function NumerosSorteados(num1, num2, num3) {
        const numeros = [num1, num2, num3];
        numeros.sort((a, b) => a - b);
        console.log(`Números ordenados: ${numeros}`);
}

