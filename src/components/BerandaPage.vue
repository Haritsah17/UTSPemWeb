<template>
  <div class="home-container">
    <h1 class="title">Selamat Datang di <span class="highlight">PENTATIF</span></h1>
    <p class="subtitle">(Pendaftaran Tugas Akhir Teknik Informatika)</p>
    <p class="description">Aplikasi untuk mengelola pendaftaran dan informasi Tugas Akhir mahasiswa dengan mudah.</p>
  </div>
</template>

<script>
export default {
  name: 'BerandaPage'
};
</script>

<style scoped>
.home-container {
  text-align: center;
  padding: 50px 0;
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.title {
  font-size: 36px;
  margin-bottom: 10px;
}

.highlight {
  color: #007bff; /* Warna biru yang menarik perhatian */
}

.subtitle {
  font-size: 24px;
  margin-bottom: 30px;
}

.description {
  font-size: 18px;
}
</style>
