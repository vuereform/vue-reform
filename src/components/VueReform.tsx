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
        children: [
          {
            label: 'Default Section',
            type: VueReform.ElementTypes.section,
            children: [
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
              },
              {
                label: 'Child section',
                type: VueReform.ElementTypes.section,
                children: [
                  {
                    label: 'Sub Field',
                    name: 'sub-field',
                    type: VueReform.ElementTypes.text,
                    placeholder: 'WHEEEE',
                    value: ''
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  })
  form!: VueReform.Form

  private renderFuncs: any = {
    text: this.renderTextInput,
    textarea: this.renderTextarea,
    section: this.renderSection
  }

  render() {
    if (!this.form) {
      return
    }

    const children = []

    for (const child of this.form.children) {
      children.push(this.renderFuncs[child.type](child))
    }

    return <form name={this.form.name}>{children}</form>
  }

  renderTextInput(
    child: VueReform.TextElement<VueReform.Element>
  ): JSX.Element {
    return (
      <input type="text" name={child.name} placeholder={child.placeholder} />
    )
  }

  renderTextarea(
    child: VueReform.TextareaElement<VueReform.Element>
  ): JSX.Element {
    return <textarea name={child.name} placeholder={child.placeholder} />
  }

  renderSection(
    child: VueReform.SectionElement<VueReform.Element>
  ): JSX.Element {
    const children: any = []

    for (const element of child.children) {
      children.push(this.renderFuncs[element.type](element))
    }

    return (
      <div name={child.name}>
        <div>{child.label}</div>
        {children}
      </div>
    )
  }
}
