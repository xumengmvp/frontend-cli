const { exec, spawn } = require("child_process")

function spawnCommand(...args) {
  return new Promise((resolve, reject) => {
    const spawn_proccess = spawn(...args)
    spawn_proccess.stderr.pipe(process.stderr)
    spawn_proccess.stdout.pipe(process.stdout)
    spawn_proccess.on("close", () => {
      resolve()
    })
  })
}

function execCommand(...args) {
  return new Promise((resolve, reject) => {
    exec(...args, (error) => {
      if (!error) {
        resolve()
      }
      reject()
    })
  })
}



module.exports = {
  spawnCommand,
  execCommand
}