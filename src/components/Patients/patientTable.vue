<template>

<div>
    <div class="doctors">
        <div class="doctors_title">
            <p>Bemorlar</p>
        </div>
        <div class="doctors_table">
            <table width='100%' class="table">
                <tr class="tr">
                    <th>Rasm</th>
                    <th>Ismi-sharifi</th>
                    <th>Email</th>
                    <th>Sana</th>
                    <th>Qabul vaqti</th>
                    <th>Shifokor</th>
                    <th>Sabab</th>
                </tr>
                <tr v-for="(item, index) of patients" :key="index">
                        <td><img :src="(item.photo)" alt="" width="100" height="100"></td>
                        <td>{{item.title}}</td>
                        <td>{{item.email}}</td>
                        <td>{{item.date}}</td>
                        <td>{{item.time}}</td>
                        <td>{{item.doctor}}</td>
                        <td>{{item.reason}}</td>
                        <td>
                            <router-link tag="button" :to="'/patient/'+item.id" class="more">Batafsil</router-link>
                            <button class="edit" @click="edit(index)">Tahrirlash</button>
                            <button class="del" @click="del(index)">O'chirish</button>
                        </td>
                        
                    </tr>

            
            </table>
        </div>
        <div class="patientsbtns">
        <div class="patientsnumbers">
            <a href="#" class="link"><svg width="8" height="11" viewBox="0 0 8 11" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.71202 0.933319L0.912018 5.73332L5.71202 10.5333L7.08802 9.17332L3.64802 5.73332L7.08802 2.29332L5.71202 0.933319Z"
                        fill="#E8E8E8" /></svg></a>
            <a href="#" class="link">1</a>
            <a href="#" class="link">2</a>
            <a href="#" class="link">3</a>
            <a href="#" class="link"><svg width="8" height="11" viewBox="0 0 8 11" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.28805 10.5333L7.08805 5.73332L2.28805 0.933319L0.928049 2.29332L4.35205 5.73332L0.912048 9.17332L2.28805 10.5333Z"
                        fill="#52575C" /></svg></a>
            
        </div>
    </div>
    

    </div>
    <pat-edit-modal :editPatient='editPatient'></pat-edit-modal>
    </div>

</template>

<script>
import patEditModal from './patEditModal'
export default {
    data(){
        return{
            editPatient:{},
            editIndex:0
        }
    },
computed:{
    patients(){
        return this.$store.getters.getAllPatients
    },
    newModal(){
        return this.$store.getters.getNewModal
    },
    newEditModal(){
        return this.$store.getters.getNewEditModal
    }
},
methods:{
        del(index){
            let patient = {
                index: index,
                id: this.patients[index].id
            }
            this.$store.dispatch('delPatient',patient)
        },
        edit(index){
            this.editIndex = index
            this.editPatient = this.patients[index]
            this.$store.commit('newEditModalToggle',true)
        }, 
    },

    components:{
        patEditModal
    }
}

</script>

<style lang='scss'>
    
</style>