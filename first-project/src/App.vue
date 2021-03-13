<template>
  <div>
      <h1>{{ title }}</h1>
      <p>{{ greeting()  }}</p>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        title: 'My First Application',
      }
    },
    methods:{
      greeting:function()
      {
        return "Hello world!";
      }
    }
  }
</script>

<style>

</style>
