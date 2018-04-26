// document.querySelector('.get-jokes').addEventListener('click', getjokes);

// function getjokes(e) {
//     e.preventDefault();
//     const number = document.querySelector('input[type="number"]').value;
//     const xyz = new XMLHttpRequest();
//     let url = ''
//     if (number > 0 && number != '') {
//     	url = `https://jsonplaceholder.typicode.com/posts/${number}`
//     }else{
//     	url = `https://jsonplaceholder.typicode.com/posts`	
//     }


//     xyz.open('GET', url, true);
//     xyz.onload = function() {
//         if (this.status === 200) {
//             const response = JSON.parse(this.responseText);
//             // console.log(response);
//             let output = '';

//             if (response.length > 0) {
//             	response.forEach(function(obj) {
// 	                console.log(obj.userId)
// 	                output += `<ul>`
// 	                output += `<li>${obj.id}</li>`
// 	                output += `<li>${obj.title}</li>`
// 	                output += `<li>${obj.body}</li>`
// 	                output += `</ul>`
// 	                // if (obj.id === 'id') {
// 	                //     response.forEach(function(id) {
// 	                //         output += `<li> ${id.id} </li>`;

// 	                //     });
// 	                // } else {
// 	                //     output += `<li>somthing is wrong</li>`;
// 	                // }
// 	            });
//             }else{
//             	// console.log(response)
//             	let obj = response;
//             	output += `<ul>`
//                 output += `<li>${obj.id}</li>`
//                 output += `<li>${obj.title}</li>`
//                 output += `<li>${obj.body}</li>`
//                 output += `</ul>`
//             }

            
//             document.querySelector('.jokes').innerHTML = output;
//             // let output = '';

//             // 
//         }
//     }

//     xyz.send();
// }

document.querySelector('.get-jokes').addEventListener('click', getjokes);

function getjokes(e) {
    e.preventDefault();
    const number = document.querySelector('input[type="number"]').value;
    const xyz = new XMLHttpRequest();

    xyz.open('GET',`http://api.icndb.com/jokes/random/${number}`, true);
    xyz.onload = function() {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            let output = '';
            if (response.type === 'success') {
                response.value.forEach(function(joke) {
                    output +=`<li> ${joke.joke} </li>`;
                });

            } else {
                output +='<li> some went wrong </li>';
            }
            document.querySelector('.jokes').innerHTML=output;
        }
    }
     
    xyz.send();
}
