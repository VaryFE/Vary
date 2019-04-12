'use strict';

console.log();
process.on('exit', () => {
  console.log();
});

if (!process.argv[2]) {
  console.error('[组件名]必填 - Please enter the remove component name');
  process.exit(1);
}

if (!process.argv[3]) {
  console.error('[分组名]必填 - Please enter group name');
  process.exit(1);
}

const path = require('path');
const fs = require('fs');
const fileSave = require('file-save');
const componentname = process.argv[2];
const groupName = process.argv[3];
const rootPath = path.resolve(__dirname, '../../');

const Files = [
  {
    filename: path.join(rootPath, 'packages', `${componentname}/index.ts`)
  },
  {
    filename: path.join(rootPath, 'packages', `${componentname}/src/main.vue`)
  },
  {
    filename: path.join(rootPath, 'examples/docs/zh-CN', `${componentname}.md`)
  },
  {
    filename: path.join(rootPath, 'examples/docs/en-US', `${componentname}.md`)
  },
  {
    filename: path.join(rootPath, 'tests/unit/specs', `${componentname}.spec.ts`)
  },
  {
    filename: path.join(rootPath, 'packages/theme-chalk/src', `${componentname}.scss`)
  },
  {
    filename: path.join(rootPath, 'examples/demo-styles', `${componentname}.scss`)
  },
  {
    filename: path.join(rootPath, 'types', `${componentname}.d.ts`)
  }
];

function deleteFolder(path) {
  var files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(function(file, index) {
      var curPath = path + '/' + file;
      if (fs.statSync(curPath).isDirectory()) { // recurse
        deleteFolder(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}

console.error('Delete ' + `${componentname}` + ' ....');

// 删除 package
Files.forEach(file => {
  if (fs.existsSync(file.filename)) {
    fs.unlinkSync(file.filename);
    console.log(file.filename);
  }
});

deleteFolder(path.join(rootPath, 'packages', `${componentname}`));

// 更新 components.json
const componentsFile = require(path.join(rootPath, 'components.json'));
if (componentsFile[componentname]) {
  componentsFile[componentname] = '';
  fileSave(path.join(rootPath, 'components.json'))
    .write(JSON.stringify(componentsFile, null, '  '), 'utf8')
    .end('\n');
}

// 更新 nav.config.json
const navConfigFile = require(path.join(rootPath, 'examples/nav.config.json'));

Object.keys(navConfigFile).forEach(lang => {
  let groups = navConfigFile[lang][2].groups;
  groups.forEach((e, i) => {
    if (e.groupName === groupName) {
      let temp = [];
      e.list.forEach((c, j) => {
        if (c.path !== `/${componentname}`) {
          temp.push(c);
        }
      });
      e.list = temp;
    }
  });
});

fileSave(path.join(rootPath, 'examples/nav.config.json'))
  .write(JSON.stringify(navConfigFile, null, '  '), 'utf8')
  .end('\n');

console.log('DONE!');
