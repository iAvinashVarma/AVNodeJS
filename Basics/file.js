var fs = require('fs');
fs.readFile('C:\\Temp\\avinashvarma.plg', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
});