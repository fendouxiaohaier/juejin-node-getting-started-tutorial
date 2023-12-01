process.on("message", (data) => {
  console.log("打印日志看看-child-data:", data);
  process.send("message from child");
});
