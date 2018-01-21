const { spawn } = require('child_process');
const pyA = spawn('python', ['pythonA.py']);
const pyB = spawn('python', ['pythonB.py']);

pyA.stdout.on('data', (data) => {
  console.log(`pyA stdout: ${data}`);
  pyB.stdin.write(data, '\n');
});

pyA.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

pyA.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

pyB.stdout.on('data', (data) => {
  console.log(`pyB stdout: ${data}`);
  pyA.stdin.write(data, '\n');
});

pyB.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

pyB.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});