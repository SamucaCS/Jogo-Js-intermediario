function sortear() {
        //parseInt ele converte uma string em numero inteiro
        let quantidade = parseInt(document.getElementById('quantidade').value);
        let de = parseInt(document.getElementById('de').value);
        let ate = parseInt(document.getElementById('ate').value);

        let sorteados = [];
        let numero;

        for (let i = 0; i < quantidade; i++) {
                numero = obterNumeroAleatorio(de, ate);
                //includes serve para ver se ja esta incluindo ou não
                while (sorteados.includes(numero)) {
                        numero = obterNumeroAleatorio(de, ate);
                        alert('Tentando obter número novo');
                }

                sorteados.push(numero);
        }

        let resultado = document.getElementById('resultado');
        //resultado.innerHTML altera o conteudo do html do elemento escolhido
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`

        alterarStatus();
}

function obterNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatus() {
        let botao = document.getElementById('btn-reiniciar');
        if (botao.classList.contains('container__botao-desabilitado')) {
                botao.classList.remove('container__botao-desabilitado');
                botao.classList.add('container__botao');
        } else {
                botao.classList.remove('container__botao');
                botao.classList.add('container__botao-desabilitado');
        }
}

function reiniciar() {
        document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        alterarStatus();
}