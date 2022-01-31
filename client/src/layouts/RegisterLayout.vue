<template>
  <div
    class="register-layout"
  >
      <div
          class="auth-img"
      />
      <div
          class="auth-form"
      >
        <vcl-form
          :title="titleText"
        >
          <vcl-input/>
          <vcl-input/>
          <vcl-input/>
          <vcl-input/>
        </vcl-form>
      </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import VclForm from "@/components/vcl-form.vue";
import VclInput from "@/components/vcl-input.vue";

@Component({
  components: {
    VclForm,
    VclInput
  }
})
export default class RegisterLayout extends Vue{
  titleText = "Sign Up";
}
</script>

<style scoped lang="scss">

.register-layout {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;

  .auth-img {
    width: 40%;
    height: 100%;
    background-image: url("../assets/Sing_up.png");
    background-size: cover;
  }

  .auth-form {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;

  }
}



</style>