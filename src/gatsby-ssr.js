import React from 'react'
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

function buildInformationMessage() {
  return (
    <script
      key="ecoindex_message"
      dangerouslySetInnerHTML={{
        __html: `
        console.log("l'Écoindex, c'est quoi ? https://www.ecoindex.fr/comment-ca-marche/")
      `,
      }}
    />
  )
}

export const onRenderBody = ({
  setBodyAttributes,
  setPostBodyComponents,
  setHeadComponents,
}) => {
  const preconnectEcoIndex =
    ((
      <link
        rel="preconnect"
        key="preconnect-ecoindex"
        href="https://cdn.jsdelivr.net/gh/cnumr/ecoindex_badge@2/assets/js/ecoindex-badge.js"
      />
    ),
    (
      <link
        rel="dns-prefetch"
        key="dns-prefetch-ecoindex"
        href="https://cdn.jsdelivr.net/gh/cnumr/ecoindex_badge@2/assets/js/ecoindex-badge.js"
      />
    ))
  setHeadComponents([preconnectEcoIndex])
  setBodyAttributes({ style: { position: 'relative' } })
  setPostBodyComponents([buildInformationMessage()])
}
