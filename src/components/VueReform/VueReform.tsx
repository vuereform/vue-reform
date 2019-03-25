import { Vue, Prop, Component } from 'vue-property-decorator'

Component({})
export default class VueReform extends Vue {
  @Prop({}) form: any = {}

  render() {
    return <div>I'm rendered!</div>
  }
}
