<template>
  <div class="login-container">
    <div class="login-box">
      <h2 class="login-title">Selamat Datang!</h2>
      <form @submit.stop="login" class="login-form"> <!-- Menggunakan @submit.stop -->
        <div class="form-group">
          <input type="email" id="email" v-model="email" class="form-input" placeholder="Email" required>
        </div>
        <div class="form-group">
          <input type="password" id="password" v-model="password" class="form-input" placeholder="Password" required>
        </div>
        <div class="form-group">
          <button type="submit" class="login-btn">Login</button>
        </div>
      </form>
      <div class="extra-options">
        <router-link to="/lupa-password" class="extra-link">Lupa password?</router-link>
        <router-link to="/register" class="extra-link">Buat akun baru</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Proses login akan ditambahkan di sini
      console.log('Login dengan email:', this.email, 'dan password:', this.password);
      
      // Contoh sederhana: pengarahan ke BerandaPage.vue setelah login berhasil
      this.$router.push('/beranda'); // Gunakan '/beranda' (huruf kecil) sebagai path
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
}

.login-box {
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.login-title {
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

.login-btn {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-btn:hover {
  background-color: #0056b3;
}

.extra-options {
  text-align: center;
  margin-top: 20px;
}

.extra-link {
  margin-right: 10px;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.extra-link:hover {
  color: #0056b3;
}
</style>
