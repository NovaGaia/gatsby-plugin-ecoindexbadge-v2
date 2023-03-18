/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */
exports.onRouteUpdate = (_, pluginOptions) => {
  function removeOldData() {
    const list = ['ecoindex-style', 'ecoindex-badge', 'ecoindex-script']
    list.forEach(element => {
      const oldElement = document.getElementById(element)
      if (oldElement) {
        oldElement.parentNode.removeChild(oldElement)
      }
    })
  }
  removeOldData()
  function load_style() {
    const styles = `#ecoindex-badge {
        position: fixed;
        bottom: 10px;
      }`
    const head = document.getElementsByTagName('head')[0]
    const css = document.createElement('style')
    css.id = 'ecoindex-style'
    if (css.styleSheet) css.styleSheet.cssText = styles
    else css.appendChild(document.createTextNode(styles))
    head.appendChild(css)
  }
  if (pluginOptions.fixedPosition === true) load_style()
  function load_badge() {
    const body = document.getElementsByTagName('body')[0]
    const div = document.createElement('div')
    div.id = 'ecoindex-badge'
    if (pluginOptions.theme) div.setAttribute(`data-theme`, pluginOptions.theme)
    body.appendChild(div)
  }
  load_badge()
  function load_js() {
    const head = document.getElementsByTagName('head')[0]
    const script = document.createElement('script')
    script.key = 'ecoindex-script'
    script.id = 'ecoindex-script'
    script.defer = true
    script.src =
      'https://cdn.jsdelivr.net/gh/cnumr/ecoindex_badge@2/assets/js/ecoindex-badge.js'
    head.appendChild(script)
  }
  load_js()
}
