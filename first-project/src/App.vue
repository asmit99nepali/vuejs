<template>
  <div>
    <app-header></app-header>
    <app-content :superhero="superhero"></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import Content from './components/Content.vue';
  export default{
    components:{
      'app-header': Header,
      'app-footer': Footer,
      'app-content': Content,
    },
    data(){
      return{
            superhero:[
              {name:'SpiderMan', speciality:'web', show:false},
              {name:'IronMan', speciality:'Technique', show:false},
              {name:'Hulk', speciality:'Smash', show:false},
              {name:'Dr.Strang', speciality:'Time Game', show:false},
            ],
      }
    },
  }
</script>
