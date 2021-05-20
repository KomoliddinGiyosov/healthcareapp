<template>
    <div>
        <div class="modal" v-show="isModal">
            <div class="modal-content" >
                <p class="title">Yangi Shifokor ro’yhatdan o’tkazish</p>
                <input type="text" placeholder="rasm url" v-model="doctor.photo">
                <select class="bdoctor" v-model="doctor.mutax">
                    <option value="Mutaxassisligi">Mutaxassisligi</option>
                    <option value="nevrolog">nevrolog</option>
                    <option value="okulist">okulist</option>
                    <option value="ginekolog">ginekolog</option>
                    <option value="terapevt">terapevt</option>
                </select>
                <select class="bdoctor" v-model="doctor.bolim">
                    <option value="Ishlayotgan bolimi">Ishlayotgan bolimi</option>
                    <option value="terapiya">terapiya</option>
                    <option value="ginekologiya">ginekologiya</option>
                    <option value="okulistika">okulistika</option>
                    <option value="nevrologiya">nevrologiya</option>
                </select>
                <input type="text" placeholder="ism sharifi" v-model="doctor.title"><br>
                <input type="text" placeholder="email" v-model="doctor.email">
                <input type="date" placeholder="Tugilgan sanasi" v-model="doctor.tdate">
                <select class="bdoctor" v-model="doctor.grafik">
                    <option value="Ish grafigi">Ish grafigi</option>
                    <option value="toliq">toliq</option>
                    <option value="1 stavka">1 stavka</option>
                    <option value="0,5 stavka">0,5 stavka</option>
                </select>
                <select class="bdoctor" v-model="doctor.staj"> 
                    <option value="Ish staji">Ish staji</option>
                    <option value="1 yil">1 yil</option>
                    <option value="2 yil">2 yil</option>
                    <option value="3 yil">3 yil</option>
                    <option value="4 yil">4 yil</option>
                    <option value="5 yil">5 yil</option>
                    <option value="6 yil">6 yil</option>
                </select>
                <input type="date" placeholder="Ishga kirgan sanasi" v-model="doctor.idate">
                <select class="bdoctor" v-model="doctor.country">
                    <option value="Tugilgan joyi">Tugilgan joyi</option>
                    <option value="Andijon">Andijon</option>
                    <option value="Toshkent">Toshkent</option>
                    <option value="Namangan">Namangan</option>
                    <option value="Navoiy">Navoiy</option>
                    <option value="Nukus">Nukus</option>
                </select>
                <select class="bdoctor" v-model='doctor.sharoit'>
                    <option value="Oilaviy sharoiti">Oilaviy holati</option>
                    <option value="turmushga chiqqan">Turmushga chiqqan</option>
                    <option value="uylangan">Uylangan</option>
                    <option value="ajrashgan">Ajrashgan</option>
                </select>
                <input type="text" placeholder="Manzil" v-model="doctor.manzil">
                <input type="date" placeholder="sana" v-model="doctor.date"> 
                <input type="time" placeholder="time" v-model="doctor.time">
                <select class="bdoctor" v-model="doctor.doctor">
                    <option value="Masul shifokor">Masul shifokor</option>
                    <option value="Fayziyev.M">Fayziyev.M</option>
                    <option value="Fayziyev.M">Ziyomuhammedova.M</option>
                    <option value="Fayziyev.M">Farhodov.H</option>
                    <option value="Fayziyev.M">Qodirov.B</option>
                </select>
            
                <select class="reason" v-model="doctor.reason">
                    <option value="Sababi">Sababi</option>
                    <option value="gripp">gripp</option>
                    <option value="diareya">diareya</option>
                    <option value="bosh ogrigi">gripp</option>
                    <option value="trexikardiya">traxikardiya</option>
                    <option value="gepatit">gepatit</option>
                </select><br>
                <input type="number" placeholder="Telefon raqami" v-model="doctor.telefon">
                <input type="number" placeholder="Oila azolaridan telefon raqam" v-model="doctor.otelefon">
                <select class="bdoctor" v-model="doctor.malumoti">
                    <option value="Malumoti">Malumoti</option>
                    <option value="Malumoti">Oliy</option>
                    <option value="Malumoti">Orta-maxsus</option>
                    <option value="Malumoti">Orta</option>
                </select><br>
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
            doctor:{
                photo:'',
                mutax: 'Mutaxassisligi',
                country:'Tugilgan joyi',
                bolim:'Ishlayotgan bolimi',
                grafik:'Ish grafigi',
                staj:'Ish staji',
                doctor:'Masul shifokor',
                reason:'Sababi',
                sharoit:'Oilaviy sharoiti',
                malumoti:'Malumoti',
                title:'',
            }
        }
    },
    methods:{
        add(){
            this.$store.dispatch('addDoctor',this.doctor)
            this.doctor = {}
        },
        cancel(){
            this.doctor = {}
            this.$store.commit('isModalToggle',false)
        }
    },
computed:{
    isModal(){
        return this.$store.getters.getIsModal
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
        height: 489px;
        
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