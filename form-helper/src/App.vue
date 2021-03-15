<template>
  <div>
  </div>
</template>

<script>
import FormOne from './components/FormOne';
import FormTwo from './components/FormTwo';

export default{
  components:{
    'form-one': FormOne,
    'form-two': FormTwo,
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