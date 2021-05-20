<template>

<div>
    <div class="doctors">
        <div class="doctors_title">
            <p>Shifokorlar</p>
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
                <tr v-for="(item, index) of doctors" :key="index">
                        <td><img :src="(item.photo)" alt="" width="100" height="100"></td>
                        <td>{{item.title}}</td>
                        <td>{{item.email}}</td>
                        <td>{{item.date}}</td>
                        <td>{{item.time}}</td>
                        <td>{{item.doctor}}</td>
                        <td>{{item.reason}}</td>
                        <td>
                            <router-link tag="button" :to="'/doctor/'+item.id" class="more">Batafsil</router-link>
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
    <doc-edit-modal :editDoctor='editDoctor'></doc-edit-modal>
    </div>

</template>

<script>
import docEditModal from './docEditModal'
export default {
    data(){
        return{
            editDoctor:{},
            editIndex:0
        }
    },
computed:{
    doctors(){
        return this.$store.getters.getAllDoctors
    },
    isModal(){
        return this.$store.getters.getIsModal
    },
    isEditModal(){
        return this.$store.getters.getIsEditModal
    }
},
methods:{
        del(index){
            let doctor = {
                index: index,
                id: this.doctors[index].id
            }
            this.$store.dispatch('delDoctor',doctor)
        },
        edit(index){
            this.editIndex = index
            this.editDoctor = this.doctors[index]
            this.$store.commit('isEditModalToggle',true)
        }, 
    },

    components:{
        docEditModal
    }
}

</script>

<style lang='scss'>
    .doctors {
        width: 1110px;
        background-color: #fff;
        margin-right: 24px;
        box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
        border-radius: 8px;
        margin-bottom: 55px;
    
    }

    .doctors .doctors_title {
        padding-left: 24px;
        padding-top: 24px;
        padding-bottom: 18px;
        font-weight: bold;
        font-size: 20px;
        
    }

    .doctors .doctors_table .table {
        border-collapse: collapse;
    }

    .doctors .doctors_table .table .tr {
        text-align: left;
        background-color: #E8E8E8;

    }

    th {
        padding: 18px 0;
        padding-left: 24px;
    }

    td {
        padding: 18px 0;
        padding-left: 24px;
    }

    .img {
        margin-right: 12px;
    }
    .patientsnumbers {
        padding-bottom: 24px;
        padding-left: 24px;
        padding-top: 20px;
    }

    .patientsbtns .patientsnumbers .link {
        margin-right: 10px;
        border: 1px solid #E8E8E8;
        box-sizing: border-box;
        border-radius: 4px;
        text-decoration: none;
        font-weight: normal;
        font-size: 13px;
        line-height: 16px;
        color: #25282B;
        padding: 4px 8px;
    }

    .patientsbtns .patientsnumbers .link:hover {
        background: #336CFB;
        color: white;
    }
</style>