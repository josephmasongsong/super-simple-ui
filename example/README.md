# Super Simple UI Example
## Getting Started
### Using NPM
```bash
# In your project root
npm install super-simple-ui-components
```
```js
/*
 * In your Javascript file, import the CSS and the components you'll need
 * Available components: Accordion, Popup, Tabs, Toast, Tooltip
 */
import 'super-simple-ui-components/dist/bundle.min.css';
import { Accordion } from 'super-simple-ui-components';

const accordion = new Accordion('#accordion');
accordion.init();
```
### Using Script/CDN
```html
<!-- In your project <head> -->
<link href="bundle.min.css" rel="stylesheet">
```
```html
<!-- Before the closing </body> tag -->
<script src="bundle.umd.min.js" ></script>
<script>
  const accordion = new simpleUI.Accordion('#accordion');
  accordion.init();
</script>
```