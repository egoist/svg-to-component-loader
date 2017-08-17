
# svg-to-component-loader

[![NPM version](https://img.shields.io/npm/v/svg-to-component-loader.svg?style=flat)](https://npmjs.com/package/svg-to-component-loader) [![NPM downloads](https://img.shields.io/npm/dm/svg-to-component-loader.svg?style=flat)](https://npmjs.com/package/svg-to-component-loader) [![CircleCI](https://circleci.com/gh/egoist/svg-to-component-loader/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/svg-to-component-loader/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat)](https://chat.egoist.moe)

## Why?

By using this it means you may never need things like [vue-bytesize-icons](https://github.com/egoist/vue-bytesize-icons) and [vue-feather-icons](https://github.com/egoist/vue-feather-icons), your SVG would just be transformed to React or Vue component on the fly by this loader. However you can still use the prebuilt library like *vue-bytesize-icons* if you don't want to mess with your webpack config.

## Install

```bash
yarn add svg-to-component-loader --dev
```

## Usage

### Configure it in webpack config

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

### Or simply use inline loader options:

```js
import UserIcon from '!svg-to-component-loader?type=react!./path/to/user.react.svg'
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
