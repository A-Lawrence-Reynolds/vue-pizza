<template>
  <div class="login-wrapper">
    <form>
      <div>
        <label for="email">Email</label>
        <input
          v-model="email"
          type="email"
          id="email"
          placeholder="Enter Email"
        >
      </div>
      <div>
        <label for="password">Password</label>
        <input
          v-model="password"
          type="password"
          id="password"
          placeholder="Password"
        >
      </div>
      <button
        class="btn_green"
        type='button'
        @click.prevent="signIn"
      >Sign in </button>
    </form>

  </div>
</template>
<script>
import { firebaseAuth } from "../firebase";
export default {
 
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async signIn() {
      try {
        await firebaseAuth.signInWithEmailAndPassword(
          this.email,
          this.password
        );
      } catch (error) {
          const errorCode = error.code
          const errorMessage = error.message
          if (errorCode === 'auth/wrong-password') {
              alert('Wrong password entered')
          } else {
              alert(errorMessage)
          }
      }
    }
  }
};
</script>
<style scoped>
button {
  background-color: rgb(63, 145, 63);
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
}
</style>