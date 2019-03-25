export type TextElement<T extends any> = T & {
  placeholder: string
  value: any
}

export type TextareaElement<T extends any> = T & {
  placeholder: string
  value: any
}

export enum ElementTypes {
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

export enum ContainerTypes {
  section = 'section',
  group = 'group'
}

export interface Element {
  name: string
  label: string
  type: ElementTypes
}

export interface Container {
  name: string
  label: string
  type: ContainerTypes
  elements: Array<TextElement<Element> | TextareaElement<Element>>
}

export interface Form {
  name: string
  label: string
  containers: Container[]
}

export interface Renderable {
  render(): void
}
