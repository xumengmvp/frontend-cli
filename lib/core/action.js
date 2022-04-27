const open = require("open")
const { promisify } = require("util")

const download = promisify(require("download-git-repo"))

const { repository } = require("../config/repo")
const { spawnCommand } = require("../utils/terminal")
const { writeTemplateFile } = require("../utils/writeFile")

// create commmand action
const createProjectAction = async (projname) => {
  // cue: waiting download
  console.log("please waiting for download template of vue ~")

  // download templat by github repository
  await download(repository, projname, { clone: false })
  
  // judge windows or mac/linux plateform
  const npm = process.platform === "win32" ? "npm.cmd" : "npm"
  
  // create childprocess -> run npm install -> also yarn / pnpm package manager
  await spawnCommand(npm, ["install"], {cwd: `./${projname}`})
  
  open("https://localhost:8080/")

  // create childprocess -> run run serve -> also yarn / pnpm package manager
  await spawnCommand(npm, ["run", "serve"], {cwd: `./${projname}`})
}

const createAddPageAction = async (pagename, dest) => {
  await writeTemplateFile(dest, pagename,"../template/vue-component.ejs", {data: {name: pagename.toLowerCase()}}, "vue")
  await writeTemplateFile(dest, pagename,"../template/vue-router.ejs", {data: {name: pagename.toLowerCase()}}, "js")
}

const createAddCpnAction = async (cpnname, dest) => {
  await writeTemplateFile(dest, cpnname,"../template/vue-component.ejs", {data: {name: cpnname.toLowerCase()}}, "vue")
}

const createAddStoreAction = async (storename, dest) => {
  await writeTemplateFile(dest, storename,"../template/vue-store.ejs", {data: {name: storename.toLowerCase()}}, "js")
}

module.exports = {
  createProjectAction,
  createAddPageAction,
  createAddCpnAction,
  createAddStoreAction
}