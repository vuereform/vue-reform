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

export interface Element {
  name: string
  label: string
  type: ElementTypes
}

export type TextElement<T extends any> = T & {
  placeholder: string
  value: any
}

export type TextareaElement<T extends any> = T & {
  placeholder: string
  value: any
}

export type SectionElement<T extends any> = T & {
  label: string
  children: Element[]
}

export type GroupElement<T extends any> = T & {
  label: string
  children: Element[]
}

export type FormElement =
  | TextElement<Element>
  | TextareaElement<Element>
  | SectionElement<Element>
  | GroupElement<Element>

export interface Form {
  name: string
  label: string
  children: Element[]
}

export interface Renderable {
  render(): void
}
