<template>
  <div>
    <form-helper>
      <h2>{{ title }}</h2>
      <p>I'm the paragraph title</p>
   </form-helper>
  </div>
</template>

<script>
import FormHelper from './components/FormHelper';

export default{
  components:{
    'form-helper': FormHelper
  },
  data(){
    return{
      title:"I'm a dynamic slot title",
    }
  },
  methods:{

  }
}
</script>