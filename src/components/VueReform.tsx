import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import * as VueReform from '../../types/vuereform'

import DefaultRenderer from './renderers/DefaultRenderer'
import BulmaRenderer from './renderers/BulmaRenderer'

@Component({
  name: 'VueReform'
})
export default class extends Vue {
  @Prop({
    default: () => {
      return {}
    }
  })
  formData!: VueReform.Form

  @Prop({
    default: 'default'
  })
  renderer!: string
  private renderers: { [name: string]: VueReform.Renderable } = {
    default: new DefaultRenderer(),
    bulma: new BulmaRenderer()
  }
  render() {
    return this.renderers[this.renderer].render(
      this.$createElement,
      this.formData
    )
  }
}
