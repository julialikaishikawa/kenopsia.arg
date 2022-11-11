const formulario = document.querySelector('.form__container')
const divTexto = document.querySelector('.texto__exibido')

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault()

    let texto = document.getElementById('textoInput')
    let valorTexto = texto.value

    if (valorTexto === "DEATH") {
        let novaLinha = document.createElement('div')
        divTexto.appendChild(novaLinha)
        novaLinha.classList.add('nova__linha')
    
        const button = document.createElement('button')
        button.id = 'new-page-button'
        button.textContent='Acesso aos arquivos confidenciais'
        button.className='nova__pag'
        novaLinha.appendChild(button)
    
        const newPageButton = document.getElementById('new-page-button')
        newPageButton.addEventListener('click', (event) => {
        event.preventDefault()
        window.location.replace('/topSecret/truth/truth.html')
    })} else {
        let novaLinha = document.createElement('div')
        divTexto.appendChild(novaLinha)
        novaLinha.classList.add('nova__linha')

        const novoTexto = document.createElement('h1')
        novaLinha.appendChild(novoTexto)
        novoTexto.textContent = 'ERRO'
        novoTexto.classList.add('novo__texto')
    }

    formulario.reset()
})