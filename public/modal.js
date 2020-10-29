const iframe = document.querySelector('.iframe');
const cards = document.querySelectorAll('.card');
const iframeModal = document.querySelector('.iframe-modal');
const maxIframe = document.querySelector('.max-iframe');
const footer = document.querySelector('footer');

// adiciona um class em todos os cards
for (let card of cards) {
    card.addEventListener("click", function(){
        const cursoId = card.getAttribute('id')
        iframe.classList.add('active')
        iframe.querySelector('iframe').src =`https://rocketseat.com.br/${cursoId}`
        footer.classList.add('footer-hidden')
    })
}

// maximiza o iframe
document.querySelector('.max-iframe').addEventListener("click", function(){
    iframeModal.classList.add('iframe-modal-max')
    maxIframe.classList.add('max') 
})

// remove o iframe
// impede que o iframe abra maximizado 
document.querySelector('.close-iframe').addEventListener("click", function(){
    iframe.classList.remove('active')
    iframe.querySelector('iframe').src =""
    iframeModal.classList.remove('iframe-modal-max')
    maxIframe.classList.remove('max')
    footer.classList.remove('footer-hidden')
})

