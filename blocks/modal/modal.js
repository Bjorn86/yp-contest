(function() {
  const modal = document.querySelector('.overlay');
  const closeButton = document.querySelector('.modal__close');
  const modalTriggers = document.querySelectorAll('[data-modal]');
  const openModal = function() {
    modal.classList.add('overlay_active')
  }
  const closeModal = function() {
    modal.classList.remove('overlay_active')
  }
  modalTriggers.forEach(function(item) {
    item.addEventListener('click', openModal)
  })
  closeButton.addEventListener('click', closeModal)
})();
