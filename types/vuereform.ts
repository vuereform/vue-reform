enum VueReformElementTypes {
  text = 'text',
  textarea = 'textarea',
  checkboxes = 'checkboxes',
  radios = 'radios',
  rule = 'rule',
  date = 'date',
  time = 'time',
  select = 'select',
  header = 'header'
}

enum VueReformContainerTypes {
  section = 'section',
  group = 'group'
}

interface VueReformElement {
  name: string
  label: string
  type: VueReformElementTypes
}

interface VueReformContainer {
  name: string
  label: string
  type: VueReformContainerTypes
  elements: VueReformElement[]
}

interface VueReformForm {
  name: string
  label: string
  containers: VueReformContainer[]
}

interface VueReformRenderable {
  render(): void
}
