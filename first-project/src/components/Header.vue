<template>
  <header>
  	<h1 @click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
	import { bus } from '../main';
	export default{
		props: {
			title: {
				type:String,
			}
		},
		data(){
		  return{
		    title: "First Vue App",
		  }
		},
		methods:{
			changeTitle:function()
			{
				// this.title="Vue Power";
				// this.$emit('changeTitle','Vue Power');
				this.title = 'Hello Heros';
				bus.$emit('titleChanged', 'Vue Power');
			}
		},
	}
</script>
<style type="text/css" scoped>
	header{
		background: lightgreen;
		padding: 10px;
	}
	h1{
		color:#222;
		text-align: center;
	}
</style>
