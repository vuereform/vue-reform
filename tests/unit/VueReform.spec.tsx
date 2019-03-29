import { shallowMount } from '@vue/test-utils'
import VueReform from '@/components/VueReform'
import DefaultRenderer from '@/components/renderers/DefaultRenderer'

describe('VueReform.vue', () => {
  it('is a vue component', () => {
    const wrapper = shallowMount(VueReform, {
      propsData: {
        renderer: new DefaultRenderer(),
        formData: {
          name: 'test',
          label: 'test',
          children: []
        }
      }
    })
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
