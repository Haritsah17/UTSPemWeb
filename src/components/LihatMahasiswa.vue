<template>
  <div class="modal" :class="{ 'is-active': showModal }">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content">
      <div class="box">
        <h2 class="title">Detail Mahasiswa</h2>
        <div v-if="Mahasiswa">
          <p><strong>Nama:</strong> {{ Mahasiswa.nama }}</p>
          <p><strong>Tanggal:</strong> {{ Mahasiswa.tanggal }}</p>
          <p><strong>NIM:</strong> {{ Mahasiswa.nim }}</p>
          <p><strong>Email:</strong> {{ Mahasiswa.email }}</p>
          <p><strong>Judul:</strong> {{ Mahasiswa.judul }}</p>
          <p><strong>Status:</strong> {{ Mahasiswa.status }}</p>
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
  </div>
</template>


<script>
export default {
  props: {
    mahasiswa: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      showModal: false
    };
  },
  watch: {
    mahasiswa: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          // Jika ada data mahasiswa, aktifkan modal
          this.showModal = true;
        }
      }
    }
  },
  methods: {
    closeModal() {
      // Menonaktifkan modal dan memberi tahu komponen induk untuk mengatur ulang data mahasiswa
      this.showModal = false;
      this.$emit('close');
    }
  }
};

</script>

<style scoped>
/* Gaya untuk modal */
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal-content {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  max-width: 600px;
  width: 100%;
  max-height: 80%;
  overflow-y: auto;
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  cursor: pointer;
}

/* Gaya untuk konten detail mahasiswa */
.title {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

p {
  margin: 10px 0;
  color: #555;
}

p strong {
  font-weight: bold;
  margin-right: 5px;
  color: #333;
}
</style>
