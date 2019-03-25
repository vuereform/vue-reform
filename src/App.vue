<template>
  <div id="app">
    <VueReform/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VueReform from './components/VueReform/VueReform'

@Component({
  components: {
    VueReform
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
</style>
