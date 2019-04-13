
const Components = require('../../components.json');

//vue-cli-service build --target wc --dest lib --name foo-hello packages/**/index.js

Object.keys(Components).forEach(key => {
    console.log(`[build] ${key}`);
    const name = `var-${key}`
    const path = `${Components[key]}`
    exec(`vue-cli-service build --target wc --dest lib --no-clean --name ${name} ${path}`);
});

function exec(cmd) {
    return require('child_process').execSync(cmd).toString().trim();
}