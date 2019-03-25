import { shallowMount } from '@vue/test-utils'
import VueReform from '@/components/VueReform'

describe('VueReform.vue', () => {
  it('is a vue component', () => {
    const wrapper = shallowMount(VueReform)
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
