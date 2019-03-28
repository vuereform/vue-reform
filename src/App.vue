<template>
  <div id="app">
    <div class="section">
      <div class="container">
        <div class="level">
          <div class="level-item">
            <div>
              <vue-reform :form-data="formData" renderer="bulma"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VueReform from './components/VueReform'

@Component({
  components: {
    VueReform
  }
})
export default class App extends Vue {
  formData = {
    name: 'default',
    label: 'Default',
    children: [
      {
        label: 'Default Section',
        type: 'section',
        children: [
          {
            label: 'Default Field',
            name: 'default-field',
            type: 'text',
            placeholder: 'Placeholder',
            value: ''
          },
          {
            label: 'Default Textarea',
            name: 'default-textarea',
            type: 'textarea',
            placeholder: 'Placeholder',
            value: ''
          },
          {
            label: 'Child section',
            type: 'section',
            children: [
              {
                label: 'Sub Field',
                name: 'sub-field',
                type: 'text',
                placeholder: 'WHEEEE',
                value: ''
              }
            ]
          }
        ]
      },
      {
        label: 'Submit',
        type: 'button',
        buttonType: 'submit'
      }
    ]
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.form {
  max-width: 400px;
}
</style>
