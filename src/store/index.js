import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    doctors:[],
    isModal:false,
    isEditModal:false,
    patients:[],
    newModal:false,
    newEditModal:false,
    
  },
  mutations: {
    toDoctors(state,payload){
      state.doctors = payload
    },
    toPatients(state,payload){
      state.patients = payload
    },
    isModalToggle(state,payload){
      state.isModal = payload
    },
    newModalToggle(state,payload){
      state.newModal = payload
    },
    isEditModalToggle(state,payload){
      state.isEditModal = payload
    },
    newEditModalToggle(state,payload){
      state.newEditModal = payload
    },
    addToDoctors(state,payload){
      state.doctors.push(payload)
    },
    addToPatients(state,payload){
      state.patients.push(payload)
    },
    delDoctorId(state,payload){
      state.doctors.splice(payload, 1)
    },
    delPatientId(state,payload){
      state.patients.splice(payload, 1)
    },
    editedDoctor(state,payload){
      state.doctors.find(doctor => {
          if (doctor.id == payload.id){
              doctor = payload
          }
      })
  },
    editedPatient(state,payload){
      state.patients.find(patient => {
          if (patient.id == payload.id){
              patient = payload
          }
      })
  },

  },
  actions: {
    getDoctors(context){
      axios.get('http://localhost:3000/doctors').then(response =>{ 
          context.commit('toDoctors',response.data)
      })
    },
    getPatients(context){
      axios.get('http://localhost:3000/patients').then(response =>{ 
          context.commit('toPatients',response.data)
      })
    },
    addDoctor(context,payload){
      axios.post('http://localhost:3000/doctors',payload).then(response => {
          context.commit('addToDoctors',response.data)
          context.commit('isModalToggle',false)
      })
    },
    addPatient(context,payload){
      axios.post('http://localhost:3000/patients',payload).then(response => {
          context.commit('addToPatients',response.data)
          context.commit('newModalToggle',false)
      })
    },
    delDoctor(context,payload){
        axios.delete('http://localhost:3000/doctors/'+payload.id).then(()=>{
            context.commit('delDoctorId',payload.index)
        })
    },
    delPatient(context,payload){
        axios.delete('http://localhost:3000/patients/'+payload.id).then(()=>{
            context.commit('delPatientId',payload.index)
        })
    },
    editDoctor(context,payload){
      axios.put('http://localhost:3000/doctors/'+payload.id,payload).then(response => {
          context.commit('editedDoctor',response.data)  
          context.commit('isEditModalToggle',false)
      })
  },
    editPatient(context,payload){
      axios.put('http://localhost:3000/patients/'+payload.id,payload).then(response => {
          context.commit('editedPatient',response.data)  
          context.commit('newEditModalToggle',false)
      })
  }

  

  },
  getters: {
    getAllDoctors(state){
      return state.doctors
    },
    getAllPatients(state){
      return state.patients
    },
    getIsModal(state){
      return state.isModal
    },
    getNewModal(state){
      return state.newModal
    },
    getIsEditModal(state){
      return state.isEditModal
    },
    getNewEditModal(state){
      return state.newEditModal
    },
    getByIdDoctor(state){
      return doctorId => {
        return state.doctors.find(doctor => doctor.id == doctorId)
      }
    },
    getByIdPatient(state){
      return patientId => {
        return state.patients.find(patient => patient.id == patientId)
      }
  },
},
  


  modules: {
  }
})
