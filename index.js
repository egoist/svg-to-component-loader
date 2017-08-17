const loaderUtils = require('loader-utils')
const Svg2Component = require('svg-to-component')

module.exports = function (content) {
  this.cacheable && this.cacheable()

  const options = Object.assign({
    type: 'vue'
  }, loaderUtils.getOptions(this))

  const svg2component = new Svg2Component()
  svg2component.fromString(content, this.resourcePath)
  return options.type === 'vue' ? svg2component.toVueComponent() : svg2component.toReactComponent()
}
