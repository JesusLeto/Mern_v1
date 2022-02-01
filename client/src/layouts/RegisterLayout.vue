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
          <vcl-input
              label-text="Name"
              v-model="currentUser.name"
          />
          <vcl-input
              label-text="Email"
              v-model="currentUser.email"
          />
          <vcl-input
              label-text="Password"
              v-model="currentUser.password"
          />
          <div>
          </div>
          <button @click="RegisterUser">click</button>
        </vcl-form>
      </div>

  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator";
import VclForm from "@/components/vcl-form.vue";
import VclInput from "@/components/vcl-input.vue";
import router from "@/router";

@Component({
  components: {
    VclForm,
    VclInput
  }
})

export default class RegisterLayout extends Vue{

  mounted() {
    if(this.$vclStore.user.getCurrentUser.isAuth){
      router.push({path: "/"})
    }
  }

  @Watch('$vclStore.user.getCurrentUser.errorAuth')
  changeAuthError(){
      this.authError = this.$vclStore.user.getCurrentUser.errorAuth
  }

  @Watch('$vclStore.user.getCurrentUser.isAuth')
  redirectFromAutorisation(){
    if(this.$vclStore.user.getCurrentUser.isAuth)
      router.push({path: "/"})
  }

  titleText = "Sign Up";

  currentUser = this.$vclStore.user.getCurrentUser

  authError = ""


  RegisterUser() {
    this.$vclStore.user.RegisterNewUser(this.currentUser)
  }

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