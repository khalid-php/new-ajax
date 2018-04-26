const posts = [
{ title: 'post one','body':'there are one line'},
{ title: 'post two','body':'there are two line'},
];

// function createPost(post) {
//  	setTimeout(function () {
//  		post.push(post);
//  	},2000);
// }

// function getPost() {
// 	setTimeout(function() {
// 		let output='';
// 		post.forEach(function(post) {
// 			output +=`<li> ${post.title}</li>`;
// 		});
// 		document.body.innerHTML=output;
// 	},1000);
// }

// createPost({title:'post three',body:'there are three'});
// getPost();


function createPost(post,callback) {
 	setTimeout(function () {
 	posts.push(post);
 	callback();
 	console.log(callback)
 	},2000);
}

function getPost() {
	setTimeout(function() {
		let output='';
		posts.forEach(function(post) {
			output +=`<li> ${post.title}</li>`;
		});
		document.body.innerHTML=output;
	},1000);
}
createPost({title:'post three',body:'there are three'}, function () {
	getPost();	
});
