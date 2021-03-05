new Vue({
	el:'#vue-app',
	data:{
		name:'Asmit Nepali',
		job:'Developer',
		website:'google.com',
		websiteTag:'<a href="google.com">Google</a>',
	},
	methods:{
		greet:function(time){
			this.name
			return'Good '+time +' '+ this.name;
		}
	}
});