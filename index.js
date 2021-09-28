const importLazy = require('import-lazy')(require); // 懒加载模块
const latestVersion = importLazy('latest-version'); // 用于获取最新版本的 npm 包
const semver = importLazy('semver'); // 语义化版本工具

class MyUpdateNotifier {
  constructor(options) {
    this.check(options)
  }
  async check(options) {
    const { name, version } = options;

    if (!name) {
      console.error("未获取到包名");
      return;
    }
    if (!version) {
      console.error("未获取到当前版本");
      return;
    }

    const latest = await latestVersion(name); // 获取到最新版本号
    console.log("最新版本号", latest)
    if (semver.gt(latest, version)) { // 最新版本号是否大于当前版本
      console.log("请更新")
    }
  }
}

module.exports = MyUpdateNotifier;