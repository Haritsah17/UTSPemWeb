<template>
  <div class="dosen-container">
    <h2 class="page-title">DATA DOSEN PEMBIMBING</h2>
    <div v-if="!isAddingData">
      <div class="search-container">
        <input type="text" v-model="searchText" placeholder="Cari Dosen..." class="search-input">
      </div>
      <table class="custom-table">
        <thead>
          <tr>
            <th>Nama</th>
            <th>NIDN</th>
            <th>Jenis Kelamin</th>
            <th>Kuota</th>
            <th>Keahlian</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(dosen, index) in filteredData" :key="index">
            <td>{{ dosen.nama }}</td>
            <td>{{ dosen.nidn }}</td>
            <td>{{ dosen.jenisKelamin }}</td>
            <td>{{ dosen.kuota }}</td>
            <td>{{ dosen.keahlian }}</td>
            <td>
              <button @click="editDosen(dosen)" class="btn edit-btn">Edit</button>
              <span class="btn-space"></span>
              <button @click="deleteDosen(index)" class="btn delete-btn">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="tambahData" class="btn tambah-btn">{{ isEditing ? 'Batal Edit' : 'Tambah Data' }}</button>
    </div>
    <div v-else>
      <h2 class="page-title">{{ isEditing ? 'Edit Data Dosen' : 'Tambah Data Dosen' }}</h2>
      <div class="form-container">
        <div class="form-group">
          <label for="nama">Nama:</label>
          <input type="text" v-model="formData.nama" id="nama" class="form-input">
        </div>
        <div class="form-group">
          <label for="nidn">NIDN:</label>
          <input type="text" v-model="formData.nidn" id="nidn" class="form-input">
        </div>
        <div class="form-group">
          <label for="jenisKelamin">Jenis Kelamin:</label>
          <select v-model="formData.jenisKelamin" id="jenisKelamin" class="form-input">
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </div>
        <div class="form-group">
          <label for="kuota">Kuota:</label>
          <input type="number" v-model.number="formData.kuota" id="kuota" class="form-input">
        </div>
        <div class="form-group">
          <label for="keahlian">Keahlian:</label>
          <input type="text" v-model="formData.keahlian" id="keahlian" class="form-input">
        </div>
        <div class="button-group">
          <button @click="simpanData" class="btn simpan-btn">{{ isEditing ? 'Simpan' : 'Tambah' }}</button>
          <button @click="batalEdit" class="btn batal-btn">Batal</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: JSON.parse(localStorage.getItem('dosenData')) || [],
      searchText: '',
      isAddingData: false,
      isEditing: false,
      editedIndex: null,
      formData: {
        nama: '',
        nidn: '',
        jenisKelamin: 'Laki-laki',
        kuota: '',
        keahlian: ''
      }
    };
  },
  computed: {
    filteredData() {
      return this.data.filter(dosen => {
        return dosen.nama.toLowerCase().includes(this.searchText.toLowerCase());
      });
    }
  },
  methods: {
    deleteDosen(index) {
      this.data.splice(index, 1);
      this.simpanKeLocalStorage();
    },
    editDosen(dosen) {
      this.isEditing = true;
      this.isAddingData = true;
      this.editedIndex = this.data.indexOf(dosen);
      this.formData = { ...dosen };
    },
    tambahData() {
      this.isAddingData = true;
      this.isEditing = false;
      this.resetForm();
    },
    simpanData() {
      if (this.formData.nama && this.formData.nidn && this.formData.kuota &&
          this.formData.keahlian) {
        if (this.isEditing) {
          this.data.splice(this.editedIndex, 1, this.formData);
        } else {
          this.data.push({ ...this.formData });
        }
        this.simpanKeLocalStorage();
        this.resetForm();
        this.isAddingData = false;
      } else {
        alert('Harap lengkapi semua kolom!');
      }
    },
    batalEdit() {
      this.resetForm();
      this.isAddingData = false;
    },
    resetForm() {
      this.formData = {
        nama: '',
        nidn: '',
        jenisKelamin: 'Laki-laki',
        kuota: '',
        keahlian: ''
      };
      this.isEditing = false;
      this.editedIndex = null;
    },
    simpanKeLocalStorage() {
      localStorage.setItem('dosenData', JSON.stringify(this.data));
    }
  }
};
</script>

<style scoped>
.dosen-container {
  padding: 20px;
}

.page-title {
  margin-bottom: 20px;
  color: #333;
}

.search-container {
  margin-bottom: 20px;
}

.search-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
}

.custom-table th,
.custom-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.custom-table th {
  background-color: #f2f2f2;
}

.btn {
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  outline: none;
}

.edit-btn {
  background-color: #007bff;
  color: #fff;
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
  background-color: #dc3545;
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
}

.button-group button {
  margin-right: 10px;
}

.button-group button:last-child {
  margin-right: 0;
}

.btn:hover {
  filter: brightness(0.9);
}

.btn:hover {
  background-color: #0056b3;
}

.delete-btn:hover {
  background-color: #c82333;
}
</style>
