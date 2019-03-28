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
  children: FormElement[]
}

export interface Group {
  label: string
  children: FormElement[]
}

export interface Button {
  label: string
  buttonType: string
}

export type FormElement =
  | Element<Text>
  | Element<Textarea>
  | Element<Section>
  | Element<Group>
  | Element<Button>

export interface Form {
  name: string
  label: string
  children: FormElement[]
}

export interface Renderable {
  render(h: any, formData: Form): void
}

export type RenderFunction<T> = (child: Element<T>) => JSX.Element
