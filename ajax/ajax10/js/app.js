// async function myFun() {
// 	const promise = new Promise((resolve,reject) => {
// 		setTimeout(()=> resolve('hellow'), 1000);
// 	}); 
		
// 	const error = true;
// 	if(!error) {
// 		const res = await promise;
// 		return res;
// 	} else {
// 		await promise.reject(new error('some thing is wrong'));	
// 	}

// }
// myFun()
// .then(res=>console.log(res))
// .catch(err=>console.log(err));


async  function getUser() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = response.json();
	return data;
}
getUser().then(user=>console.log(user));