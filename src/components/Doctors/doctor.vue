<template>
<div class="doctor">
    <div class="doctor-item">
        <div class="doctor-photo">
            <img :src="(doctor.photo)" alt="" width="199" height="216">
        </div>
        <div class="doctor-title">
            <p></p> 
        </div>
        <div class="doctor-work">
            <table>
                <tr>
                    <td class="title">{{doctor.title}}</td>
                </tr>
            <tr>
                <td>Mutaxassisligi: </td>
                <th>{{doctor.mutax}}</th>
                <td>Ishga kirgan sana:</td>
                <th>{{doctor.idate}}</th>
            </tr>
            <tr>
                <td>Ishlayotgan bolimi:</td>
                <th>{{doctor.bolim}}</th>
                <td>Ish grafigi:</td>
                <th>{{doctor.grafik}}</th>
            </tr>
            <tr>
                <td>Ish staji:</td>
                <th>{{doctor.staj}}</th>
            </tr>
        </table> <br>
    </div>
    
        <div class="atitle">
            <p>Shaxsiy malumotlar</p>
        </div>
        <div class="doctor-table">
            <table>
                <tr>
                    <td>Tugilgan sanasi:</td>
                    <th>{{doctor.tdate}}</th>
                    <td>Oilaviy sharoit:</td>
                    <th>{{doctor.sharoit}}</th>
                    <td>Telefon raqam:</td>
                    <th>{{doctor.telefon}}</th>
                </tr>
                <tr>
                    <td>Tugilgan hudud:</td>
                    <th>{{doctor.country}}</th>
                    <td>Malumoti:</td>
                    <th>{{doctor.malumoti}}</th>
                    <td>Oila azolaridan <br>  telefon nomer:</td>
                    <th>{{doctor.otelefon}}</th>
                </tr>
                <tr>
                    <td>Manzil:</td>
                    <th>{{doctor.manzil}}</th>
                </tr>
            </table>
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
computed:{
    doctor(){
            return this.$store.getters.getByIdDoctor(this.id)
        }
    }
}
</script>

<style lang='scss'>
.doctor{
    .doctor-item{
        width: 1110px;
        margin-left: 38px;
        margin-right: 38px;
        background: #FFFFFF;
        box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
        border-radius: 8px;
        .doctor-photo{
            float: left;
            margin-right: 20px;
        }
        .doctor-work{
            border-bottom: 1px solid black;
            td{
                padding-right: 41px;
            }
            th{
                padding-right: 80px;
                text-align: left;
            }
            .title{
                font-size: 26px;
                font-weight: bold;
            }
        }
        

        
        .atitle{
            margin-left: 25px;
            font-size: 16px;
            font-weight: bold;
        }
        .doctor-table{
            td{
                padding-right: 44px;
            }
            th{
                text-align: left;
                padding-right: 20px;
            }
        }
    }

}
</style>