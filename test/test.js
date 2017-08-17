import path from 'path'
import test from 'ava'
import webpack from 'webpack'
import MFS from 'memory-fs'

function runWebpack(config) {
  return new Promise((resolve, reject) => {
    const mfs = new MFS()
    const compiler = webpack(config)
    compiler.outputFileSystem = mfs
    compiler.run(err => {
      if (err) return reject(err)
      resolve(mfs)
    })
  })
}

test('load as vue component', async t => {
  const outputPath = path.join(__dirname, 'dist')
  const mfs = await runWebpack({
    entry: path.join(__dirname, 'fixtures/input.js'),
    output: {
      path: outputPath,
      filename: 'main.js'
    },
    module: {
      rules: [{
        test: /\.svg$/,
        loader: require.resolve('../')
      }]
    }
  })
  t.snapshot(mfs.readFileSync(path.join(outputPath, 'main.js'), 'utf8'), 'Vue')
})

