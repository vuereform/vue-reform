import Vue from 'vue'
import * as VueReform from '../../../types/vuereform'

export default class BulmaRenderer extends Vue implements VueReform.Renderable {
  renderFuncs: {
    [renderFuncLabel: string]: VueReform.RenderFunction
  } = {
    text: this.renderTextInput.bind(this),
    textarea: this.renderTextarea.bind(this),
    section: this.renderSection.bind(this),
    group: this.renderGroup.bind(this),
    button: this.renderButton.bind(this)
  }

  h: any

  render(h: any, formData: VueReform.Form) {
    if (!formData) {
      return
    }

    this.h = h

    const children = []

    for (const child of formData.children) {
      children.push(this.renderFuncs[child.type](child))
    }

    return (
      <form class="form" name={formData.name}>
        {children}
      </form>
    )
  }

  renderTextInput(child: VueReform.Element<VueReform.Text>): JSX.Element {
    return (
      <div class="field">
        <label class="label">{child.label}</label>
        <div class="control">
          <input
            class="input"
            type="text"
            name={child.name}
            placeholder={child.placeholder}
          />
        </div>
      </div>
    )
  }

  renderTextarea(child: VueReform.Element<VueReform.Textarea>): JSX.Element {
    return (
      <div class="field">
        <label class="label">{child.label}</label>
        <div class="control">
          <textarea
            class="textarea"
            name={child.name}
            placeholder={child.placeholder}
          />
        </div>
      </div>
    )
  }

  renderButton(child: VueReform.Element<VueReform.Button>): JSX.Element {
    return (
      <div class="field">
        <div class="control">
          <button
            type={child.buttonType}
            class="button is-link is-pulled-right"
          >
            {child.label}
          </button>
        </div>
      </div>
    )
  }
  renderSection(child: VueReform.Element<VueReform.Section>): JSX.Element {
    const children: any = []

    for (const element of child.children) {
      children.push(this.renderFuncs[element.type](element))
    }

    return (
      <div class="field" name={child.name}>
        <div class="subtitle">{child.label}</div>
        {children}
      </div>
    )
  }

  renderGroup(child: VueReform.Element<VueReform.Group>): JSX.Element {
    const children: any = []

    for (const element of child.children) {
      children.push(this.renderFuncs[element.type](element))
    }

    return (
      <div class="field is-grouped" name={child.name}>
        <div class="form-group-label">{child.label}</div>
        {children}
      </div>
    )
  }
}
