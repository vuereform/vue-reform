import { configure } from '@storybook/vue'

import Vue from 'vue'

const req = require.context('../stories', true, /.stories.(j|t)sx?$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
