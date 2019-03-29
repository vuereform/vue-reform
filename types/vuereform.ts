export enum ElementTypes {
  text = 'text',
  textarea = 'textarea',
  checkboxes = 'checkboxes',
  radios = 'radios',
  rule = 'rule',
  date = 'date',
  time = 'time',
  select = 'select',
  header = 'header',
  section = 'section',
  group = 'group'
}

export type Element<T> = T & {
  name: string
  label: string
  type: ElementTypes
}

export interface Text {
  placeholder: string
  value: any
}

export interface Textarea {
  placeholder: string
  value: any
}

export interface Section {
  label: string
  children: Array<Element<any>>
}

export interface Group {
  label: string
  children: Array<Element<any>>
}

export interface Button {
  label: string
  buttonType: string
}

export interface Form {
  name: string
  label: string
  children: Array<Element<any>>
}

export interface Renderable {
  render(h: any, formData: Form): void
}

export type RenderFunction = (child: Element<any>) => JSX.Element
