const { switchVersion } = require('./utils');

const version = process.argv[2];
const vueEntry = process.argv[3] || 'vue';

if (version === '2.7') {
  switchVersion(2.7, vueEntry);
  console.log(`[@longmo/demi] 已切换到 Vue 2.7 (entry: "${vueEntry}")`);
} else if (version === '2') {
  console.warn(`[@longmo/demi] Vue 2 不再支持，请升级或安装 2.7+ (entry: "${vueEntry}")`);
  process.exit(1);
} else if (version === '3.0') {
  switchVersion(3, vueEntry);
  console.log(`[@longmo/demi] 已切换到 Vue 3.0 (entry: "${vueEntry}")`);
} else if (version === '3') {
  switchVersion(3.3, vueEntry);
  console.log(`[@longmo/demi] 已切换到 Vue 3.3+ (entry: "${vueEntry}")`);
} else {
  console.warn(`[@longmo/demi] expecting version "2" or "2.7" or "3" but got "${version}"`);
  process.exit(1);
}
