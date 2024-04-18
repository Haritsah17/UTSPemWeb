<template>
    <div class="berkas-container">
      <h2 class="page-title">Berkas Mahasiswa</h2>
      <div v-if="mahasiswa">
        <div class="berkas-info">
          <p><strong>Nama:</strong> {{ mahasiswa.nama }}</p>
          <p><strong>NIM:</strong> {{ mahasiswa.nim }}</p>
          <p><strong>Email:</strong> {{ mahasiswa.email }}</p>
          <p><strong>Judul:</strong> {{ mahasiswa.judul }}</p>
          <p><strong>Status:</strong> {{ mahasiswa.status }}</p>
        </div>
        <!-- Jika ada berkas, tampilkan -->
        <div v-if="mahasiswa.berkas">
          <h3>Berkas:</h3>
          <ul>
            <li v-for="(file, index) in mahasiswa.berkas" :key="index">
              <a :href="file.url" target="_blank">{{ file.nama }}</a>
            </li>
          </ul>
        </div>
        <!-- Jika tidak ada berkas, tampilkan pesan -->
        <div v-else>
          <p>Tidak ada berkas untuk ditampilkan.</p>
        </div>
      </div>
      <!-- Jika tidak ada data mahasiswa yang dipilih, tampilkan pesan -->
      <div v-else>
        <p>Silakan pilih data mahasiswa terlebih dahulu.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        mahasiswa: null
      };
    },
    created() {
      // Ambil data mahasiswa dari local storage atau sumber data lainnya
      const mahasiswaData = localStorage.getItem('mahasiswaData');
      if (mahasiswaData) {
        this.mahasiswa = JSON.parse(mahasiswaData);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Gaya untuk berkas container */
  .berkas-container {
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  /* Gaya untuk berkas info */
  .berkas-info {
    background-color: #f9f9f9;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  
  /* Gaya untuk tautan berkas */
  .berkas-info a {
    color: #007bff;
    text-decoration: none;
  }
  
  /* Gaya lainnya tidak berubah */
  .page-title {
    margin-bottom: 20px;
    color: #333;
    font-size: 24px;
  }
  </style>
  