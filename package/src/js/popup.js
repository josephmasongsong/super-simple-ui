import '../styles/popup.css';

class Popup {
  constructor(wrapper, options = {}){
    this.wrapper = document.querySelector(wrapper);
    this.options = options;
    this.popup = document.getElementById('popup');
    this.button = document.getElementById('popup-open');
    this.close = document.getElementById('popup-close');
  }
  init() {
    this.wrapper.style.display = 'none';

    const { maxWidth } = this.options;
    const { opacity } = this.options;

    !maxWidth ? this.popup.style.maxWidth = '320px' : this.popup.style.maxWidth = maxWidth;
    !opacity ? this.wrapper.style.backgroundColor = 'rgba(0,0,0,0.5)' : this.wrapper.style.backgroundColor = `rgba(0,0,0,${opacity})`;

    this.button.addEventListener('click', () => this.wrapper.style.display = 'block');
    this.wrapper.addEventListener('click', () => this.wrapper.style.display = 'none');
    this.popup.addEventListener('click', e => e.stopPropagation());
    this.close.addEventListener('click', () => this.wrapper.style.display = 'none');
  }
}

export { Popup }