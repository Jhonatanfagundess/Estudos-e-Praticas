const fs = require('fs').promises //Lendo o arquivo

module.exports = (caminho) => fs.readFile(caminho, 'utf8')
