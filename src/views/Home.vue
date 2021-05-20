<template>
  <div class="home">
    <Info/>
    <doc-table></doc-table>
    <pat-table></pat-table>

  
  </div>
</template>

<script>
import Info from '../components/App/Info'
import docTable from '../components/Doctors/docTable'
import patTable from '../components/Patients/patientTable'


export default {
  name: 'Home',
  components: {
    Info,
    docTable,
    patTable
    
  },

}
</script>

<style lang="scss">

</style>
