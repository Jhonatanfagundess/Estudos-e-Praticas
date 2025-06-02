const fs = require('fs').promises //Lendo o arquivo


module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados  ,{ flag: 'w', encoding: 'utf8'})
}

