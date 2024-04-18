<template>
  <div class="register-container">
    <div class="register-box">
      <h2 class="register-title">Buat Akun Baru</h2>
      <form @submit.prevent="register" class="register-form">
        <div class="form-group">
          <input type="text" v-model="name" class="form-input" placeholder="Nama" required>
        </div>
        <div class="form-group">
          <input type="email" v-model="email" class="form-input" placeholder="Email" required>
        </div>
        <div class="form-group">
          <input type="password" v-model="password" class="form-input" placeholder="Password" required>
        </div>
        <div class="form-group">
          <button type="submit" class="register-btn">Daftar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    register() {
      // Proses pendaftaran akun baru
      console.log('Mendaftar dengan nama:', this.name, 'email:', this.email, 'dan password:', this.password);
    }
  }
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
}

.register-box {
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.register-title {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.register-btn {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.register-btn:hover {
  background-color: #0056b3;
}
</style>
