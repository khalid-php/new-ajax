const http = new easyHTTP;

//get the data
// http.get('https://jsonplaceholder.typicode.com/posts',function (err,posts){
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(posts);
// 	}
// 	});
//get ths single date in 
// http.get('https://jsonplaceholder.typicode.com/posts/1',function (err,posts){
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(posts);
// 	}
// });

//new data is declearation 
//make the post function in library
const data =  {
	title :'that is the create data in statermmm',
	body:'the second line data is representatyion fff' 
};

// http.post('https://jsonplaceholder.typicode.com/posts',function(err,data) {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(data);
// 	}
// });

//update request library function

http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
		if (err) {
		console.log(err)
	} else {
		console.log(post);
	}
});

//delete ths request library
// http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,posts) {
// 	if (err) {
// 		console.log(err);
// 	}else {
// 		console.log(posts);
// 	}
// });