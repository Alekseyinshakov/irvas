const modals = () => {
  let wasShow = false;

  function modal(trigger, mod) {
    const triggerBtn = document.querySelectorAll(trigger);
    const modalWindow = document.querySelector(mod);
    const closeBtns = document.querySelectorAll('.popup_close')


    triggerBtn.forEach(elem => {
      elem.addEventListener('click', (e) => {
        e.preventDefault()
        openModal()
      })
    })



    modalWindow.addEventListener('click', (e) => {
      if (e.target === modalWindow) {
        closeModal();
      }
    })

    closeBtns.forEach(elem => {
      elem.addEventListener('click', () => {
        closeModal()
      })
    })

    function openModal() {
      modalWindow.style.display = 'block';
      document.body.classList.add('modal-open');
      wasShow = true;
    };

    function closeModal() {
      modalWindow.style.display = '';
      document.body.classList.remove('modal-open')
    };

  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      if (!wasShow) {
        document.querySelector(selector).style.display = 'block';
        document.body.classList.add('modal-open');
      }
    }, time);
  }

  modal('.popup_engineer_btn', '.popup_engineer');
  modal('.phone_link', '.popup');
  showModalByTime('.popup', 500000)
}

export default modals;