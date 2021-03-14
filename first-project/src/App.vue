<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-content :superhero="superhero"></app-content>
    <app-footer :title="title"></app-footer>
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
              {name:'Dr.Strange', speciality:'Time Game', show:false},
            ],
            title:"Vue Superhero",
      }
    },
    methods:{
      updateTitle:function(updatedTitle)
      {
        this.title = updatedTitle;
      }
    }
  }
</script>
