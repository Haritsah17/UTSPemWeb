<template>
    <div>
        <div class="btn" :class="{ 'click': sidebarOpen }" @click="toggleSidebar">
    <span class="fas fa-bars" style="color: white;"></span>
</div>

        <nav class="sidebar" :class="{ 'show': sidebarOpen }">
            <div class="text">PENTATIF</div>
            <br>
            <ul>
                <li><router-link to="/beranda">beranda</router-link></li>
                <li><router-link to="/mahasiswa">Mahasiswa</router-link></li>
                <li>
                    <a href="#" class="feat-btn" @click="toggleDropdown">
                        Dosen
                        <span class="fas fa-bars" style="color: white;"></span>
                    </a>
                    <ul class="feat-show" v-show="dropdownOpen">
                        <li><router-link to="/dosen-pembimbing">Pembimbing</router-link></li>
                        <li><router-link to="/dosen-penguji">Penguji</router-link></li>
                    </ul>
                </li>
         
            </ul>
        </nav>

        <nav class="navbar">
            <div class="dropdown">
                <button class="dropbtn">Koordinator TA</button>
                <div class="dropdown-content">
                    <router-link to="/">Logout</router-link>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                sidebarOpen: false,
                dropdownOpen: false
            };
        },
        created() {
            this.dropdownOpen = false;
        },
        methods: {
            toggleSidebar() {
                this.sidebarOpen = !this.sidebarOpen;
            },
            toggleDropdown() {
                this.dropdownOpen = !this.dropdownOpen;
            }
        }
    };
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        user-select: none;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    .btn {
    position: absolute;
    top: 85px;
    left: 20px;
    height: 30px;
    width: 30px;
    text-align: center;
    background-image: url('../assets/burger12.png');
/* ganti 'nama_file_gambar_hamburger.png' dengan path atau URL gambar hamburger Anda */
    background-size: contain; /* untuk memastikan gambar sesuai dengan ukuran elemen */
    background-repeat: no-repeat; /* agar gambar tidak diulang */
    cursor: pointer;
    transition: left 0.4s ease;
}


    .btn.click {
        left: calc(175px + 2px); /* Width of sidebar + width of button */
    }

    .btn span {
        color: white;
        font-size: 28px;
        line-height: 45px;
    }

    .sidebar {
        position: fixed;
        width: 150px;
        height: 100%;
        left: -250px;
        background: #9AC8CD;
        transition: left 0.4s ease;
    }

    .sidebar.show {
        left: 0px;
    }

    .sidebar .text {
        color: white;
        font-size: 25px;
        font-weight: 600;
        line-height: 65px;
        text-align: center;
        background: #9AC8CD;
        letter-spacing: 1px;
    }

    nav ul {
        background: #9AC8CD;
        height: 100%;
        width: 100%;
        list-style: none;
    }

    nav ul li {
        line-height: 60px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    nav ul li:last-child {
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    nav ul li a {
        position: relative;
        color: white;
        text-decoration: none;
        font-size: 15px;
        padding-left: 20px;
        font-weight: 500;
        display: block;
        width: 100%;
        border-left: 3px solid transparent;
        transition: background-color 0.3s;
    }

    nav ul li.active a {
        color: cyan;
        background: #9AC8CD;
        border-left-color: cyan;
    }

    nav ul li a:hover {
        background: cyan;
    }

    nav ul ul {
        position: static;
        display: none;
    }

    nav ul .feat-show {
        display: block;
    }

    nav ul ul li {
        line-height: 42px;
        border-top: none;
    }

    nav ul ul li a {
        font-size: 15px;
        color: #e6e6e6;
        padding-left: 30px;
    }

    nav ul li.active ul li a {
        color: #e6e6e6;
        background: #9AC8CD;
        border-left-color: transparent;
    }

    nav ul ul li a:hover {
        color: cyan !important;
        background: #9AC8CD !important;
    }

    nav ul li a span {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        font-size: 22px;
        transition: transform 0.4s;
    }

    nav ul li a span.rotate {
        transform: translateY(-50%) rotate(-180deg);
    }

    .navbar {
        overflow: hidden;
        background-color: #9AC8CD;
        padding: 1%;
    }

    .dropdown {
        float: right;
        overflow: hidden;
    }

    .dropbtn {
        font-size: 16px;
        border: none;
        outline: none;
        color: white;
        background-color: inherit;
        margin: 0;
        padding: 14px 16px;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f60707;
        border-radius: 30px;
        min-width: 160px;
        z-index: 1;
    }

    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        text-align: center;
        display: block;
    }

    .dropdown-content a:hover {
        border-radius: 30px;
        background-color: #ddd;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }
</style>
