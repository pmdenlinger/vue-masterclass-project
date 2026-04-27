import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const hooksPath = path.join(repoRoot, '.githooks')

execFileSync('git', ['config', 'core.hooksPath', hooksPath], {
  stdio: 'inherit',
})

console.log(`Git hooks path set to ${hooksPath}`)
