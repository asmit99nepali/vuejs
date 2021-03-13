<template>
  <div>
      <h1>{{ title }}</h1>
      <asmit></asmit>
  </div>
</template>

<script>
  import Asmit from './Asmit.vue'

  export default{
    components:{
      'asmit': Asmit
    },
    data(){
      return{
        title: 'Asmit App',
      }
    },
  }
</script>

<style>

</style>
