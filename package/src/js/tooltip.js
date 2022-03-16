import '../styles/tooltip.css';

class Tooltip {
  constructor(element, options = {}){
    this.element = document.querySelector(element);
    this.message = this.element.getAttribute('data-message');
    this.options = options;
  }
  init(){
    const tip = document.createElement('div');
    const { position } = this.options;
    tip.classList.add('tip', position);
    tip.textContent = this.message;
    this.element.appendChild(tip);
    this.element.addEventListener('mouseenter', () => {
      tip.classList.add('active');
    })
    this.element.addEventListener('mouseleave', () => {
      tip.classList.remove('active');
    })
  }
}

export { Tooltip }