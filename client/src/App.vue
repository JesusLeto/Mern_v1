<template>
  <div id="app">
    <div>
      {{"App"}}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from "vue-property-decorator";

@Component
export default class App extends Vue {
  mounted() {
    const currentState = this.$vclStore
  }
}

</script>

<style lang="scss">
</style>
