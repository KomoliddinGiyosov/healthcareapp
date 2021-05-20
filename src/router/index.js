import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Doctors from '../views/Doctors.vue'
import Patients from '../views/Patients.vue'
import Doctor from '../components/Doctors/doctor.vue'
import Patient from '../components/Patients/patient.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/doctors',
    name:'Doctors',
    component: Doctors
  },
  {
    path:'/patients',
    name:'Patients',
    component: Patients
  },

  {
    path:'/doctor/:id',
    name:'Doctor',
    component: Doctor
  },
  {
    path:'/patient/:id',
    name:'Patient',
    component: Patient
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
