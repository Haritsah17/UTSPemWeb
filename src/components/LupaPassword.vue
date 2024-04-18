<template>
  <div class="lupa-password-container">
    <div class="lupa-password-box">
      <h2 class="lupa-password-title">Lupa Password?</h2>
      <p class="lupa-password-text">Silakan masukkan email Anda di bawah ini untuk mereset password:</p>
      <form @submit.prevent="submitEmail" class="lupa-password-form">
        <div class="form-group">
          <input type="email" v-model="email" class="form-input" placeholder="Email" required>
        </div>
        <div class="form-group">
          <button type="submit" class="submit-btn">Reset Password</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: ''
    };
  },
  methods: {
    submitEmail() {
      // Proses pengiriman email reset password
      console.log('Mengirim email reset password ke:', this.email);
    }
  }
};
</script>

<style scoped>
.forgot-password-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
}

.lupa-password-box {
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.lupa-password-title {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.lupa-password-text {
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

.submit-btn {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #0056b3;
}
</style>
