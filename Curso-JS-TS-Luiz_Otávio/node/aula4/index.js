const fs = require('fs').promises //Módulo NODE //pegando as promises
const path = require('path') //Outro módulo

async function readdir(rootdir){
    rootdir = rootdir || path.resolve(__dirname) //Se não foi enviado devo usar o caminho da pasta
  const files = await fs.readdir(rootdir)
  walk(files, rootdir)
}

async function walk(files, rootdir){
    for(let file of files){
        const fileFullPath = path.resolve(rootdir, file)
        const stats = await fs.stat(fileFullPath)

        if(stats.isDirectory()){
            readdir(fileFullPath)
            continue
        }
    }
}

readdir()



//fs.readdir(path.resolve(__dirname))
//    .then(files => console.log(files))
//    .catch(e => console.log(e))