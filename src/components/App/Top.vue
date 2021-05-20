<template>
    <header class="header">
        <div class="headersearch">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#C9CED6"/></svg>
            <input type="text" v-model="search" placeholder="Search">
        </div>
        <div class="headerbtn">
            <span class="number">9</span>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.2223 17.3815C19.1479 17.2135 19.1311 16.9687 19.1935 16.7959C19.6759 15.4279 20.1703 14.0671 20.6839 12.7087C21.2311 11.2663 21.6559 9.8143 21.4423 8.2375C21.1999 6.4471 20.4655 4.8967 19.1431 3.6727C18.4975 3.0775 17.7415 2.6095 16.9927 2.0527C17.0503 1.8943 17.1439 1.6471 17.2351 1.3999C17.3839 0.991901 17.2687 0.672701 16.9255 0.545501C16.5727 0.415901 16.2775 0.562301 16.1119 0.958301C16.0039 1.2127 15.9079 1.4695 15.8023 1.7335C14.8039 1.4887 13.8175 1.3903 12.8167 1.5343C9.8335 1.9615 7.6807 3.5263 6.5167 6.3175C5.8039 8.0335 5.2159 9.8023 4.5823 11.5495C4.5055 11.7655 4.3831 11.8927 4.1743 11.9863C3.1135 12.4615 2.0599 12.9511 0.999097 13.4335C0.715897 13.5607 0.504697 13.7407 0.511897 14.0767C0.519097 14.4247 0.763897 14.5639 1.0519 14.6671C3.0319 15.3775 5.0071 16.0951 6.9919 16.7911C7.2895 16.8967 7.3927 17.0143 7.3759 17.3431C7.2751 19.5463 9.3415 21.1879 11.4799 20.6287C12.3463 20.4031 13.0063 19.8967 13.5031 19.1431C13.6063 19.1791 13.6999 19.2127 13.7935 19.2439C15.8047 19.9639 17.8159 20.6839 19.8271 21.4087C20.1295 21.5167 20.4079 21.5623 20.6575 21.3055C20.9167 21.0367 20.8087 20.7607 20.6743 20.4775C20.1799 19.4527 19.6879 18.4231 19.2223 17.3815ZM10.1191 19.4599C9.1615 19.1839 8.5279 18.3247 8.5951 17.3455C9.8479 17.7919 11.0743 18.2311 12.3055 18.6703C11.9551 19.3423 10.9495 19.6999 10.1191 19.4599Z" fill="#CACCCF"/></svg>
            <img src="@/assets/img/odam.png" alt="">
    
        </div>
    </header>
</template>

<script>
export default {
data(){
    return{
    search:''
    }
},




}
</script>

<style lang='scss'>
    header.header{
        height: 88px;
        padding: 24px 0px;
        padding-right: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .headersearch{
            width: 350px;
            height: 40px;
            background: #FFFFFF;
            border-radius: 100px;
            display: flex;
            align-items: center;
            color: #A0A4A8;
            svg{
                margin-right: 12px;
                margin-left: 16px;
            }
            input{
                border: none;
                outline: none;
                font-size: 13px;
                line-height: 16px;
            }
        }
        .headerbtn{
            display: flex;
            align-items: center;
            svg{
                margin-right: 28px;
                position: relative;
            }
            // .number{
            //     position: absolute;
            //     width: 16px;
            //     height: 16px;
            //     border-radius: 50%;
            //     background: #FF6760;
            //     z-index: 1;
            //     display: flex;
            //     justify-content: center;
            //     color: #FFFFFF;
            //     border: 2px solid #F6F8FB;
            // }
        }
    }
</style>