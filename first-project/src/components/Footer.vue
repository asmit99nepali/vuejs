<template>
  <footer>
  	<p>{{ copyright }} - {{ title }}</p>
  </footer>
</template>

<script>
	import { bus } from '../main';
	export default{
		props:{
			title:{
				type: String
			}
		},
	data(){
	  return{
	    copyright: "Copyright 2021 Vue",
	  }
	},
	created(){
		bus.$on('titleChanged', (data)=>{
			this.title = data;
		});
	}
	}
</script>
<style type="text/css" scoped>
	footer{
		background: #222;
		padding: 6px;
	}
	p{
		color:lightgreen;
		text-align: center;
	}
</style>
