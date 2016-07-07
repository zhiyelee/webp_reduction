var glob = require('glob');
var fs = require('fs');

var total = 0;
var reduction = 0;
glob('*.png', function (err, files) {
  var count = files.length;
  files.forEach(function (f) {
    var stat = fs.statSync(f);
    // var statWebp = fs.statSync(f.substring(0, -4) + '.webp');
    var diff = stat.size - fs.statSync(f + '.webp').size;
    if (diff < 0) {
      count --;
      return
    }
    reduction += diff/stat.size;
    total += diff;
  });

  console.log('total count: ' + count)
  console.log('total reduction: ' + total/1024 + 'k')
  console.log('rate: ' + (reduction / count ));

});
