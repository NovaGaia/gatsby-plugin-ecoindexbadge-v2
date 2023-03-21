import { graphql } from 'gatsby'

/**
 * Implement Gatsby`s Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */
exports.onRouteUpdate = ({ location }, pluginOptions) => {
  function removeOldData() {
    const list = [`ecoindex-style`, `ecoindex-badge`]
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
    const head = document.getElementsByTagName(`head`)[0]
    const css = document.createElement(`style`)
    css.id = `ecoindex-style`
    if (css.styleSheet) css.styleSheet.cssText = styles
    else css.appendChild(document.createTextNode(styles))
    head.appendChild(css)
  }
  if (pluginOptions.fixedPosition === true) load_style()
  function load_simple_badge(location) {
    console.log(`simple badge`)
    const canonicalUrl = pluginOptions.siteURL + location.pathname
    const body = document.getElementsByTagName(`body`)[0]
    const aElement = document.createElement(`a`)
    const imgElement = document.createElement(`img`)
    aElement.setAttribute(
      `href`,
      `https://bff.ecoindex.fr/redirect/?url=${canonicalUrl}`
    )
    aElement.setAttribute(`target`, `_blank`)
    aElement.setAttribute(`rel`, `noreferrer`)
    aElement.id = `ecoindex-badge`
    imgElement.setAttribute(
      `src`,
      `https://bff.ecoindex.fr/badge/?theme=${pluginOptions.theme}&url=${canonicalUrl}`
    )
    imgElement.setAttribute(`alt`, `Ecoindex Badge`)
    imgElement.setAttribute(`width`, `108px`)
    imgElement.setAttribute(`height`, `32px`)
    aElement.appendChild(imgElement)
    body.appendChild(aElement)
  }
  function load_badge() {
    console.log(`simple badge`)
    const body = document.getElementsByTagName(`body`)[0]
    const div = document.createElement(`div`)
    div.id = `ecoindex-badge`
    if (pluginOptions.theme) div.setAttribute(`data-theme`, pluginOptions.theme)
    body.appendChild(div)
  }
  function load_js() {
    const head = document.getElementsByTagName(`head`)[0]
    const script = document.createElement(`script`)
    script.key = `ecoindex-script`
    script.id = `ecoindex-script`
    script.defer = true
    script.src = `https://cdn.jsdelivr.net/gh/cnumr/ecoindex_badge@2/assets/js/ecoindex-badge.js`
    head.appendChild(script)
  }
  console.log(pluginOptions)
  if (pluginOptions.useSimpleImage) {
    load_simple_badge(location)
  } else {
    load_badge()
    load_js()
  }
}
