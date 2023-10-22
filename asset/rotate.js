const { exec } = require('child_process');
const fs = require('fs');
const filePath = './proxy.txt';

function addLog(data) {
  const log = `[${new Date().toISOString()}] ${data}\n`;
  fs.appendFile(filePath, log, (err) => {
    if (err) throw err;
    console.log('Log berhasil ditambahkan!');
  });
}

function createFile(data) {
  const log = `[${new Date().toISOString()}] File berhasil dibuat!\n`;
  fs.appendFile(filePath, log, (err) => {
    if (err) throw err;
    console.log('Log berhasil ditambahkan!');
  });

  fs.appendFile(filePath, data, (err) => {
    if (err) throw err;
    console.log(`${log} - File berhasil dibuat!`);
  });
}

function runProxyScript() {
  const proxyScript = exec('node proxy.js SOCK4');

  proxyScript.stdout.on('data', (data) => {
    createFile(data);
  });

  proxyScript.stderr.on('data', (data) => {
    console.error(`Error: ${data}`);
  });
}

runProxyScript();
