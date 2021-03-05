new Vue({
	el:'#vue-app',
	data:{
		name:'Asmit Nepali',
		job:'Developer',
		website:'google.com',
	},
	methods:{
		greet:function(time){
			this.name
			return'Good '+time +' '+ this.name;
		}
	}
});