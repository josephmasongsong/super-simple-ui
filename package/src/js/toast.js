import '../styles/toast.css';

class Toast {
  constructor(message, options = {}){
    this.message = message;
    this.options = options;
    this.trigger = document.getElementById('toast-trigger');
    this.toast = document.createElement('div');
  }
  init(){
    const { position, timeout, style } = this.options;
    const positions = position.split(" ");

    this.toast.classList.add('toast', style, ...positions);
    document.querySelector('body').appendChild(this.toast);

    this.trigger.addEventListener('click', () => {
      this.toast.textContent = this.message;
      this.toast.classList.add('active');
      setTimeout(() => {
        this.toast.classList.remove('active');
      }, timeout)
    })
  }
  show(){
    this.toast.textContent = this.message;
    this.toast.classList.add('active');
    setTimeout(() => {
      this.toast.classList.remove('active');
    }, this.options.timeout);
  }
}

export { Toast }