// const fs = require("fs")
const jsonfile = require("jsonfile");
const cache = require('node-file-cache').create();
const AdmZip = require('adm-zip');

let archive = new AdmZip();
let config = jsonfile.readFileSync("origin/config.json");

archive.addLocalFolder("Archive/");
cache.set("archive", archive, {life: 300});

const arch = cache.get("archive")

config.outbounds[0].settings.vnext[0].users[0].id = "for-bar";

arch.updateFile("config.json", JSON.stringify(config))

arch.writeZip('final/new.zip')