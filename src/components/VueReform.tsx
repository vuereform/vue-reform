import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import * as VueReform from '../../types/vuereform'

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
    required: true
  })
  renderer!: VueReform.Renderable | null | undefined

  render() {
    if (this.renderer) {
      return this.renderer.render(this.$createElement, this.formData)
    }
  }
}
