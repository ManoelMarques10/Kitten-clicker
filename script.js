// ===================
// Variáveis do jogo
// ===================

// Armazena a quantidade de dinheiro que o jogador possui.
// O valor inicial é lido diretamente do conteúdo HTML com o ID 'Dinheiro'.
let Dinheiro = parseInt(document.getElementById('Dinheiro').innerHTML)

// Contador de quantos Gatos Joia o jogador possui (inicia em 0)
let GatoJoia = 0

// Contador de quantos Gatos Comendo o jogador possui (inicia em 0)
let GatoComendo = 0


// ===================
// Funções principais
// ===================

/**
 * Atualiza o valor de dinheiro exibido na tela.
 */
function atualizarDinheiro() {
    document.getElementById('Dinheiro').innerHTML = Dinheiro
}

/**
 * Função chamada ao clicar no botão principal.
 * Adiciona 1 unidade de dinheiro e atualiza a exibição.
 */
function clicou() {
    Dinheiro++
    atualizarDinheiro()
}

/**
 * Tenta comprar um Gato Joia (custa 10 de dinheiro).
 * Se o jogador tiver dinheiro suficiente:
 * - Subtrai o valor do dinheiro
 * - Incrementa o contador de Gatos Joia
 * - Atualiza a interface
 * Caso contrário, exibe alerta de erro.
 */
function comprouGatoJoia() {
    if (Dinheiro >= 10) {
        alert('Parabéns, você comprou um Gato Joia!')
        Dinheiro -= 10
        GatoJoia++
        document.getElementById('QntdGatoJoia').innerHTML = 'X' + GatoJoia
        atualizarDinheiro()
    } else {
        alert('Você não tem dinheiro suficiente.')
    }
}

/**
 * Tenta comprar um Gato Comendo (custa 105 de dinheiro).
 * Se o jogador tiver dinheiro suficiente:
 * - Subtrai o valor do dinheiro
 * - Incrementa o contador de Gatos Comendo
 * - Atualiza a interface
 * Caso contrário, exibe alerta de erro.
 */
function comprouGatoComendo() {
    if (Dinheiro >= 105) {
        alert('Parabéns, você comprou um Gato Comendo!')
        Dinheiro -= 105
        GatoComendo++
        // Corrigido: agora mostra corretamente a quantidade de Gato Comendo
        document.getElementById('QntdGatoComendo').innerHTML = 'X' + GatoComendo
        atualizarDinheiro()
    } else {
        alert('Você não tem dinheiro suficiente.')
    }
}


// =============================
// Geradores automáticos de dinheiro
// =============================

// A cada 10 segundos, adiciona 1 de dinheiro por Gato Joia
setInterval(function() {
    Dinheiro += GatoJoia
    atualizarDinheiro()
}, 10000)

// A cada 1 segundo, adiciona 1 de dinheiro por Gato Comendo
setInterval(function() {
    Dinheiro += GatoComendo
    atualizarDinheiro()
}, 1000)


// =============================
// Efeitos visuais nos elementos
// =============================

/**
 * Aumenta o tamanho do elemento em 5%.
 * Pode ser usada com eventos como onmouseover.
 */
function aumentar() {
    const larguraAtual = this.offsetWidth
    const alturaAtual = this.offsetHeight
    this.style.width = (larguraAtual * 1.05) + 'px'
    this.style.height = (alturaAtual * 1.05) + 'px'
}

/**
 * Diminui o tamanho do elemento em 5%.
 * Pode ser usada com eventos como onmouseout.
 */
function diminuir() {
    const larguraAtual = this.offsetWidth
    const alturaAtual = this.offsetHeight
    this.style.width = (larguraAtual * 0.95) + 'px'
    this.style.height = (alturaAtual * 0.95) + 'px'
}


// =============================
// Função de trapaça (cheat/debug)
// =============================

/**
 * Adiciona 10.000 unidades de dinheiro (modo trapaça/debug).
 */
function dinheiroInfinito() {
    Dinheiro += 10000
    atualizarDinheiro()
}
