const fs = require("fs");
const path = require("path");

const meiTuanPngBuff = fs.readFileSync(path.resolve(__dirname, "meituan.png"));

console.log(
  "打印日志看看-Buffer.isBuffer(meiTuanPngBuff):",
  Buffer.isBuffer(meiTuanPngBuff)
);
console.log("打印日志看看-:meiTuanPngBuff.length", meiTuanPngBuff.length);

// 写到另一个文件
fs.writeFileSync(path.resolve(__dirname, "meituan2.png"), meiTuanPngBuff);

