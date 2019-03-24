import { configure } from '@storybook/vue'

const req = require.context('../stories', true, /.stories.(j|t)s$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
