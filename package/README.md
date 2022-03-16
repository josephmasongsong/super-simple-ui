# How To Use
The library is *super simple* (see what I did there?) and is limited in style and options. Below you can find the required markup and Javascript needed to use each component. To customize the styles simply override with your own classes.
## Accordion
### Markup
```html
<div id="accordion">
  <div>
    <div data-target="#tab1" class="trigger">Tab 1</div>
    <div id="tab1" class="content">
      <!-- tab 1 content -->
    </div>
  </div>
  <div>
    <div data-target="#tab2" class="trigger">Tab 2</div>
    <div id="tab2" class="content">
      <!-- tab 2 content -->
    </div>
  </div>
  <div>
    <div data-target="#tab3" class="trigger">Tab 3</div>
    <div id="tab3" class="content">
      <!-- tab 3 content -->
    </div>
  </div>
</div>
```
### Javascript
```js
const accordion = new Accordion('#accordion');
accordion.init();
```
## Popup
### Markup
```html
<div id="popup-wrapper">
  <div id="popup">
    <div id="popup-close">x</div>
    <div>
      <!-- popup content -->
    </div>
  </div>
</div>

<a href="#/" id="popup-open">Click me</a>
```
### Javascript
```js
const options = {
  maxWidth: '600px',
  opacity: '0.85'
}

const popup = new Popup('#popup-wrapper', options);
popup.init();
```
## Tabs
### Markup
```html
<div class="tabs">
  <ul>
    <li class="trigger active" data-target="#tab1">Tab 1</li>
    <li class="trigger" data-target="#tab2">Tab 2</li>
    <li class="trigger" data-target="#tab3">Tab 3</li>
  </ul>
  <div id="tab1" class="content active">
    <!-- tab 1 content -->
  </div>
  <div id="tab2" class="content">
    <!-- tab 2 content -->
  </div>
  <div id="tab3" class="content">
    <!-- tab 3 content -->
  </div>
</div>
```
### Javascript
Like the Accordion component, Tabs does not accept an options argument.
```js
const tabs = new Tabs('.tabs');
tabs.init();
```
## Toast
### Markup
```html
<a href="#/" id="toast-trigger">Click me</a>
```
### Javascript
Toast requires both a message and options arguments.
```js
const message = "Download Super Simple UI Components on NPM!";

const options = {
  style: 'success',
  position: 'top center',
  timeout: 4000
}

const toast = new Toast(message, options);
toast.init();
```
## Tooltips
### Markup
```html
<span class="tooltip" data-message="This is a tooltip!">What's a tooltip?</span>
```
### Javascript
```js
const tooltip = new Tooltip ('.tooltip', { position: 'right' });
tooltip.init();
```