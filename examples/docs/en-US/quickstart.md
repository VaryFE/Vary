## Quick start

This part walks you through the process of using Var in a webpack project.

<!-- ### Use vue-cli@3

We provide an [Var plugin](https://gitee.com/VarFE/vue-cli-plugin-element) for vue-cli@3, which you can use to quickly build an Var-based project.

### Use Starter Kit

We provide a general [project template](https://gitee.com/VarFE/Var-starter) for you. For Laravel users, we also have a [template](https://gitee.com/VarFE/Var-in-laravel-starter). You can download and use them directly.

If you prefer not to use them, please read the following. -->

### Import Var

You can import Var entirely, or just import what you need. Let's start with fully import.

#### Fully import

In main.js:

```javascript
import Vue from 'vue';
import VarUI from 'var-ui';
import 'var-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(VarUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

The above imports Var entirely. Note that CSS file needs to be imported separately.

#### On demand

With the help of [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component), we can import components we actually need, making the project smaller than otherwise.

First, install babel-plugin-component:

```bash
npm install babel-plugin-component -D
```

Then edit .babelrc:

```json
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "var-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

Next, if you need Button and Select, edit main.js:

```javascript
import Vue from 'vue';
import { Button, Select } from 'var-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* or
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

Full example (Component list reference [components.json](https://gitee.com/VarFE/var/blob/master/components.json))

```javascript
import Vue from 'vue';
import {
  Button,
  ButtonGroup,  
  Icon,
  Row,
  Col,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'var-ui';

Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
```

### Global config

When importing Var, you can define a global config object. For now this object has two properties: `size` and `zIndex`. The property `size` sets the default size for all components and the property `zIndex` sets the initial z-index (default: 2000) for modal boxes:

Fully import Var

```js
import Vue from 'vue';
import Var from 'var-ui';
Vue.use(Var, { size: 'small', zIndex: 3000 });
```

Partial import Var：

```js
import Vue from 'vue';
import { Button } from 'var-ui';

Vue.prototype.$VARUI = { size: 'small', zIndex: 3000 };
Vue.use(Button);
```

With the above config, the default size of all components that have size attribute will be 'small', and the initial z-index of modal boxes is 3000.

### Start coding

Now you have implemented Vue and Var to your project, and it's time to write your code. Please refer to each component's documentation to learn how to use them.
<!-- 
### Use Nuxt.js

We can also start a project using [Nuxt.js](https://nuxtjs.org/):

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&previewSize=0&attributionHidden=true" alt="nuxt-with-element on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div> -->
