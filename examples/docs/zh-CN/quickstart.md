## 快速上手

本节将介绍如何在项目中使用 Var。

<!-- ### 使用 vue-cli@3

我们为新版的 vue-cli 准备了相应的 [Var 插件](https://gitee.com/VarFE/vue-cli-plugin-element)，你可以用它们快速地搭建一个基于 Var 的项目。

### 使用 Starter Kit

我们提供了通用的[项目模板](https://gitee.com/VarFE/Var-starter)，你可以直接使用。对于 Laravel 用户，我们也准备了相应的[模板](https://gitee.com/VarFE/Var-in-laravel-starter)，同样可以直接下载使用。

如果不希望使用我们提供的模板，请继续阅读。 -->

### 引入 Var

你可以引入整个 Var，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Var。

#### 完整引入

在 main.js 中写入以下内容：

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

以上代码便完成了 Var 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

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

接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import { Button, Select } from 'var-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

完整组件列表和引入方式（完整组件列表以 [components.json](https://gitee.com/VarFE/var/blob/master/components.json) 为准）

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

### 全局配置

在引入 Var 时，可以传入一个全局配置对象。该对象目前支持 `size` 与 `zIndex` 字段。`size` 用于改变组件的默认尺寸，`zIndex` 设置弹框的初始 z-index（默认值：2000）。按照引入 Var 的方式，具体操作如下：

完整引入 Var：

```js
import Vue from 'vue';
import Var from 'var-ui';
Vue.use(Var, { size: 'small', zIndex: 3000 });
```

按需引入 Var：

```js
import Vue from 'vue';
import { Button } from 'var-ui';

Vue.prototype.$VARUI = { size: 'small', zIndex: 3000 };
Vue.use(Button);
```

按照以上设置，项目中所有拥有 `size` 属性的组件的默认尺寸均为 'small'，弹框的初始 z-index 为 3000。

### 开始使用

至此，一个基于 Vue 和 Var 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。

<!-- ### 使用 Nuxt.js

我们还可以使用 [Nuxt.js](https://nuxtjs.org)：

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&previewSize=0&attributionHidden=true" alt="nuxt-with-element on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div> -->

