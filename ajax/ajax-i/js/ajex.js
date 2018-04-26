document.getElementById('sub').addEventListener('click', loadData);

function loadData() {
    const abc = new XMLHttpRequest();
    abc.open('GET', 'data.JSON', true);
    abc.onload = function() {
    	// console.log('READYSTATE',readyState);
        if (this.status === 200) {
        	// var jsonObj = JSON.parse(this.responseText);
         //    console.log(jsonObj);
         document.getElementById('output').innerHTML=`<h1>${this.responseText} </h1>`
        }
     }
    console.log('READYSTATE',abc.readyState);
    // abc.onreadystatechange =function() {
    // 	if(this.status === 200 && this.readyState === 4) 
    // 	{
    // 		var objec = JSON.parse(this.responseText);
    // 		console.log(objec);
    // 	}
    // }
    //on progresses function 
    abc.onprogress = function () {
    	console.log('READYSTATE',abc.readyState);
    }

    abc.onerror = function() {
    	console.log("request error");
    } 
    abc.send();
}