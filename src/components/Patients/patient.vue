<template>
<div class="patients">
    <div class="patient-item">
        <div class="patient-photo">
            <img :src="(patient.photo)" width='199' height="216" alt="">
        </div>
        <div class="patient-card">
            <table>
                <tr>
                    <th class="title">{{patient.title}}</th>
                </tr>
                <tr>
                    <td>Tashrif sanasi</td>
                    <th>{{patient.tdate}}</th>
                    <td>Chiqish sanasi</td>
                    <th>{{patient.chdate}}</th>
                </tr>
                <tr>
                    <td>Davolanayotgan bolim</td>
                    <th>{{patient.bolim}}</th>
                    <td>Masul shifokor</td>
                    <th>{{patient.doctor}}</th>
                </tr>
                <tr>
                    <td>Murojaat sababi</td>
                    <th>{{patient.reason}}</th>
                </tr>
            </table>
            <div class="personal">
                <table>
                <tr>
                    <th class="title">Shaxsiy malumotlar</th>
                </tr>
                <tr>
                    <td>Tugilgan sanasi</td>
                    <th>{{patient.tdate}}</th>
                    <td>Oilaviy holat</td>
                    <th>{{patient.holat}}</th>
                    <td>Telefon raqam</td>
                    <th>{{patient.telefon}}</th>
                </tr>
                <tr>
                    <td>Tugilgan Hudud</td>
                    <th>{{patient.country}}</th>
                    <td>Malumoti</td>
                    <th>{{patient.malumoti}}</th>
                    <td>Oila azolaridan telefon raqam</td>
                    <th>{{patient.otelefon}}</th>
                </tr>
                <tr>
                    <td>Manzil</td>
                    <th>{{patient.manzil}}</th>
                    <td>Bandlik Holati</td>
                    <th>{{patient.ish}}</th>
                    <td>Ish joyi</td>
                    <th>{{patient.ishJoyi}}</th>
                </tr>
                </table>
                
                </div>
                <div class="health">
                    <table>
                        <tr>
                            <th class="title">Tibbiy malumotlar</th>
                        </tr>
                        <tr>
                            <td>Qon guruhi</td>
                            <th>{{patient.qon}}</th>
                            <td>Imtiyoz kategoriyasi</td>
                            <th>{{patient.imtiyozk}}</th>
                            <td>Invalidlik</td>
                            <th>{{patient.invalid}}</th>
                        </tr>
                        <tr>
                            <td>Rh faktor</td>
                            <th>{{patient.faktor}}</th>
                            <td>Imtiyoz Hujjati</td>
                            <th>{{patient.imtiyozh}}</th>
                            <td>Vazni</td>
                            <th>{{patient.vazni}}</th>
                        </tr>
                        <tr>
                            <td>Sugurta polisi</td>
                            <th>{{patient.sugurta}}</th>
                            <td>Imtiyoz olingan sana</td>
                            <th>{{patient.imtiyozs}}</th>
                            <td>Boyi</td>
                            <th>{{patient.boyi}}</th>
                        
                        </tr>
                        <tr>
                            <td>Sugurta firmasi</td>
                            <th>{{patient.sfirma}}</th>
                            <td>Allergik reaksiyalar</td>
                            <th>{{patient.reaksiya}}</th>
                        </tr>
                    </table>
                </div>
        </div>
    </div>
</div>



</template>

<script>
export default {
data(){
    return{
        id:this.$route.params.id
    }
},
computed: {
    patient() {
            return this.$store.getters.getByIdPatient(this.id)
        }
    }
}
</script>

<style lang='scss'>
.patients{
    th{
        text-align: left;
        padding-right: 33px;
    }
    td{
        padding-right: 33px;
    }
    .patient-item{
        width: 1110px;
        margin-right: 38px;
        background: #FFFFFF;
        box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
        border-radius: 8px;
        .patient-photo{
            float: left;
            margin-right: 20px;
        }
        .patient-card{
            .title{
                font-size: 26px;
            }
        
        }
    }
}
</style>