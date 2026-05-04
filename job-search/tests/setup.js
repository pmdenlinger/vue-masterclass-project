import * as matchers from '@testing-library/jest-dom/matchers'
import { expect } from 'vitest'
import { config } from '@vue/test-utils'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

expect.extend(matchers)

// Set up FontAwesome for tests
library.add(faSearch)
config.global.components = {
  'font-awesome-icon': FontAwesomeIcon,
}
