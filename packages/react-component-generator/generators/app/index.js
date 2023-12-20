import Generator from "yeoman-generator";

export default class extends Generator {
  async promting() {
    const { componentName } = await this.prompt([
      {
        name: "componentName",
        message: "what is your component name",
      },
    ]);

    this.componentName = componentName.toLowerCase();
  }

  writing() {
    var self = this;

    function capitalize(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
    var filesToCopy = [
      { from: ".eslintrc", to: ".eslintrc" },
      { from: ".prettierrc", to: ".prettierrc" },
      { from: "happydom.ts", to: "happydom.ts" },
      { from: "bunfig.toml", to: "bunfig.toml" },
      { from: "tsconfig.json", to: "tsconfig.json" },
      { from: "README.md", to: "README.md" },
      {
        from: "package.ejs.json",
        to: "package.json",
        variables: [{ name: "componentName", value: self.componentName }],
      },
      {
        from: "src/component.ejs.js",
        to: `src/react-${self.componentName}.tsx`,
        variables: [
          { name: "componentName", value: self.componentName },
          {
            name: "componentFunctionalName",
            value: capitalize(self.componentName),
          },
        ],
      },
      {
        from: "src/index.ejs.js",
        to: "src/index.ts",
        variables: [{ name: "componentName", value: self.componentName }],
      },
    ];

    for (const file of filesToCopy) {
      var context = {};

      if (file.variables) {
        for (const variable of file.variables) {
          context[variable.name] = variable.value;
        }
      }

      self.fs.copyTpl(
        self.templatePath(file.from),
        self.destinationPath(`react-${self.componentName}/${file.to}`),
        context
      );
    }
  }
}
