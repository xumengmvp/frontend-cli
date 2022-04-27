const ejs = require("ejs")

function complieTemplate(templatePath, obj) {
  return ejs.renderFile(templatePath, obj)
}

module.exports = {
  complieTemplate
}