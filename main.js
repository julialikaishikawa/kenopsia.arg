const formulario = document.querySelector('.form__container')
const divTexto = document.querySelector('.texto__exibido')

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault()

    let texto = document.getElementById('textoInput')
    let valorTexto = texto.value

    let novaLinha = document.createElement('div')
    divTexto.appendChild(novaLinha)
    novaLinha.classList.add('nova__linha')

    const novoTexto = document.createElement('h1')
    novaLinha.appendChild(novoTexto)
    novoTexto.textContent = 'Prazer, '+ valorTexto + "! Meu nome é Karla Max. Entrarei em detalhes depois, enfim... Preciso da sua ajuda!"
    novoTexto.classList.add('novo__texto')

    const button = document.createElement('button')
    button.id = 'new-page-button'
    button.textContent='AJUDAR'
    button.className='nova__pag'
    novaLinha.appendChild(button)

    const newPageButton = document.getElementById('new-page-button')
    newPageButton.addEventListener('click', (event) => {
    event.preventDefault()
    window.location.replace('http://127.0.0.1:5500/message/message.html')
})
    formulario.reset()
})

