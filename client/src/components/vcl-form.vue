<template>
  <div
      class="vcl-form"

  >
    <div
        class="title"
        v-if="title"
    >
      {{title}}
    </div>

    <div
        class="title"
        v-if="subtitle"
    >
      {{subtitle}}
    </div>

    <div
       class="main-content"
    >
      <slot/>
    </div>

  </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator";

@Component
export default class VclForm extends Vue{
  @Prop({type: String, default: ""})
  readonly title?: String

  @Prop({type: String, default: ""})
  readonly subtitle?: String
}
</script>

<style scoped lang="scss">

.vcl-form {
    width: 385px;
    display: flex;
    flex-direction: column;
    align-items: center;

  .title {
    font-size: 45px;
    color: #4F4F4F;
    line-height: 53px;
    letter-spacing: 0.15em;
    margin-bottom: 41px;
  }

  .main-content {
    width: 100%;
  }
}

</style>