const posts = [{
		title:'first line',
		body:'primary body'
	},
	{ 
		title:'second line',
		body:'secondrt body'
	}];

function createPost(post) {
	return new  Promise(function(resolve, reject) {
		setTimeout(function() {
			posts.push(post);
			resolve()
			// const err = false;
			// if(!err) {
			// 	resolve();
			// } else {
			// 	reject('error:somthing went rongs');
			// }
		},2000);
	});
}

function getPosts() {
	setTimeout(function(){
		let  output = '';
		posts.forEach(function(post){
			output +=`<li>${post.title}</li>`;
		});
		let oneDiv = document.getElementById('one');
		oneDiv.innerHTML= output;
	},3000);
	
}

createPost({title:'third line',body:'third body'})
.then(getPosts)
.catch(function(err) {
	console.log(err);
}); 
	

