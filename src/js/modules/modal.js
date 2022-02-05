const modals = () => {
  let wasShow = false;

  function modal(trigger, mod, modClose, closeClickOverlay = true,  isImportant = false) {
    const triggerBtn = document.querySelectorAll(trigger);
    const modalWindow = document.querySelector(mod);
    const closeBtns = document.querySelectorAll(modClose)
    const allModals = document.querySelectorAll('[data-modal]')


    triggerBtn.forEach(elem => {
      elem.addEventListener('click', (e) => {
        e.preventDefault()
        allModals.forEach(item => item.style.display = 'none')
        openModal()
      })
    })



    modalWindow.addEventListener('click', (e) => {
      if (e.target === modalWindow && closeClickOverlay) {
        closeModal();
        allModals.forEach(item => item.style.display = 'none')
      }
    })

    closeBtns.forEach(elem => {
      elem.addEventListener('click', () => {
        closeModal()
        allModals.forEach(item => item.style.display = 'none')
      })
    })

    function openModal() {
      document.body.style.paddingRight = `${calcScroll()}px`
      modalWindow.style.display = 'block';
      document.body.classList.add('modal-open');
      wasShow = true;
      
    };

    function closeModal() {
      modalWindow.style.display = '';
      document.body.classList.remove('modal-open');
      document.body.style.paddingRight = 0;
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

  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50%';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  modal('.popup_engineer_btn', '.popup_engineer', '.popup_close');
  modal('.phone_link', '.popup', '.popup_close');
  modal('.popup_calc_btn', '.popup_calc' , '.popup_calc_close', false);
  modal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false )
  modal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false )
  // showModalByTime('.popup', 60000) 
}

export default modals;