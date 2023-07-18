<template>
  <q-page class="row items-center justify-evenly">
    <q-card style="width: 800px">
      <q-card-section>
        <h5>Вход</h5>
        <q-form @submit="submit">
          <q-input filled v-model="email" label="Email" type="email" />
          <q-input
            filled
            v-model="password"
            label="Password"
            type="password"
            style="margin-top: 15px"
          />
          <q-btn
            type="submit"
            label="Войти"
            color="primary"
            :disable="!email || !password"
          />
          <q-btn
            flat
            label="Зарегестрироваться"
            type="link"
            to="/register"
            color="primary"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { login } from '../boot/service';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    async submit() {
      try {
        const data = await login({
          email: this.email,
          password: this.password,
        });
        if (data.data.token) {
          this.$router.push('/profile');
          localStorage.setItem('access_token', data.data.token);
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  },
};
</script>
