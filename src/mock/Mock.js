const path = require('path');
const fs = require('fs');

exports.Mock = () => {
  return JSON.parse(fs.readFileSync(path.resolve(__dirname, './daughter.json')));
}
