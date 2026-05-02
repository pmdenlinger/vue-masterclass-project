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
    it('displays user profile picture after clicking sign in', async () => {
      const wrapper = mount(MainNav)

      const logInButton = wrapper.findComponent(ActionButton)
      await logInButton.trigger('click')

      expect(wrapper.findComponent(ProfileImage).exists()).toBe(true)
      expect(wrapper.findComponent(ActionButton).exists()).toBe(false)
    })
  })
})

