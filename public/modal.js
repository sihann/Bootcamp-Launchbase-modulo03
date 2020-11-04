const iframe = document.querySelector('.iframe');
const cards = document.querySelectorAll('.card');
const iframeModal = document.querySelector('.iframe-modal');
const maxIframe = document.querySelector('.max-iframe');
const footer = document.querySelector('footer');

// adiciona uma class em todos os cards
for (let card of cards) {
    card.addEventListener("click", function(){
        const cursoId = card.getAttribute('id')
        window.location.href = `/courses/${cursoId}` 
    })
}

