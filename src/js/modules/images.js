const images = () => {
  const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImg = document.createElement('img');

  imgPopup.classList.add('popup');
  workSection.appendChild(imgPopup);
  
  imgPopup.style.justifyContent = "center";
  imgPopup.style.alignItems = "center";
  imgPopup.style.display = "none";
  bigImg.classList.add('adaptive_img')

  imgPopup.appendChild(bigImg);

  workSection.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      bigImg.setAttribute('src', target.parentNode.getAttribute('href'))
    }
    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
    }
  })
}

export default images; 