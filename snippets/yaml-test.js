const fs   = require('fs');
const yaml = require('js-yaml');

const doc = yaml.load(fs.readFileSync('origin/mac.yaml', 'utf8'));
doc.proxies.push( {
  name: 'rm',
  server: 'rm.undervineyard.com',
  port: 443,
  type: 'vmess',
  uuid: '73d392a1-3082-4128-a42a-9696924272ab',
  alterId: 64,
  cipher: 'auto',
  tls: true,
  network: 'ws',
  'ws-path': '/ray',
  'ws-headers': { Host: 'rm.undervineyard.com' }
} )

let editted_yaml = yaml.dump(doc);
fs.writeFileSync('origin/mac_.yaml', editted_yaml, 'utf8')

// console.log(formattedJson.proxies);
