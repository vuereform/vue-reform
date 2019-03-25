import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import * as VueReform from '../../types/vuereform'

@Component({
  name: 'VueReform'
})
export default class extends Vue {
  @Prop({
    default: () => {
      return {
        name: 'default',
        label: 'Default',
        containers: [
          {
            label: 'Default Section',
            name: 'default',
            type: VueReform.ContainerTypes.section,
            elements: [
              {
                label: 'Default Field',
                name: 'default-field',
                type: VueReform.ElementTypes.text,
                placeholder: 'Placeholder',
                value: ''
              },
              {
                label: 'Default Textarea',
                name: 'default-textarea',
                type: VueReform.ElementTypes.textarea,
                placeholder: 'Placeholder',
                value: ''
              }
            ]
          }
        ]
      }
    }
  })
  form!: VueReform.Form

  render() {
    const elements = []

    for (const container of this.form.containers) {
      switch (container.type) {
        case 'section':
        case 'group':
          elements.push(<p>{container.label}</p>)
          break
      }

      for (const element of container.elements) {
        switch (element.type) {
          case VueReform.ElementTypes.text:
            elements.push(
              <input name={element.name} placeholder={element.placeholder} />
            )
            break
          case VueReform.ElementTypes.textarea:
            elements.push(
              <textarea name={element.name} placeholder={element.placeholder} />
            )
            break
        }
      }
    }

    return <div class="vue-reform-container">{elements}</div>
  }
}
