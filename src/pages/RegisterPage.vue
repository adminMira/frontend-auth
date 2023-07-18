<template>
  <q-page class="row items-center justify-evenly">
    <q-card style="width: 800px">
      <q-card-section>
        <h5>Регистрация</h5>
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
            label="Зарегистрироваться"
            color="primary"
            :disable="!email || !password"
          />
          <q-btn flat label="Войти" type="link" to="/" color="primary" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { register } from '../boot/service';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    async submit() {
      console.log(1);
      try {
        const data = await register({
          email: this.email,
          password: this.password,
        });
        if (data.data.token) {
          this.$router.push('/profile');
          localStorage.setItem('access_token', data.data.token);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
