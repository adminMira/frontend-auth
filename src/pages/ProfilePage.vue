<template>
  <q-page class="row items-center justify-evenly">
    <q-card style="width: 800px">
      <q-card-section>
        <q-form @submit="submit">
          <h5>Профиль {{ this.email }}</h5>
          <q-input filled v-model="this.name" label="имя" />
          <q-input filled v-model="this.phone" label="телефон" />
          <q-input filled v-model="this.address" label="адрес" />
          <q-input filled v-model="this.about" type="textarea" label="о себе" />
          <q-btn type="submit" label="Изменить" color="primary" />
          <q-btn v-on:click="logout" to="/" label="Выйти" color="red" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { getMe, update } from '../boot/service';
export default {
  data() {
    return {
      email: '',
      name: '',
      phone: '',
      address: '',
      about: '',
    };
  },
  async created() {
    try {
      const { data } = await getMe();
      this.email = data.email;
      this.name = data.name;
      this.phone = data.phone;
      this.address = data.address;
      this.about = data.about;
    } catch (error) {
      this.$router.push({ path: '/' });
    }
  },

  methods: {
    async submit() {
      await update({
        email: this.email,
        name: this.name,
        phone: this.phone,
        address: this.address,
        about: this.about,
      });
    },
    logout() {
      localStorage.clear();
    },
  },
};
</script>
