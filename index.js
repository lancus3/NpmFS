var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');




fs.readdir('.', (err, files) => {
  files.forEach(files => {

    fs.appendFile('nowy.txt', '\n' + files, (err) => {
        if (err) throw err;
      });
  });
});
