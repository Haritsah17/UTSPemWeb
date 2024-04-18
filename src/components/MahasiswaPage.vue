<template>
  <div class="table-container">
    <h2 class="page-title">DATA MAHASISWA</h2>
    <div v-if="!isAddingData">
      <div class="search-container">
        <input type="text" v-model="searchText" placeholder="Cari Mahasiswa..." class="search-input">
      </div>
      <table class="custom-table">
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Nama</th>
            <th>NIM</th>
            <th>Email</th>
            <th>Judul</th>
            <th>Status</th>
            <th>Dosen Pembimbing</th>
            <th>Dosen Penguji</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(mahasiswa, index) in filteredData" :key="index" class="data-row">
            <td>{{ mahasiswa.tanggal }}</td>
            <td>{{ mahasiswa.nama }}</td>
            <td>{{ mahasiswa.nim }}</td>
            <td>{{ mahasiswa.email }}</td>
            <td>{{ mahasiswa.judul }}</td>
            <td>{{ mahasiswa.status }}</td>
            <td>{{ mahasiswa.dosenPembimbing }}</td>
            <td>{{ mahasiswa.dosenPenguji }}</td>
            <td>
              <button @click="editMahasiswa(index)" class="btn edit-btn">Edit</button>
              <span class="button-space"></span>
              <button @click="goToBerkas(mahasiswa)" class="btn berkas-btn">Berkas</button>
              <span class="button-space"></span>
              <button @click="deleteItem(index)" class="btn delete-btn">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="tambahData" class="btn tambah-btn">Tambah Data</button>
    </div>
    <div v-else class="form-container">
      <!-- Judul form sesuai kondisi -->
      <h2 v-if="selectedIndex === -1" class="page-title">Tambah Data Mahasiswa</h2>
      <h2 v-else class="page-title">Edit Data Mahasiswa</h2>
      <!-- Konten form -->
      <div class="form-group">
        <label for="tanggal">Tanggal:</label>
        <input type="text" v-model="selectedMahasiswa.tanggal" id="tanggal" class="form-input">
      </div>
      <div class="form-group">
        <label for="nama">Nama:</label>
        <input type="text" v-model="selectedMahasiswa.nama" id="nama" class="form-input">
      </div>
      <div class="form-group">
        <label for="nim">NIM:</label>
        <input type="text" v-model="selectedMahasiswa.nim" id="nim" class="form-input">
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="text" v-model="selectedMahasiswa.email" id="email" class="form-input">
      </div>
      <div class="form-group">
        <label for="judul">Judul:</label>
        <input type="text" v-model="selectedMahasiswa.judul" id="judul" class="form-input">
      </div>
      <div class="form-group">
        <label for="dosenPembimbing">Dosen Pembimbing:</label>
        <input type="text" v-model="selectedMahasiswa.dosenPembimbing" id="dosenPembimbing" class="form-input">
      </div>
      <div class="form-group">
        <label for="dosenPenguji">Dosen Penguji:</label>
        <input type="text" v-model="selectedMahasiswa.dosenPenguji" id="dosenPenguji" class="form-input">
      </div>
      <div class="form-group">
        <label for="status">Status:</label>
        <select v-model="selectedMahasiswa.status" id="status" class="form-input">
          <option value="Diterima">Diterima</option>
          <option value="Ditolak">Ditolak</option>
        </select>
      </div>
      <div class="button-group">
        <button v-if="selectedIndex === -1" @click="tambahData" class="btn tambah-btn">Tambah</button>
        <button v-else @click="updateData" class="btn simpan-btn">Simpan</button>
        <button @click="batalEdit" class="btn batal-btn">Batal</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      searchText: '',
      isAddingData: false,
      selectedMahasiswa: {
        tanggal: '',
        nama: '',
        nim: '',
        email: '',
        judul: '',
        dosenPembimbing: '',
        dosenPenguji: '',
        status: ''
      },
      selectedIndex: -1
    };
  },
  computed: {
    filteredData() {
      return this.data.filter(mahasiswa => {
        return mahasiswa.nama.toLowerCase().includes(this.searchText.toLowerCase());
      });
    }
  },
  methods: {
    deleteItem(index) {
      this.data.splice(index, 1);
      this.simpanKeLocalStorage();
    },
    editMahasiswa(index) {
      this.selectedIndex = index;
      this.selectedMahasiswa = Object.assign({}, this.filteredData[index]);
      this.isAddingData = true;
    },
    updateData() {
      if (this.selectedMahasiswa.tanggal && this.selectedMahasiswa.nama && this.selectedMahasiswa.nim &&
          this.selectedMahasiswa.email && this.selectedMahasiswa.judul && this.selectedMahasiswa.dosenPembimbing &&
          this.selectedMahasiswa.dosenPenguji && this.selectedMahasiswa.status) {
        if (this.selectedIndex === -1) {
          this.data.push(this.selectedMahasiswa);
        } else {
          this.data.splice(this.selectedIndex, 1, this.selectedMahasiswa);
        }
        this.simpanKeLocalStorage();
        this.selectedMahasiswa = {
          tanggal: '',
          nama: '',
          nim: '',
          email: '',
          judul: '',
          dosenPembimbing: '',
          dosenPenguji: '',
          status: ''
        };
        this.isAddingData = false;
        this.selectedIndex = -1;
      } else {
        alert('Harap lengkapi semua kolom!');
      }
    },
    batalEdit() {
      this.selectedMahasiswa = {
        tanggal: '',
        nama: '',
        nim: '',
        email: '',
        judul: '',
        dosenPembimbing: '',
        dosenPenguji: '',
        status: ''
      };
      this.isAddingData = false;
      this.selectedIndex = -1;
    },
    tambahData() {
      this.isAddingData = true;
      this.selectedMahasiswa = {
        tanggal: '',
        nama: '',
        nim: '',
        email: '',
        judul: '',
        dosenPembimbing: '',
        dosenPenguji: '',
        status: ''
      };
      this.selectedIndex = 1;
    },
    simpanKeLocalStorage() {
      localStorage.setItem('mahasiswaData', JSON.stringify(this.data));
    },
    goToBerkas(mahasiswa) {
      // Implementasi fungsi goToBerkas
      // Misalnya, gunakan `$router` untuk berpindah ke rute yang benar
      this.$router.push({ path: `/berkas`, query: { id: mahasiswa.id } });
    }
  },
  created() {
    const savedData = localStorage.getItem('mahasiswaData');
    if (savedData) {
      this.data = JSON.parse(savedData);
    }
  }
};
</script>

<style scoped>
/* Gaya lainnya tidak berubah */
.table-container {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.page-title {
  margin-bottom: 20px;
  color: #333;
  font-size: 24px;
}

.search-container {
  margin-bottom: 20px;
}

.search-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  font-size: 12px; /* Ukuran font diubah menjadi 12px */
}

.custom-table th,
.custom-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.custom-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.data-row:hover {
  background-color: #f2f2f2;
}

.btn {
  padding: 6px 7px; /* Mengurangi padding dari 8px 12px menjadi 6px 10px */
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  outline: none;
}

.edit-btn {
  background-color: #b1b1b1;
  color: #333;
}

.delete-btn {
  background-color: #dc3545;
  color: #fff;
}

.tambah-btn {
  background-color: #28a745;
  color: #fff;
}

.simpan-btn {
  background-color: #007bff;
  color: #fff;
}

.batal-btn {
  background-color: #6c757d;
  color: #fff;
}

.btn-space {
  margin-right: 5px;
}

.form-container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
}

.form-input {
  width: calc(100% - 20px);
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 12px; /* Ukuran font diubah menjadi 12px */
}

.button-group {
  display: flex;
  justify-content: space-between;
}
</style>
