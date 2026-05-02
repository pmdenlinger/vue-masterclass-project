import { mount } from '@vue/test-utils'

import MainNav from '@/components/MainNav.vue'
import ProfileImage from '@/components/ProfileImage.vue'
import ActionButton from '@/components/ActionButton.vue'

describe('MainNav', () => {
  it('displays company name', () => {
    const wrapper = mount(MainNav)

    expect(wrapper.text()).toContain('Bobo Careers')
  })

  it('displays navigation menu items', () => {
    const wrapper = mount(MainNav)
    const navigationItems = ['Teams', 'Locations', 'Life at Bobo Corp', 'How we hire', 'Students', 'Jobs']

    navigationItems.forEach((item) => {
      expect(wrapper.text()).toContain(item)
    })
  })

  describe('when the user is not logged in', () => {
    it('displays action button', () => {
      const wrapper = mount(MainNav)

      expect(wrapper.findComponent(ActionButton).exists()).toBe(true)
      expect(wrapper.findComponent(ProfileImage).exists()).toBe(false)
    })
  })

  describe('when the user logs in', () => {
    it('displays user profile picture', async () => {
      const wrapper = mount(MainNav)

      await wrapper.vm.loginUser()

      expect(wrapper.findComponent(ProfileImage).exists()).toBe(true)
      expect(wrapper.findComponent(ActionButton).exists()).toBe(false)
    })
  })
})

