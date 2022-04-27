const { program } = require("commander")

// create command params
function createOptions() {
  const version = require("../../package.json").version
  program.version(version, "-v, --version", "inspect version number")
  program
    .option("-w, --why", "fast create template")
    .option("-d, --dest <dest>", "destination src, example: src/components")
    .option("-f, --framework <framework>", "current framework name")
  program.on("--help", () => {
    console.log("")
    console.log("usage:")
    console.log("");
    console.log("   fct -v")
    console.log("   fct --version")
  })

  program.on("-d", () => {
    console.log(program.dest);
  })
}
module.exports = createOptions