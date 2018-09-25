var fs = require("fs");

fs.readFile("README.md", "utf-8", function(err, data){
  if(err) throw err;

  var newValue = data.replace(/^\./gim, 'myString');
  var newValue = "export default `" + data + "`;";

  fs.writeFile("demo/src/readme.md.js", newValue, 'utf-8', function (err) {
    if(err) throw err;
  });
});