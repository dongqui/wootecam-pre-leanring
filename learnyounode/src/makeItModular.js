const myModule = require("./myModule");
const dir = process.argv[2];
const ext = process.argv[3];

myModule(dir, ext, function(err, list){
  for (const file of list) {
    console.log(file);
  }
});
