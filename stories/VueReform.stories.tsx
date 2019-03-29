import { storiesOf } from '@storybook/vue'

import VueReform from '../src/VueReform'
import DefaultRenderer from '../src/renderers/DefaultRenderer'
import BulmaRenderer from '../src/renderers/BulmaRenderer'
import BootstrapRenderer from '../src/renderers/BootstrapRenderer'

const sampleFormData = {
  name: 'default',
  label: 'Default',
  children: [
    {
      label: 'Default Section',
      type: 'section',
      children: [
        {
          label: 'Default Field',
          name: 'default-field',
          type: 'text',
          placeholder: 'Placeholder',
          value: ''
        },
        {
          label: 'Default Textarea',
          name: 'default-textarea',
          type: 'textarea',
          placeholder: 'Placeholder',
          value: ''
        },
        {
          label: 'Child section',
          type: 'section',
          children: [
            {
              label: 'Sub Field',
              name: 'sub-field',
              type: 'text',
              placeholder: 'WHEEEE',
              value: ''
            }
          ]
        }
      ]
    },
    {
      label: 'Submit',
      type: 'button',
      buttonType: 'submit'
    }
  ]
}

storiesOf('VueReform', module)
  .add('Default Renderer', () => ({
    data() {
      return {
        formData: sampleFormData,
        renderer: new DefaultRenderer()
      }
    },
    components: {
      VueReform
    },
    template: `<vue-reform :form-data="formData" :renderer="renderer"/>`
  }))
  .add('Bulma Renderer', () => ({
    data() {
      return {
        formData: sampleFormData,
        renderer: new BulmaRenderer()
      }
    },
    components: {
      VueReform
    },
    template: `
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css">
      <vue-reform :form-data="formData" :renderer="renderer"/>
    </div>
    `
  }))
  .add('Bootstrap Renderer', () => ({
    data() {
      return {
        formData: sampleFormData,
        renderer: new BootstrapRenderer()
      }
    },
    components: {
      VueReform
    },
    template: `
    <div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous">
      <vue-reform :form-data="formData" :renderer="renderer"/>
    </div>
    `
  }))
