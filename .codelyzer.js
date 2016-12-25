function transformNg1TemplateToNg2(code) {
  return code
    // remove $ctrl prefixes
    .replace(/\$ctrl\./g, '')
    // handle ng-repeat micro syntax
    .replace(/ng-repeat="(\w+)\s+in\s+(\w+)"/, '*ngFor="let $1 of $2"')
}
module.exports = {
  // Transformation of the templates. This hooks is quite useful
  // if you're using any other templating language, for instance
  // jade, markdown, haml, etc.
  //
  // NOTE that this method WILL NOT throw an error in case of invalid template.
  //
  transformTemplate(code, url, decorator) {
    return {code: transformNg1TemplateToNg2(code), url, decorator};
  },
}
