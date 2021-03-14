<template>
  <footer>
  	<p>{{ copyright }} - {{ title }}</p>
  </footer>
</template>

<script>
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
