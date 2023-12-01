const fs = require("fs");
const path = require("path");

// fs.rmSync("./q", { recursive: true });

/**
 * 获取指定目录下的所有文件的绝对路径
 * @param {} path
 */
const getAbsolutePath = (assignPath) => {
  const isExists = fs.existsSync(assignPath);
  console.log("打印日志看看-isExists:", isExists);
  if (!isExists) {
    return;
  }

  const assignPathState = fs.statSync(assignPath);
  if (assignPathState.isFile()) {
    return;
  }

  const result = [];

  // 获取指定目录下的所有目录和文件
  const dirOfPath = fs.readdirSync(assignPath, { withFileTypes: true });

  // 开始遍历
  dirOfPath.forEach((dir) => {
    // 如果是目录
    if (dir.isDirectory()) {
      // 继续递归，但是传递的参数为完成的目录参数
      result.push(...getAbsolutePath(path.resolve(assignPath, dir.name)));
    } else {
      // 打印完整的目录文件
      console.log(path.resolve(assignPath, dir.name));
      result.push(path.resolve(assignPath, dir.name));
    }
  });

  return result;
};

const result = getAbsolutePath("../13-fs");
console.log('打印日志看看-result:', result)
