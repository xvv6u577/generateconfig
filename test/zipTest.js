const fs = require("fs");
const zipFolder = require("zip-a-folder");
const rmfr = require('rmfr');

let dir = "final/demo";
if (!fs.existsSync( dir )) {
  fs.mkdirSync( dir );
}

let dirWin = dir + "/v2ray-v4.18-windows-64";
if (!fs.existsSync(dirWin)) {
  fs.mkdirSync(dirWin);
}

fs.createReadStream("origin/v2ray-v4.18-windows-64/geosite.dat").pipe(
  fs.createWriteStream("final/*/geosite.dat")
);
fs.createReadStream("origin/v2ray-v4.18-windows-64/v2ray.exe").pipe(
  fs.createWriteStream(dirWin + "/v2ray.exe")
);
fs.createReadStream("origin/v2ray-v4.18-windows-64/wv2ray.exe").pipe(
  fs.createWriteStream(dirWin + "/wv2ray.exe")
);
fs.createReadStream("origin/v2ray-v4.18-windows-64/v2ctl.exe").pipe(
  fs.createWriteStream(dirWin + "/v2ctl.exe")
);

zipFolder.zipFolder(dirWin, dir + "/demo.zip", function(err) {
  if (err) {
    console.log("Something went wrong!", err);
  }

  (async () => await new Promise((resolve, reject) => {
    rmfr(dirWin);
    setTimeout(resolve, 5000);
  }))();

});
