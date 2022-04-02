import path from 'path'
import typescript from 'rollup-plugin-typescript2'


const paths = {
  input: path.join(__dirname, '/src/index.ts'),
  output: path.join(__dirname, '/build')
}

// rollup 配置项
const rollupConfig = {
  input: paths.input,
  output: [
    {
      file: path.join(paths.output, 'index.js'),
      format: 'esm',
    }
  ],
  plugins: [
    typescript({ useTsconfigDeclarationDir: true })
  ]
}

export default rollupConfig
