<template>
    <div>
        <div class="modal" v-show="newEditModal">
            <div class="modal-content" >
                <p class="title">Yangi Bemor ro’yhatdan o’tkazish</p>
                <input type="text" placeholder="rasm url" v-model="editPatient.photo">
                <input type="date" placeholder="chiqish sanasi" v-model="editPatient.chdate">
                <input type="date" placeholder="tugilgan sanasi" v-model="editPatient.tdate">
                <input type="text" placeholder="ism sharifi" v-model="editPatient.title"><br>
                <input type="text" placeholder="email" v-model="editPatient.email">
                <input type="date" placeholder="sana" v-model="editPatient.date"> 
                <input type="date" placeholder="Tashrif sanasi" v-model="editPatient.bdate">
                <select v-model="editPatient.bolim" class="bdoctor">
                    <option value="Davolangan bolim">Davolangan bolim</option>
                    <option value="Nevrologiya">Nevrologiya</option>
                    <option value="ginekologiya">Ginekoogiya</option>
                    <option value="terapiya">Terapiya</option>
                    <option value="Urologiya">Urologiya</option>
                </select>
                <input type="time" placeholder="time" v-model="editPatient.time">
                <select class="bdoctor" v-model="editPatient.doctor">
                    <option value="Masul shifokor">Masul shifokor</option>
                    <option value="Fayziyev.M">Fayziyev.M</option>
                    <option value="Fayziyev.M">Ziyomuhammedova.M</option>
                    <option value="Fayziyev.M">Farhodov.H</option>
                    <option value="Fayziyev.M">Qodirov.B</option>
                </select>
                <select v-model="editPatient.country" class="bdoctor">
                    <option value="Tugilgan joyi">Tugilgan joyi</option>
                    <option value="ToshKent">Toshkent</option>
                    <option value="Namangan">Namangan</option>
                    <option value="Andjon">Andijon</option>
                </select>
                <select class="reason" v-model="editPatient.reason">
                    <option value="Sababi">Sababi</option>
                    <option value="gripp">gripp</option>
                    <option value="diareya">diareya</option>
                    <option value="bosh ogrigi">gripp</option>
                    <option value="trexikardiya">traxikardiya</option>
                    <option value="gepatit">gepatit</option>
                </select><br>
                <input type="text" v-model='editPatient.manzil' placeholder="Manzil">
                <select class="bdoctor" v-model="editPatient.holat">
                    <option value="turmushga chiqqan">turmushga chiqqan</option>
                    <option value="ajrashgan">ajrashgan</option>
                    <option value="uylangan">uylangan</option>
                </select>
                <select class="bdoctor" v-model="editPatient.malumoti">
                    <option value="oliy">oliy</option>
                    <option value="orta">orta</option>
                    <option value="orta maxsus">orta maxsus</option>
                </select>
                <select class="bdoctor" v-model="editPatient.ish">
                    <option value="ishlaydi">ishlaydi</option>
                    <option value="ishlamaydi">ishlamaydi</option>
                </select>
                <input type="text" placeholder="ish joyi" v-model="editPatient.ishJoyi">
                <input type="number" placeholder="Telefon raqami" v-model="editPatient.telefon">
                <input type="number" placeholder="Oila azolaridan telefon nomer" v-model="editPatient.otelefon">
                <select class="bdoctor" v-model="editPatient.qon">
                    <option value="I guruh">I guruh</option>
                    <option value="II guruh">II guruh</option>
                    <option value="III guruh">III guruh</option>
                    <option value="IV guruh">IV guruh</option>
                </select>
                <select class="bdoctor" v-model="editPatient.faktor">
                    <option value="-">-</option>
                    <option value="+">+</option>
                </select>
                <input type="text" v-model="editPatient.sugurta" placeholder="Sugurta polisi">
                <input type="text" v-model="editPatient.sfirma" placeholder="Sugurta firmasi">
                <select class="bdoctor" v-model="editPatient.imtiyozk">
                    <option value="order sohibi">order sohibi</option>
                    <option value="beva">beva</option>
                    <option value="nogiron">nogiron</option>
                </select>
                <input type="text" placeholder="imtiyoz hujjati" v-model="editPatient.imtiyozh">
                <input type="date" v-model="editPatient.imtiyozs">
                <select class="bdoctor" v-model="editPatient.invalid">
                    <option value="" hidden>Nogironligi</option>
                    <option value="I guruh">I guruh</option>
                    <option value="II guruh">II guruh</option>
                    <option value="III guruh">III guruh</option>
                </select>
                <input type="text" placeholder="vazni" v-model="editPatient.vazni">
                <input type="text" placeholder="boyi" v-model="editPatient.boyi">
                <input type="text" placeholder="Allergik reaksiyalar" v-model="editPatient.reaksiya">
                
                <button class="btns" @click="cancel()">Bekor qilish</button>
                <button class="abtn" @click="save()">Qo'shish</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props:['editPatient'],
    computed:{
        newEditModal(){
            return this.$store.getters.getNewEditModal
        }
    },
    methods: {
        save(){
            this.$store.dispatch('editPatient',this.editPatient)
        },
        cancel(){
            this.$store.commit('newEditModalToggle',false)
        }
    },
}
</script>

<style>

</style>