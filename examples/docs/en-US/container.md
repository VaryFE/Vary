## Container
Container components for scaffolding basic structure of the page:

`<el-container>`: wrapper container. When nested with a `<el-header>` or `<el-footer>`, all its child elements will be vertically arranged. Otherwise horizontally.

`<el-header>`: container for headers.

`<el-aside>`: container for side sections (usually a side nav).

`<el-main>`: container for main sections.

`<el-footer>`: container for footers.

:::tip
These components use flex for layout, so please make sure your browser supports it. Besides, `<el-container>`'s direct child elements have to be one or more of the latter four components. And father element of the latter four components must be a `<el-container>`.
:::

### Common layouts

:::demo
```html
<el-container>
  <el-header>Header</el-header>
  <el-main>Main</el-main>
</el-container>

<el-container>
  <el-header>Header</el-header>
  <el-main>Main</el-main>
  <el-footer>Footer</el-footer>
</el-container>

<el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-main>Main</el-main>
</el-container>

<el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>

<el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</el-container>

<el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
  </el-container>
</el-container>

<el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</el-container>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
```
:::

### Container Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| direction | layout direction for child elements | string | horizontal / vertical | vertical when nested with `el-header` or `el-footer`; horizontal otherwise |

### Header Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | height of the header | string | — | 60px |

### Aside Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | width of the side section | string | — | 300px |

### Footer Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | height of the footer | string | — | 60px |