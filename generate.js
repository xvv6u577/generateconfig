const fs = require("fs");
const qr = require("qr-image");
const jsonfile = require("jsonfile");
const base64 = require("nodejs-base64-encode");
const AdmZip = require('adm-zip');
const cache = require('node-file-cache').create();

const main = jsonfile.readFileSync("origin/main.json");
const config = jsonfile.readFileSync("origin/config.json");

let archive_win = new AdmZip();
let archive_mac = new AdmZip();

archive_win.addLocalFolder("origin/v2ray-v4.23.1-windows-64/");
cache.set("win", archive_win, {life: 300});

archive_mac.addLocalFolder("origin/v2ray-mac/");
cache.set("mac", archive_mac, {life: 300});

for (let key in main) {

  main[key].map( element => {

    const win = cache.get("win");
    const mac = cache.get("mac");
    config.outbounds[0].settings.vnext[0].users[0].id = element.id;
    config.outbounds[0].streamSettings.wsSettings.path = '/' + key;

    let originStr = "aes-128-gcm:" + element.id + "@w8.undervineyard.com:443";
    let vmessUrl = "vmess://" + base64.encode(originStr, "base64") + "?remarks=w8-hk-gcp&path=/" + key + "&obfs=websocket&tls=1";

    let dir = "final/" + element.email;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    win.updateFile("config.json", JSON.stringify(config));
    win.writeZip(dir + "/win.zip");
    
    mac.updateFile("config.json", JSON.stringify(config));
    mac.writeZip(dir + "/mac.zip");

    jsonfile.writeFileSync(dir + "/config.json", config);

    let qr_png = qr.image(vmessUrl, { type: "png" });
    qr_png.pipe(require("fs").createWriteStream(dir + "/qr.png"));
  });

}

fs.createReadStream("./origin/main.json").pipe(fs.createWriteStream("./final/main.json"));
