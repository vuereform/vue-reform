import { storiesOf } from '@storybook/vue'

import VueReform from '../src/components/VueReform'

storiesOf('VueReform', module).add('default', () => ({
  components: {
    VueReform
  },
  template: `<vue-reform />`
}))
