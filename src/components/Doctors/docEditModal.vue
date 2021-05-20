<template>
    <div>
        <div class="modal" v-show="isEditModal">
            <div class="modal-content" >
                <p class="title">Yangi Shifokor ro’yhatdan o’tkazish</p>
                <input type="text" placeholder="rasm url" v-model="editDoctor.photo">
                <select class="bdoctor" v-model="editDoctor.mutax">
                    <option value="Mutaxassisligi">Mutaxassisligi</option>
                    <option value="nevrolog">nevrolog</option>
                    <option value="okulist">okulist</option>
                    <option value="ginekolog">ginekolog</option>
                    <option value="terapevt">terapevt</option>
                </select>
                <select class="bdoctor" v-model="editDoctor.bolim">
                    <option value="Ishlayotgan bolimi">Ishlayotgan bolimi</option>
                    <option value="terapiya">terapiya</option>
                    <option value="ginekologiya">ginekologiya</option>
                    <option value="okulistika">okulistika</option>
                    <option value="nevrologiya">nevrologiya</option>
                </select>
                <input type="text" placeholder="ism sharifi" v-model="editDoctor.title"><br>
                <input type="text" placeholder="email" v-model="editDoctor.email">
                <input type="date" placeholder="Tugilgan sanasi" v-model="editDoctor.tdate">
                <select class="bdoctor" v-model="editDoctor.grafik">
                    <option value="Ish grafigi">Ish grafigi</option>
                    <option value="toliq">toliq</option>
                    <option value="1 stavka">1 stavka</option>
                    <option value="0,5 stavka">0,5 stavka</option>
                </select>
                <select class="bdoctor" v-model="editDoctor.staj"> 
                    <option value="Ish staji">Ish staji</option>
                    <option value="1 yil">1 yil</option>
                    <option value="2 yil">2 yil</option>
                    <option value="3 yil">3 yil</option>
                    <option value="4 yil">4 yil</option>
                    <option value="5 yil">5 yil</option>
                    <option value="6 yil">6 yil</option>
                </select>
                <input type="date" placeholder="Ishga kirgan sanasi" v-model="editDoctor.idate">
                <select class="bdoctor" v-model="editDoctor.country">
                    <option value="Tugilgan joyi">Tugilgan joyi</option>
                    <option value="Andijon">Andijon</option>
                    <option value="Toshkent">Toshkent</option>
                    <option value="Namangan">Namangan</option>
                    <option value="Navoiy">Navoiy</option>
                    <option value="Nukus">Nukus</option>
                </select>
                <select class="bdoctor" v-model='editDoctor.sharoit'>
                    <option value="Oilaviy sharoiti">Oilaviy holati</option>
                    <option value="turmushga chiqqan">Turmushga chiqqan</option>
                    <option value="uylangan">Uylangan</option>
                    <option value="ajrashgan">Ajrashgan</option>
                </select>
                <input type="text" placeholder="Manzil" v-model="editDoctor.manzil">
                <input type="date" placeholder="sana" v-model="editDoctor.date"> 
                <input type="time" placeholder="time" v-model="editDoctor.time">
                <select class="bdoctor" v-model="editDoctor.doctor">
                    <option value="Masul shifokor">Masul shifokor</option>
                    <option value="Fayziyev.M">Fayziyev.M</option>
                    <option value="Fayziyev.M">Ziyomuhammedova.M</option>
                    <option value="Fayziyev.M">Farhodov.H</option>
                    <option value="Fayziyev.M">Qodirov.B</option>
                </select>
            
                <select class="reason" v-model="editDoctor.reason">
                    <option value="Sababi">Sababi</option>
                    <option value="gripp">gripp</option>
                    <option value="diareya">diareya</option>
                    <option value="bosh ogrigi">gripp</option>
                    <option value="trexikardiya">traxikardiya</option>
                    <option value="gepatit">gepatit</option>
                </select><br>
                <input type="number" placeholder="Telefon raqami" v-model="editDoctor.telefon">
                <input type="number" placeholder="Oila azolaridan telefon raqam" v-model="editDoctor.otelefon">
                <select class="bdoctor" v-model="editDoctor.malumoti">
                    <option value="Malumoti">Malumoti</option>
                    <option value="Malumoti">Oliy</option>
                    <option value="Malumoti">Orta-maxsus</option>
                    <option value="Malumoti">Orta</option>
                </select><br>
                <button class="btns" @click="cancel()">Bekor qilish</button>
                <button class="abtn" @click="save()">Qo'shish</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props:['editDoctor'],
    computed:{
        isEditModal(){
            return this.$store.getters.getIsEditModal
        }
    },
    methods: {
        save(){
            this.$store.dispatch('editDoctor',this.editDoctor)
        },
        cancel(){
            this.$store.commit('isEditModalToggle',false)
        }
    },
}
</script>

<style>

</style>