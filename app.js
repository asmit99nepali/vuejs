new Vue({
	el:'#vue-app',
	data:{
		name:'Asmit Nepali',
		job:'Developer',
		website:'google.com',
		websiteTag:'<a href="google.com">Google</a>',
		age:21,
	},
	methods:{
		greet:function(time){
			this.name
			return'Good '+time +' '+ this.name;
		}
	}
});