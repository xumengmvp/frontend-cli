const fs = require("fs")
const path = require("path")
const { promisify } = require("util")
const writeFile = promisify(fs.writeFile)
const { complieTemplate } = require("./complie")

function  isExistDir(filePath) {
  if (fs.existsSync(filePath)) {
    return true
  } else {
    if (isExistDir(path.dirname(filePath))) {
      fs.mkdirSync(filePath)
      return true
    }
  }
}

 async function writeTemplateFile(dest, filename, templatePath, data, extname) {
   
  // if directory not found , this function will create directory 
  isExistDir(path.resolve(dest, filename))

  const result =  await complieTemplate(path.resolve(__dirname, templatePath), data)

  return writeFile(path.resolve(dest, filename, `${!templatePath.includes("router") ? filename : "router"}.${extname}`), result, {encoding: "utf-8"})

}

module.exports = {
  writeTemplateFile
}