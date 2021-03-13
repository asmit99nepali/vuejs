<template>
	<ul>
		<li v-for="hero in superhero">{{ hero }}</li>
	</ul>
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