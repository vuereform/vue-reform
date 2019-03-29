import Vue from 'vue'
import * as VueReform from '../../../types/vuereform'

export default class BootstrapRenderer extends Vue
  implements VueReform.Renderable {
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

    return <form name={formData.name}>{children}</form>
  }

  renderTextInput(child: VueReform.Element<VueReform.Text>): JSX.Element {
    return (
      <div class="form-group">
        <label>{child.label}</label>
        <input
          class="form-control"
          type="text"
          name={child.name}
          placeholder={child.placeholder}
        />
      </div>
    )
  }

  renderTextarea(child: VueReform.Element<VueReform.Textarea>): JSX.Element {
    return (
      <div class="form-group">
        <label>{child.label}</label>
        <textarea
          class="form-control"
          name={child.name}
          placeholder={child.placeholder}
        />
      </div>
    )
  }

  renderButton(child: VueReform.Element<VueReform.Button>): JSX.Element {
    return (
      <button type={child.buttonType} class="btn btn-primary float-right">
        {child.label}
      </button>
    )
  }
  renderSection(child: VueReform.Element<VueReform.Section>): JSX.Element {
    const children: any = []

    for (const element of child.children) {
      children.push(this.renderFuncs[element.type](element))
    }

    return (
      <div class="form-group" name={child.name}>
        <h5>{child.label}</h5>
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
      <div class="form-group" name={child.name}>
        <label>{child.label}</label>
        {children}
      </div>
    )
  }
}
