const child_process = require("child_process");
const path = require("path");

const { fork } = child_process;

const child = fork(path.resolve(__dirname, "./child.js"));

child.on("message", (data) => {
  console.log("打印日志看看-parent-data:", data);
});

child.send("message from parent");
