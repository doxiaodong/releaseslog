const fs = require('fs');
const repo = require('./src/module/repo');
const GITHUB_REPO = require('./src/config').GITHUB_REPO;

var file = global.process.argv[2] || GITHUB_REPO + '-releases.md';

repo.getReleases()
.then((text) => {
  fs.writeFile(`./releases/${file}`, text, (err, fd) => {
    console.log(`./releases/${file}`)
    if (err) {
      return console.error(`text write error: ${err}`);
    }
    console.log(`releases log is built successful!`);
  });
});
