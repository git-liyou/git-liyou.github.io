const blog = {
  prompts: [
    {
      type: "input",
      name: "title",
      message: "blog title",
    },
  ],
  actions: [
    {
      type: "add",
      path: "content/blog/{{title}}/index.md",
      templateFile: "../templates/blog.hbs",
    },
  ],
}

module.exports = blog
