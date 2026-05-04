import { mount } from '@vue/test-utils'

import TheSubnav from '@/components/TheSubnav.vue'

describe('TheSubnav', () => {
  describe('when user is on jobs page', () => {
    it('displays job count', () => {
      const wrapper = mount(TheSubnav, {
        data() {
          return {
            onJobResultsPage: true,
          }
        },
      })
      expect(wrapper.text()).toContain('1653')
    })
  })
  describe('when user is not on jobs page', () => {
    it('does NOT display job count', () => {
      const wrapper = mount(TheSubnav, {
        data() {
          return {
            onJobResultsPage: false,
          }
        },
      })
      expect(wrapper.text()).not.toContain('1653')
    })
  })
})
