<template>
  <form
    class="login"
    @submit.prevent="authenticate">
    <img src="../assets/logo.png">
    <section class="login__email">
      <label for="email">Email</label>
      <input
        v-model="username"
        type="email">
    </section>
    <section class="login__password">
      <label for="password">Password</label>
      <input
        v-model="password"
        type="password">
    </section>
    <input
      type="submit"
      class="login__submit"
      value="Login"
    >
  </form>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      username: '',
      password: '',
    };
  },

  methods: {
    authenticate() {
      const [username, password] = [this.username, this.password];

      this
        .$store
        .dispatch('USER_AUTHENTICATION', { username, password })
        .then(() => {
          this.$router.push('/news');
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>

.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  padding-top: 40px;
}

.login__email,
.login__password {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  text-transform: uppercase;
  font-size: 13px;
}

.login__password {
  margin-top: 30px;
}

.login__submit {
  margin-top: 20px;
  padding: 10px;
  border-radius: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
}

</style>
