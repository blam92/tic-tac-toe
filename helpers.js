let askForInput = (prompt, cb) => {
  console.log(prompt);
  process.stdin.on('data', (data) => {
    cb(data.toString());
    process.exit();
  });
}

module.exports = {
  askForInput: askForInput
}