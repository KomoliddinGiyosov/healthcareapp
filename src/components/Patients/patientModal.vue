<template>
    <div>
        <div class="modal" v-show="newModal">
            <div class="modal-content" >
                <p class="title">Yangi Bemor ro’yhatdan o’tkazish</p>
                <input type="text" placeholder="rasm url" v-model="patient.photo">
                <input type="date" placeholder="chiqish sanasi" v-model="patient.chdate">
                <input type="date" placeholder="tugilgan sanasi" v-model="patient.tdate">
                <input type="text" placeholder="ism sharifi" v-model="patient.title"><br>
                <input type="text" placeholder="email" v-model="patient.email">
                <input type="date" placeholder="sana" v-model="patient.date"> 
                <input type="date" placeholder="Tashrif sanasi" v-model="patient.bdate">
                <select v-model="patient.bolim" class="bdoctor">
                    <option value="Davolangan bolim">Davolangan bolim</option>
                    <option value="Nevrologiya">Nevrologiya</option>
                    <option value="ginekologiya">Ginekoogiya</option>
                    <option value="terapiya">Terapiya</option>
                    <option value="Urologiya">Urologiya</option>
                </select>
                <input type="time" placeholder="time" v-model="patient.time">
                <select class="bdoctor" v-model="patient.doctor">
                    <option value="Masul shifokor">Masul shifokor</option>
                    <option value="Fayziyev.M">Fayziyev.M</option>
                    <option value="Fayziyev.M">Ziyomuhammedova.M</option>
                    <option value="Fayziyev.M">Farhodov.H</option>
                    <option value="Fayziyev.M">Qodirov.B</option>
                </select>
                <select v-model="patient.country" class="bdoctor">
                    <option value="Tugilgan joyi">Tugilgan joyi</option>
                    <option value="ToshKent">Toshkent</option>
                    <option value="Namangan">Namangan</option>
                    <option value="Andjon">Andijon</option>
                </select>
                <select class="reason" v-model="patient.reason">
                    <option value="Sababi">Sababi</option>
                    <option value="gripp">gripp</option>
                    <option value="diareya">diareya</option>
                    <option value="bosh ogrigi">gripp</option>
                    <option value="trexikardiya">traxikardiya</option>
                    <option value="gepatit">gepatit</option>
                </select><br>
                <input type="text" v-model='patient.manzil' placeholder="Manzil">
                <select class="bdoctor" v-model="patient.holat">
                    <option value="turmushga chiqqan">turmushga chiqqan</option>
                    <option value="ajrashgan">ajrashgan</option>
                    <option value="uylangan">uylangan</option>
                </select>
                <select class="bdoctor" v-model="patient.malumoti">
                    <option value="oliy">oliy</option>
                    <option value="orta">orta</option>
                    <option value="orta maxsus">orta maxsus</option>
                </select>
                <select class="bdoctor" v-model="patient.ish">
                    <option value="ishlaydi">ishlaydi</option>
                    <option value="ishlamaydi">ishlamaydi</option>
                </select>
                <input type="text" placeholder="ish joyi" v-model="patient.ishJoyi">
                <input type="number" placeholder="Telefon raqami" v-model="patient.telefon">
                <input type="number" placeholder="Oila azolaridan telefon nomer" v-model="patient.otelefon">
                <select class="bdoctor" v-model="patient.qon">
                    <option value="I guruh">I guruh</option>
                    <option value="II guruh">II guruh</option>
                    <option value="III guruh">III guruh</option>
                    <option value="IV guruh">IV guruh</option>
                </select>
                <select class="bdoctor" v-model="patient.faktor">
                    <option value="-">-</option>
                    <option value="+">+</option>
                </select>
                <input type="text" v-model="patient.sugurta" placeholder="Sugurta polisi">
                <input type="text" v-model="patient.sfirma" placeholder="Sugurta firmasi">
                <select class="bdoctor" v-model="patient.imtiyozk">
                    <option value="order sohibi">order sohibi</option>
                    <option value="beva">beva</option>
                    <option value="nogiron">nogiron</option>
                </select>
                <input type="text" placeholder="imtiyoz hujjati" v-model="patient.imtiyozh">
                <input type="date" v-model="patient.imtiyozs">
                <select class="bdoctor" v-model="patient.invalid">
                    <option value="" hidden>Nogironligi</option>
                    <option value="I guruh">I guruh</option>
                    <option value="II guruh">II guruh</option>
                    <option value="III guruh">III guruh</option>
                </select>
                <input type="text" placeholder="vazni" v-model="patient.vazni">
                <input type="text" placeholder="boyi" v-model="patient.boyi">
                <input type="text" placeholder="Allergik reaksiyalar" v-model="patient.reaksiya">

                
                <button class="btns" @click="cancel()">Bekor qilish</button>
                <button class="abtn" @click="add()">Qo'shish</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            patient:{
                
                bolim:'Davolangan bolim',
                doctor:'Masul shifokor',
                reason:'Sababi',
                country:'Tugilgan joyi',
                invalid: '',
                allergiya: '',
                title:'',
            }
        }
    },
    methods:{
        add(){
            this.$store.dispatch('addPatient',this.patient)
            this.patient = {}

        },
        cancel(){
            this.patient = {}
            this.$store.commit('newModalToggle',false)
        }
    },
computed:{
    newModal(){
        return this.$store.getters.getNewModal
    }
}
}
</script>

<style>
.modal {
        position: fixed; 
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.8);
    }

    .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 1332px;
    }

    .modal-content .title {
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #000000;
        font-family: 'rr';
    }

    .modal-content input {
        width: 268px;
        height: 32px;
        border-radius: 10px;
        padding-left: 14px;
        margin-bottom: 18px;
        margin-right: 27px;
    }
    .modal-content select {
        margin-right: 27px;
    }

    .modal-content .bdoctor {
        width: 290px;
        height: 32px;
        border-radius: 10px;
        padding-left: 14px;
        margin-bottom: 18px;
    }

    .modal-content .reason {
        width: 290px;
        height: 32px;
        border-radius: 10px;
        padding-left: 14px;
        margin-bottom: 18px;
    }

    .modal-content .abtn {
        width: 130px;
        height: 32px;
        border-radius: 10px;
        background: #27AE60;
        color: white;
        font-weight: normal;
        font-size: 11px;
        line-height: 13px;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .btns {
        width: 130px;
        height: 32px;
        border-radius: 10px;
        margin-right: 8px;
        background: #EB5757;
        color: white;
        font-weight: normal;
        font-size: 11px;
        line-height: 13px;
        border: none;
        outline: none;
        cursor: pointer;
    }
</style>