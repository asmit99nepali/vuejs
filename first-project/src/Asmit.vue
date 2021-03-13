<template>
	<div>
		<h1>List of superheros</h1>
		<ul>
			<li v-for="hero in superhero">{{ hero }}</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				superhero:['SpiderMan','IronMan','Hulk'],
			}
		}
	}
</script>
<style scoped type="text/css">
	h1{
		color: blue;
	}
</style>