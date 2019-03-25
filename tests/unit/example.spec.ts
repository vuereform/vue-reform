import { shallowMount } from '@vue/test-utils';
import VueReform from '../../src/components/VueReform/VueReform';

describe('VueReform.tsx', () => {
  it('is a vue component', () => {
    const wrapper = shallowMount(VueReform, {})
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
