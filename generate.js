const fs = require("fs");
const jsonfile = require("jsonfile");
const base64 = require("nodejs-base64-encode");
const qr = require("qr-image");
const zipFolder = require('zip-a-folder');
const rmfr = require('rmfr');

let main = jsonfile.readFileSync("origin/main.json");
let config = jsonfile.readFileSync("origin/config.json");

for (let key in main) {

  main[key].map( element => {
    let json = config;

    json.outbounds[0].settings.vnext[0].users[0].id = element.id;
    json.outbounds[0].streamSettings.wsSettings.path = key;

    let originStr = "aes-128-gcm:" + element.id + "@w8.undervineyard.com:443";
    let vmessUrl =
      "vmess://" +
      base64.encode(originStr, "base64") +
      "?remarks=w8-hk-gcp&path=/" + key + "&obfs=websocket&tls=1";

    let dir = "final/" + element.email;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    jsonfile.writeFile(dir + "/config.json", json, function (err) {
      if (err) console.error(err);
    });

    let qr_png = qr.image(vmessUrl, { type: "png" });
    qr_png.pipe(require("fs").createWriteStream(dir + "/qr.png"));

    let dirWin = dir + "/v2ray-v4.18-windows-64";
    if (!fs.existsSync(dirWin)) {
      fs.mkdirSync(dirWin);
    }

    fs.createReadStream("origin/v2ray-v4.18-windows-64/v2ray.exe").pipe(
      fs.createWriteStream(dirWin + "/v2ray.exe")
    );
    fs.createReadStream("origin/v2ray-v4.18-windows-64/wv2ray.exe").pipe(
      fs.createWriteStream(dirWin + "/wv2ray.exe")
    );
    fs.createReadStream("origin/v2ray-v4.18-windows-64/v2ctl.exe").pipe(
      fs.createWriteStream(dirWin + "/v2ctl.exe")
    );
    fs.createReadStream("origin/v2ray-v4.18-windows-64/geoip.dat").pipe(
      fs.createWriteStream(dirWin + "/geoip.dat")
    );
    fs.createReadStream("origin/v2ray-v4.18-windows-64/geosite.dat").pipe(
      fs.createWriteStream(dirWin + "/geosite.dat")
    );
    fs.createReadStream(dir + "/config.json").pipe(
      fs.createWriteStream(dirWin + "/config.json")
    );

    zipFolder.zipFolder(dirWin, dir + "/win.zip", function (err) {
      if (err) {
        console.log('Something went wrong!', err);
      }

      (async () => await new Promise((resolve, reject) => {
        setTimeout(resolve => rmfr(dirWin), 300);
      }))();
    });
    
  });

}

fs.createReadStream("./origin/mac.zip").pipe(fs.createWriteStream("./final/mac.zip"));
fs.createReadStream("./origin/main.json").pipe(fs.createWriteStream("./final/main.json"));
