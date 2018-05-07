/**
 * Populate sidebar menu with links when nav button is clicked
 * @param {Element} - Sidebar nav button
 */
function setContent(el) {
  document.querySelectorAll('.button').forEach(button => {
    button.className = 'button';
  });
  document.querySelectorAll('.box').forEach(box => {
    box.style.display = 'none';
  });
  el.className = `${el.className} active`;
  document.querySelector(el.dataset.rel).style.display = '';
}

/**
 * Set start page background
 */
function changeBg() {
  const n = new Date().getHours();
  const styles = {
    picture: '',
    color1: '',
    color2: '',
    message: '',
  };
  if (n >= 12 && n <= 17) {
    styles.picture = "url('background/midi.jpg')";
    styles.color1 = '#999';
    styles.color2 = '#272727';
    styles.message = '';
  } else if (n >= 0 && n <= 11) {
    styles.picture = "url('background/matin.jpg')";
    styles.color1 = '#272727';
    styles.color2 = '#ddd';
    styles.message = '';
  } else if (n >= 18 && n <= 24) {
    styles.picture = "url('background/nuit.jpg')";
    styles.color1 = '#fafafa';
    styles.color2 = '#121212';
    styles.message = '';
  }
  document.querySelector('#container').style.backgroundImage = styles.picture;
  document.querySelector('#border').style.background = styles.color2;
  document.querySelector('#box1').style.color = styles.color1;
  document.querySelector('#box2').style.color = styles.color1;
  document.querySelector('#box3').style.color = styles.color1;
  document.querySelector('#box4').style.color = styles.color1;
  document.querySelector('#first-btn').style.color = styles.color1;
  document.querySelector('#second-btn').style.color = styles.color1;
  document.querySelector('#third-btn').style.color = styles.color1;
  document.querySelector('#fourth-btn').style.color = styles.color1;
  document.querySelector('#message').style.color = styles.color1
  document.querySelector('#message').style.textShadow = `3px 3px ${
    styles.color2
  }`;
  document.querySelector('#message').innerHTML = styles.message;
}

document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    setContent(e.currentTarget);
  });
});

const activeButton = document.querySelector('.button.active');
activeButton && setContent(activeButton);

changeBg();
