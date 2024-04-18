import { createRouter, createWebHistory } from 'vue-router';
import BerandaPage from '@/components/BerandaPage.vue';
import LoginPage from '@/components/LoginPage.vue';
import LayoutPage from '@/components/LayoutPage.vue';
import RegisterPage from '@/components/RegisterPage.vue';
import LupaPassword from '@/components/LupaPassword.vue';
import DosenPembimbing from '@/components/DosenPembimbing.vue';
import DosenPenguji from '@/components/DosenPenguji.vue';
import InputPembimbing from '@/components/InputPembimbing.vue';
import InputPenguji from '@/components/InputPenguji.vue';
import LihatMahasiswa from '@/components/LihatMahasiswa.vue';
import MahasiswaPage from '@/components/MahasiswaPage.vue';
import ProfilePage from '@/components/ProfilePage.vue';
import BerkasPage from '@/components/BerkasPage.vue';

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },

  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  },
  {
    path: '/lupa-password',
    name: 'LupaPassword',
    component: LupaPassword
  },
  
  {
      path: '/layout',
      name: 'LayoutPage',
      component: LayoutPage,
      children: 
      [
          {
          path: '/beranda',
          name: 'BerandaPage',
          component: BerandaPage
          },
        
          {
            path: '/dosen-pembimbing',
            name: 'DosenPembimbing',
            component: DosenPembimbing
          },
          {
            path: '/dosen-penguji',
            name: 'DosenPenguji',
            component: DosenPenguji
          },
          {
            path: '/input-pembimbing',
            name: 'InputPembimbing',
            component: InputPembimbing
          },
          {
            path: '/input-penguji',
            name: 'InputPenguji',
            component: InputPenguji
          },
        {
          path: '/lihat-mahasiswa',
          name: 'LihatMahasiswa',
          component: LihatMahasiswa,
          props: true
        },
        {
            path: 'profile',
            name: 'ProfilePage',
            component: ProfilePage
        },
        {
            path: '/mahasiswa',
            name: 'MahasiswaPage',
            component: MahasiswaPage
          },      
      ]
    },
    {
      path: '/berkas',
      name: 'BerkasPage',
      component: BerkasPage,
      props: (route) => ({ id: route.query.id }) // Menyediakan prop 'id' dari query string
  }  
  ]


const router = createRouter({
    history: createWebHistory(),
    routes
  });

  
  export default router;