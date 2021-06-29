const fs   = require("fs");
const dir = process.argv[2];
const ext = process.argv[3];

fs.readdir(dir, function(err, list){
  for (const filename of list) {
    if (ext === filename.split('.')[1]) {
      console.log(filename);
    }
  }
});
