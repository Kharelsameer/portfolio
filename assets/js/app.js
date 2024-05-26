function hideOverlay (){
console.log('Closing Overlay')
document.querySelector('.transparent-overlay').classList.add('hide-overlay')
}

document.querySelector('.cross-btn').addEventListener('click', hideOverlay)