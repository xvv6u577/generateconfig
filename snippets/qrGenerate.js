const jsonfile = require("jsonfile");
const base64 = require("nodejs-base64-encode");
const qr = require("qr-image");

const mainJ = "./main.json";
const configJ = "./config.json";

let main = jsonfile.readFileSync(mainJ);
let config = jsonfile.readFileSync(configJ);

let originStr =
  "aes-128-gcm:" +
  config.outbounds[0].settings.vnext[0].users[0].id +
  "@w8.undervineyard.com:443";

let vmessUrl =
  "vmess://" +
  base64.encode(originStr, "base64") +
  "?remarks=w8-hk&path=" +
  config.outbounds[0].streamSettings.wsSettings.path +
  "&obfs=websocket&tls=1";

let qr_png = qr.image(vmessUrl, {type: 'png'});
qr_png.pipe(require("fs").createWriteStream("png/w8-hk.png"));
