# A Gatsby plugin to integrate [Ecoindex Badge](https://github.com/cnumr/ecoindex_badge) to your pages

> Real name: `gatsby-plugin-ecoindexbadge-v2`

This project aims at proposing a badge to be easily integrated to your web pages. This badge will display the Ecoindex score of the web page on which it is integrated and will redirect the user to the Ecoindex score details page.

# Installation

```sh
npm i gatsby-plugin-ecoindexbadge-v2
or
yarn install gatsby-plugin-ecoindexbadge-v2
```

# Configuration

## 1. Integration

Add to gatby-config:

```js
plugins: [
  // ...
  {
    resolve: `gatsby-plugin-ecoindexbadge-v2`,
    options: {
      theme: `light`,
      fixedPosition: true,
    },
  },
  // ...
]
```

## 2. Options

- `theme`: `light` or `dark`, default `light` ;
- `fixedPosition`: `true` or `false`, default `false`.

The fixed position is a simple `<style/>` added to head with `position: fixed` and `bottom: 10px`.

You can override those styles by targeting `#ecoindex-badge` in your own css.
