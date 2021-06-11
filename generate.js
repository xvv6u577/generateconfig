const fs = require("fs");
const qr = require("qr-image");
const jsonfile = require("jsonfile");
const base64 = require("nodejs-base64-encode");
const yaml = require('js-yaml');

const main = jsonfile.readFileSync("origin/main.json");
const config = jsonfile.readFileSync("origin/config.json");
const shadowrocket_w8 = jsonfile.readFileSync("origin/template_v2.json");
const shadowrocket_rm = jsonfile.readFileSync("origin/template_v2.json");
const clashx_mac = yaml.load(fs.readFileSync('origin/mac.yaml', 'utf8'));
const clashx_win = yaml.load(fs.readFileSync('origin/win.yaml', 'utf8'));


for (let key in main) {

  main[key].map( element => {

    config.outbounds[0].settings.vnext[0].users[0].id = element.id;
    config.outbounds[0].streamSettings.wsSettings.path = '/' + key;

    shadowrocket_w8.id = element.id;
    shadowrocket_w8.path = '/' + key;
    shadowrocket_w8.ps = 'w8-hk-gcp';
    shadowrocket_w8.add = 'w8.undervineyard.com';

    shadowrocket_rm.id = element.id;
    shadowrocket_rm.path = '/' + key;
    shadowrocket_rm.ps = 'rm-la-twitter';
    shadowrocket_rm.add = 'rm.undervineyard.com';

    clashx_mac.proxies[0].uuid = element.id;
    clashx_mac.proxies[0]['ws-path'] = '/' + key;
    clashx_mac.proxies[1].uuid = element.id;
    clashx_mac.proxies[1]['ws-path'] = '/' + key;

    clashx_win.proxies[0].uuid = element.id;
    clashx_win.proxies[0]['ws-path'] = '/' + key;
    clashx_win.proxies[1].uuid = element.id;
    clashx_win.proxies[1]['ws-path'] = '/' + key;

    let originStr_w8 = "aes-128-gcm:" + element.id + "@w8.undervineyard.com:443";
    let originStr_rm = "aes-128-gcm:" + element.id + "@rm.undervineyard.com:443";
    let vmessUrl_w8 = "vmess://" + base64.encode(originStr_w8, "base64") + "?remarks=w8-hk-gcp&path=/" + key + "&obfs=websocket&tls=1";
    let vmessUrl_rm = "vmess://" + base64.encode(originStr_rm, "base64") + "?remarks=rm-la-twitter&path=/" + key + "&obfs=websocket&tls=1";
    let shadowrocket_v2_url = 'vmess://' + base64.encode(JSON.stringify(shadowrocket_w8), "base64") + '\n' + 'vmess://' + base64.encode(JSON.stringify(shadowrocket_rm), "base64");

    //创建用户文件夹
    let dir = "final/" + element.email;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, {recursive: true});
    }

    // 生成config.json
    jsonfile.writeFileSync(dir + "/config.json", config);
    // 生成index.html(shadowrocket 订阅的 url)
    let shadowrocket_v2_url_base64 = base64.encode(shadowrocket_v2_url, "base64");
    fs.writeFileSync(dir + "/index.html", shadowrocket_v2_url_base64);
    // 生成QR code
    let subscription_url_first = "https://w8.undervineyard.com/static/" + element.email + "/";
    let subscription_url_second = "sub://" + base64.encode(subscription_url_first, "base64") + "#uvp"; 
    let combined_qr_png = qr.image(subscription_url_second, { type: "png" });
    combined_qr_png.pipe(require("fs").createWriteStream(dir + "/qr.png"));

    // 生成clashx的mac, win配置文件
    let clashx_mac_yaml = yaml.dump(clashx_mac);
    let clashx_win_yaml = yaml.dump(clashx_win);
    fs.writeFileSync(dir + '/mac.yaml', clashx_mac_yaml, 'utf8')
    fs.writeFileSync(dir + '/win.yaml', clashx_win_yaml, 'utf8')

  });
}

fs.createReadStream("./origin/main.json").pipe(fs.createWriteStream("./final/main.json"));
