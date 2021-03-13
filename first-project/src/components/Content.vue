<template>
	<div id="superhero">
		<ul>
			<li v-for="hero in superhero" @click="hero.show = !hero.show">
				<h2>{{ hero.name }}</h2>
				<h3 v-show="hero.show">{{ hero.speciality }}</h3>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props:{
			superhero:{
				type:Array,
				required:true,
			}
		},
		data(){
		  return{
		  }
		},
	}
</script>
<style type="text/css" scoped>
	#superhero{
	    width: 100%;
	    max-width: 1200px;
	    margin: 40px auto;
	    padding: 0 20px;
	    box-sizing: border-box;
	}
	ul{
	    display: flex;
	    flex-wrap: wrap;
	    list-style-type: none;
	    padding: 0;
	}
	li{
	    flex-grow: 1;
	    flex-basis: 300px;
	    text-align: center;
	    padding: 30px;
	    border: 1px solid #222;
	    margin: 10px;
	}
</style>
