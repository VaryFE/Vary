console.log();
process.on('exit', () => {
  console.log();
});

if (!process.argv[2]) {
  console.error('[组件名]必填 - Please enter new component name');
  process.exit(1);
}

import fs from 'fs'
const path = require('path');
const fileSave = require('file-save');
const uppercamelcase = require('uppercamelcase');
const componentname = process.argv[2];
const chineseName = process.argv[3] || componentname;
const groupName = process.argv[4] || 'Other'
const ComponentName = uppercamelcase(componentname);
const RootPath = path.resolve(__dirname, '../../');
const PackagePath = path.resolve(RootPath, 'packages', componentname);

const Files = [
  {
    filename: path.join(PackagePath, 'index.ts'),
    content: `import ${ComponentName} from './src/main';
/* istanbul ignore next */
${ComponentName}.install = function(Vue) {
  Vue.component(${ComponentName}.name, ${ComponentName});
};
export default ${ComponentName};`
  },
  {
    filename: path.join(PackagePath, 'src/main.vue'),
    content: `<template>
  <div class="el-${componentname}"></div>
</template>
<script lang='ts'>
export default {
  name: 'El${ComponentName}'
};
</script>`
  },
  {
    filename: path.join(RootPath, 'examples/docs/zh-CN', `${componentname}.md`),
    content: `## ${ComponentName} ${chineseName}`
  },
  {
    filename: path.join(RootPath, 'examples/docs/en-US', `${componentname}.md`),
    content: `## ${ComponentName}`
  },
  {
    filename: path.join(RootPath, 'tests/unit/specs', `${componentname}.spec.ts`),
    content: `import { expect } from "chai";
import { shallowMount } from "@vue/test-utils"
import ${ComponentName} from 'packages/${componentname}';

describe('${ComponentName}', () => {
});
`
  },
  {
    filename: path.join(RootPath, 'packages/theme-chalk/src', `${componentname}.scss`),
    content: `@import "mixins/mixins";
@import "common/var";
@include b(${componentname}) {
}`
  }
];

// 添加到 components.json
const componentsFile = require(path.join(RootPath, 'components.json'));
if (componentsFile[componentname]) {
  console.error(`${componentname} 已存在.`);
  process.exit(1);
}

componentsFile[componentname] = `./packages/${componentname}/index.ts`;
fileSave(path.join(RootPath, 'components.json'))
  .write(JSON.stringify(componentsFile, null, '  '), 'utf8')
  .end('\n');

// 创建 package
Files.forEach(file => {
  fileSave(path.join(file.filename))
    .write(file.content, 'utf8')
    .end('\n');
});

// 添加到 nav.config.json
const navConfigFile = require(path.join(RootPath, 'examples/nav.config.json'));

// Object.keys(navConfigFile).forEach(lang => {
//   let groups = navConfigFile[lang][4].groups;
//   groups[groups.length - 1].list.push({
//     path: `/${componentname}`,
//     title: lang === 'zh-CN' && componentname !== chineseName
//       ? `${ComponentName} ${chineseName}`
//       : ComponentName
//   });
// });

// fileSave(path.join(__dirname, '../../examples/nav.config.json'))
//   .write(JSON.stringify(navConfigFile, null, '  '), 'utf8')
//   .end('\n');

console.log('DONE!');