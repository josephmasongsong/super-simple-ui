const { Accordion, Popup, Toast, Tooltip, Tabs } = simpleUI;

const accordion = new Accordion('#accordion');
accordion.init();

const options = {
  maxWidth: '600px',
  opacity: '0.85',
};

const popup = new Popup('#popup-wrapper', options);
popup.init();

const message = 'Download Simple UI Kit as package on NPM!';

const toast = new Toast(message, {
  style: 'success',
  position: 'top center',
  timeout: 4000,
});
toast.init();

const tooltip = new Tooltip('.tooltip', { position: 'right' });
tooltip.init();

const tabs = new Tabs('.tabs');
tabs.init();

console.log('this is super simple ui umd');
