import '../styles/accordion.css';

class Accordion {
  constructor(container) {
    this.container = document.querySelector(container);
    this.tabs = this.container.querySelectorAll('.trigger');
  }
  init() {
    this.tabs.forEach(tab => {
      tab.addEventListener('click', e => {
        if(e.target.classList.contains('active')) {
          this.closeAccordion(e);
        } else {
          this.toggleTabs(e);
          this.toggleContent(e);
        }
      })
    })
  }
  toggleTabs(e) {
    this.tabs.forEach(tab => tab.classList.remove('active'));
    e.target.classList.add('active')
  }
  toggleContent(e) {
    this.container.querySelectorAll('.content').forEach(item => {
      item.classList.remove('active');
    })
    const selector = e.target.getAttribute('data-target');
    const content = this.container.querySelector(selector);
    content.classList.add('active');
  }
  closeAccordion(e){
    e.target.classList.remove('active');
    const selector = e.target.getAttribute('data-target');
    const content = this.container.querySelector(selector);
    content.classList.remove('active');
  }
}

export { Accordion }