const blog = require("./blog")

const generators = (plop) => {
  plop.setDefaultInclude({ generators: true })
  plop.load("../helpers/date.js")
  plop.setGenerator("blog", blog)
}

module.exports = generators
