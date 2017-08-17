
# svg-to-component-loader

[![NPM version](https://img.shields.io/npm/v/svg-to-component-loader.svg?style=flat)](https://npmjs.com/package/svg-to-component-loader) [![NPM downloads](https://img.shields.io/npm/dm/svg-to-component-loader.svg?style=flat)](https://npmjs.com/package/svg-to-component-loader) [![CircleCI](https://circleci.com/gh/egoist/svg-to-component-loader/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/svg-to-component-loader/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat)](https://chat.egoist.moe)

## Install

```bash
yarn add svg-to-component-loader --dev
```

## Usage

```js
// webpack.config.js
module.exports = {
  // ... other config
  module: {
    rules: [
      // For React.js
      {
        test: /\.react.svg$/,
        loader: 'svg-to-component-loader',
        options: {
          type: 'react'
        }
      },
      // For Vue.js
      {
        test: /\.vue.svg$/,
        loader: 'svg-to-component-loader',
        options: {
          type: 'vue'
        }
      }
    ]
  }
}
```

Then simply import SVG in your app like this:

```js
import UserIcon from './path/to/user.react.svg'

const App = () => (
  <div>
    <UserIcon className="custom-class" />
  </div>
)
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**svg-to-component-loader** © [EGOIST](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/egoist/svg-to-component-loader/contributors)).

> [github.com/egoist](https://github.com/egoist) · GitHub [@EGOIST](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
