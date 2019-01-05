var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');




fs.readdir('.', 'utf-8', function (err, files) {
  var fileContent = files;
  var fileList = 'spisPlikow.txt';


  fs.writeFile(fileList, '\n'+fileContent, function (err) {
    if (err) throw err;
    console.log("The file was succesfully saved!");
  });
});



