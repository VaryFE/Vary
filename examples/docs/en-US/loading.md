## Loading

Show animation while loading data.
### Full screen loading

Show a full screen animation while loading data.

:::demo When used as a directive, a full screen Loading requires the `fullscreen` modifier, and it will be appended to body. In this case, if you wish to disable scrolling on body, you can add another modifier `lock`. When used as a service, Loading will be full screen by default.

```html
<template>
  <el-button
    type="primary"
    @click="openFullScreen"
    v-loading.fullscreen.lock="fullscreenLoading">
    As a directive
  </el-button>
  <el-button
    type="primary"
    @click="openFullScreen2">
    As a service
  </el-button>
</template>

<script>
  export default {
    data() {
      return {
        fullscreenLoading: false
      }
    },
    methods: {
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      }
    }
  }
</script>
```
:::

### Service
You can also invoke Loading with a service. Import Loading service:
```javascript
import { Loading } from 'var-ui';
```
Invoke it:
```javascript
Loading.service(options);
```
The parameter `options` is the configuration of Loading, and its details can be found in the following table. `LoadingService` returns a Loading instance, and you can close it by invoking its `close` method:
```javascript
let loadingInstance = Loading.service(options);
this.$nextTick(() => { // Loading should be closed asynchronously
  loadingInstance.close();
});
```
Note that in this case the full screen Loading is singleton. If a new full screen Loading is invoked before an existing one is closed, the existing full screen Loading instance will be returned instead of actually creating another Loading instance:
```javascript
let loadingInstance1 = Loading.service({ fullscreen: true });
let loadingInstance2 = Loading.service({ fullscreen: true });
console.log(loadingInstance1 === loadingInstance2); // true
```
Calling the `close` method on any one of them can close this full screen Loading.

If Var is imported entirely, a globally method `$loading` will be registered to Vue.prototype. You can invoke it like this: `this.$loading(options)`, and it also returns a Loading instance.

### Options
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| target | the DOM node Loading needs to cover. Accepts a DOM object or a string. If it's a string, it will be passed to `document.querySelector` to get the corresponding DOM node | object/string | — | document.body |
| body | same as the `body` modifier of `v-loading` | boolean | — | false |
| fullscreen | same as the `fullscreen` modifier of `v-loading` | boolean | — | true |
| lock | same as the `lock` modifier of `v-loading` | boolean | — | false |
| text | loading text that displays under the spinner | string | — | — |
| spinner | class name of the custom spinner | string | — | — |
| background | background color of the mask | string | — | — |
| customClass | custom class name for Loading | string | — | — |