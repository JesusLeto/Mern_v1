<template>
  <div
    class="vcl-input"
  >
    <label
        v-if="!!labelText"
        class="label"
    >
      {{labelText}}
    </label>
    <input
        type="text"
        :value="value"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator";

@Component
export default class VclInput extends Vue {

  @Prop({type: String, default: ""})
  readonly placeholder?: string

  @Prop({type: String, default: ""})
  readonly value?: string

  @Prop({type: String, default: ""})
  readonly ClassType?: string

  @Prop({type: String, default: ""})
  readonly labelText?: string

}
</script>

<style scoped lang="scss">

.vcl-input {
    width: 100%;
    margin-bottom: 36px;

  input {
    width: 100%;
    height: 30px;
  }
}

</style>