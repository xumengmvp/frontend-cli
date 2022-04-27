const { program } = require("commander")

const {
  createProjectAction,
  createAddPageAction,
  createAddCpnAction,
  createAddStoreAction
} = require("./action")


function createCommand() {  
  // create project name command
  program
    .command("create <projname>")
    .description("create vue project template, forexample fct create <projname>")
    .action(createProjectAction)

  program
    .command("addpage <pagename>")
    .description("add vue page in destination, forexample: fct addpage <destination>")
    .action(pagename => {
      createAddPageAction(pagename, program.opts().dest || "src/pages")
    })
  
  program
    .command("addcpn <cpnname>")
    .description("add vue component in destionation, forexample: fct addcpn <cpnname>")
    .action((cpnname) => {
      createAddCpnAction(cpnname, program.opts().dest || "src/components")
    })
  
  program
    .command("addstore <storename>")
    .description("add vue store in destionation, forexample: fct addstore <storename>")
    .action((storename) => {
      createAddStoreAction(storename, program.opts().dest || "src/store/modules")
    })
}

module.exports = createCommand