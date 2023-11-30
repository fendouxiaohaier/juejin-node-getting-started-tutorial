const allGlobalKeys = Object.getOwnPropertyNames(global);
console.log("打印日志看看-allGlobalKeys:", allGlobalKeys);

console.log("打印日志看看-__dirName:", __dirname);

console.log("打印日志看看-__filename:", __filename);

const argv = process.argv;
console.log("打印日志看看-argv:", argv);

const cwd = process.cwd();

console.log("打印日志看看-cwd:", cwd);

const env = process.env;
console.log("打印日志看看-env:", env);

// 终止进程
// 程序执行完成后可以使用【echo $?】命令打印出退出码  在这里也就是100
// process.exit(100);

// 获取process上的各种字段
const version = process.version;
console.log("打印日志看看-version:", version);

const pid = process.pid;
console.log("打印日志看看-pid:", pid);

const platform = process.platform;
console.log("打印日志看看-platform:", platform);

const arch = process.arch;
console.log("打印日志看看-arch:", arch);

// node 标准输出
process.stdout.write("hello");
process.stdout.write(" ");
process.stdout.write("world");
process.stdout.write("\n");

// 标准输入
process.stdin.on("data", (data) => {
  console.log(`user input: ${data}`);
});

// buffer转为各种格式
const buff = Buffer.from("hello world");

const string = buff.toString();
const hexString = buff.toString("hex");
const base64String = buff.toString("base64");
const arrString = Array.from(buff);

console.log("打印日志看看-string:", string);
console.log("打印日志看看-hexString:", hexString);
console.log("打印日志看看-base64String:", base64String);
console.log("打印日志看看-arrString:", arrString);

// 往一个buffer里写数据
const contentBuff = Buffer.alloc(10);
contentBuff.write("hello");
contentBuff.write("world", 4);
contentBuff.write("li ", 10);
const contentString = contentBuff.toString();
console.log("打印日志看看-contentString:", contentString);

// 合并buffer
const buff1 = Buffer.from("hello");
const buff2 = Buffer.from("world");
const buff3 = Buffer.concat([buff1, buff2]);
const buff3String = buff3.toString();
console.log("打印日志看看-buff3String:", buff3String);

// 截取buffer
const buffer = Buffer.from("hello world");
const sliceBuff = Uint8Array.prototype.slice.call(buffer, 0, 1);
const sliceBuffString = sliceBuff.toString();
console.log("打印日志看看-sliceBuffString:", sliceBuffString);
