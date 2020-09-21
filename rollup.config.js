import { env } from './build/common'
import build from './build/build'
import dev from './build/dev'

const config = env === 'production' ? build() : dev()

export default config
