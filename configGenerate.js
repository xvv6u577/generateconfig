const fs = require("fs");
const jsonfile = require("jsonfile");
const base64 = require("nodejs-base64-encode");
const qr = require("qr-image");
const zipFolder = require("zip-a-folder");
const rimraf = require("rimraf");

const mainJ = "./main.json";
const configJ = "./config.json";

let main = jsonfile.readFileSync(mainJ);
let config = jsonfile.readFileSync(configJ);

// let arr = main.ray.concat(main.kay);

main.ray.forEach(element => {
  let tempArray = config;
  tempArray.outbounds[0].settings.vnext[0].users[0].id = element.id;
  // tempArray.outbounds[0].streamSettings.wsSettings.path = "/ray";

  let originStr = "aes-128-gcm:" + element.id + "@w8.undervineyard.com:443";
  let vmessUrl =
    "vmess://" +
    base64.encode(originStr, "base64") +
    "?remarks=w8-hk&path=/ray&obfs=websocket&tls=1";

  let dir = "many/" + element.email;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  jsonfile.writeFile(dir + "/config.json", tempArray, function(err) {
    if (err) console.error(err);
  });

  let qr_png = qr.image(vmessUrl, { type: "png" });
  qr_png.pipe(require("fs").createWriteStream(dir + "/qr.png"));

  let dirWin = "many/" + element.email + "/v2ray-v4.18-windows-64";
  if (!fs.existsSync(dirWin)) {
    fs.mkdirSync(dirWin);
  }

  fs.createReadStream("v2ray-v4.18-windows-64/v2ray.exe").pipe(
    fs.createWriteStream(dirWin + "/v2ray.exe")
  );
  fs.createReadStream("v2ray-v4.18-windows-64/wv2ray.exe").pipe(
    fs.createWriteStream(dirWin + "/wv2ray.exe")
  );
  fs.createReadStream("v2ray-v4.18-windows-64/v2ctl.exe").pipe(
    fs.createWriteStream(dirWin + "/v2ctl.exe")
  );
  fs.createReadStream("v2ray-v4.18-windows-64/geoip.dat").pipe(
    fs.createWriteStream(dirWin + "/geoip.dat")
  );
  fs.createReadStream("v2ray-v4.18-windows-64/geosite.dat").pipe(
    fs.createWriteStream(dirWin + "/geosite.dat")
  );
  fs.createReadStream(dir + "/config.json").pipe(
    fs.createWriteStream(dirWin + "/config.json")
  );
  fs.createReadStream("mac.zip").pipe(fs.createWriteStream(dir + "/mac.zip"));

  zipFolder.zipFolder(dirWin, dir + "/win.zip", err => {
    if (err) {
      console.log("Something went wrong!", err);
    }
    rimraf(dirWin, () => {});
  });
});

main.kay.forEach(element => {
  let tempArray = config;
  tempArray.outbounds[0].settings.vnext[0].users[0].id = element.id;
  tempArray.outbounds[0].streamSettings.wsSettings.path = "/kay";

  let originStr = "aes-128-gcm:" + element.id + "@w8.undervineyard.com:443";
  let vmessUrl =
    "vmess://" +
    base64.encode(originStr, "base64") +
    "?remarks=w8-hk&path=/kay&obfs=websocket&tls=1";

  let dir = "many/" + element.email;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  jsonfile.writeFile(dir + "/config.json", tempArray, function(err) {
    if (err) console.error(err);
  });

  let qr_png = qr.image(vmessUrl, { type: "png" });
  qr_png.pipe(require("fs").createWriteStream(dir + "/qr.png"));

  let dirWin = "many/" + element.email + "/v2ray-v4.18-windows-64";
  if (!fs.existsSync(dirWin)) {
    fs.mkdirSync(dirWin);
  }

  fs.createReadStream("v2ray-v4.18-windows-64/v2ray.exe").pipe(
    fs.createWriteStream(dirWin + "/v2ray.exe")
  );
  fs.createReadStream("v2ray-v4.18-windows-64/wv2ray.exe").pipe(
    fs.createWriteStream(dirWin + "/wv2ray.exe")
  );
  fs.createReadStream("v2ray-v4.18-windows-64/v2ctl.exe").pipe(
    fs.createWriteStream(dirWin + "/v2ctl.exe")
  );
  fs.createReadStream("v2ray-v4.18-windows-64/geoip.dat").pipe(
    fs.createWriteStream(dirWin + "/geoip.dat")
  );
  fs.createReadStream("v2ray-v4.18-windows-64/geosite.dat").pipe(
    fs.createWriteStream(dirWin + "/geosite.dat")
  );
  fs.createReadStream(dir + "/config.json").pipe(
    fs.createWriteStream(dirWin + "/config.json")
  );
  fs.createReadStream("mac.zip").pipe(fs.createWriteStream(dir + "/mac.zip"));

  zipFolder.zipFolder(dirWin, dir + "/win.zip", err => {
    if (err) {
      console.log("Something went wrong!", err);
    }

    rimraf(dirWin, () => {});
  });
});

main.cas.forEach(element => {
  let tempArray = config;
  tempArray.outbounds[0].settings.vnext[0].users[0].id = element.id;
  tempArray.outbounds[0].streamSettings.wsSettings.path = "/cas";

  let originStr = "aes-128-gcm:" + element.id + "@w8.undervineyard.com:443";
  let vmessUrl =
    "vmess://" +
    base64.encode(originStr, "base64") +
    "?remarks=w8-hk&path=/cas&obfs=websocket&tls=1";

  let dir = "many/" + element.email;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  jsonfile.writeFile(dir + "/config.json", tempArray, function(err) {
    if (err) console.error(err);
  });

  let qr_png = qr.image(vmessUrl, { type: "png" });
  qr_png.pipe(require("fs").createWriteStream(dir + "/qr.png"));

  let dirWin = "many/" + element.email + "/v2ray-v4.18-windows-64";
  if (!fs.existsSync(dirWin)) {
    fs.mkdirSync(dirWin);
  }

  fs.createReadStream("v2ray-v4.18-windows-64/v2ray.exe").pipe(
    fs.createWriteStream(dirWin + "/v2ray.exe")
  );
  fs.createReadStream("v2ray-v4.18-windows-64/wv2ray.exe").pipe(
    fs.createWriteStream(dirWin + "/wv2ray.exe")
  );
  fs.createReadStream("v2ray-v4.18-windows-64/v2ctl.exe").pipe(
    fs.createWriteStream(dirWin + "/v2ctl.exe")
  );
  fs.createReadStream("v2ray-v4.18-windows-64/geoip.dat").pipe(
    fs.createWriteStream(dirWin + "/geoip.dat")
  );
  fs.createReadStream("v2ray-v4.18-windows-64/geosite.dat").pipe(
    fs.createWriteStream(dirWin + "/geosite.dat")
  );
  fs.createReadStream(dir + "/config.json").pipe(
    fs.createWriteStream(dirWin + "/config.json")
  );
  fs.createReadStream("mac.zip").pipe(fs.createWriteStream(dir + "/mac.zip"));

  zipFolder.zipFolder(dirWin, dir + "/win.zip", err => {
    if (err) {
      console.log("Something went wrong!", err);
    }

    rimraf(dirWin, () => {});
  });
});
