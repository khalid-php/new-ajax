// document.getElementById('button1').addEventListener('click', getText);
// //button 
// function getText() {
// 	fetch('test.txt')
// 		.then(function(res) {
// 			return res.text();
// 		})
// 		.then (function(data) {
// 			document.getElementById('output').innerHTML = data;
// 		}).catch(function(err) {
// 			console.log(err);

// 		});
// }		





// document.getElementById('button2').addEventListener('click', getJson);
// //button  
// function getJson() {
//     fetch('post.json')
//     	.then(function (response) {
//     		return response.json()
//     	}) 
//         .then(function(data) {
//             console.log(data);
//             //let a = JSON.parse(data);
//             let output = '';
//             data.forEach(function(post) {
//                 output += `<li> ${post.title}</li>`;
//             });
//             document.getElementById('output').innerHTML = output;
//         }).catch(function(err) {
//             console.log(err);
//         });
// }

//external api fetch in 
document.getElementById('button3').addEventListener('click',externalApi);
// //button  
function externalApi() {
	fetch('https://api.github.com/users')
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			console.log(data);
			let output = '';
			data.forEach(function(user) {
				output +=`<li> ${user.login}</li>`;
			});
			document.getElementById('output').innerHTML = output;
		}).catch(function(err) {
			console.log(err);
		});
}