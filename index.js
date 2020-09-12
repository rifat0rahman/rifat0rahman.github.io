var app1 = new Vue({
	el:"#sec2",
	data:{
		code:'I am Rifat',
		cond:true,
		img:'about1.jpg',
	},
	methods:{
		changeimg:function () {
			this.cond =! this.cond;
			if(this.cond == true){
				this.img = 'about1.jpg'
			}
			if(this.cond == false){
				this.img = 'about2.jpg'
			}
		}

		
	}
})
var app2 = new Vue({
	el:"#sec4",
	data:{
		title:"click image to see the site"
	}
})
var app3 = new Vue({
	el:"#sec5",
	data:{
		massege:{
			name:"",
			words:"",
		},
		greeting:"Write your words to me.",
	},
	methods:{
		contact(){
			axios.post("https://portfolio-contact-c15aa.firebaseio.com/posts.json",this.massege).then(data=>{
				return data.json();
			});
			this.massege={
				name:"",
				words:"",
			}
			this.greeting = "Thanks for sharing!!"
		}
	}
})