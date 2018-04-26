function easyHTTP() {
	this.http =new XMLHttpRequest();
} 

//make http in get method
// easyHTTP.prototype.get = function(url,callback) {
// 	this.http.open('GET',url,true);

// 	// this.http.onload = () => {
// 		let self = this;
// 	self.http.onload = function ()  {
// 		if (self.http.status === 200) {
// 			callback(null,self.http.responseText);
// 		} else {
// 			callback('error:' +self.http.status);
// 		}
// 	} 
// 	this.http.send();
// }
//make http in post Request  method
// easyHTTP.prototype.post = function(url,callback) {
// 	this.http.open('POST',url,true);
// 	this.http.setRequestHeader('content-type','application/JSON');

// 	// this.http.onload = () => {
// 		let self = this;
// 	self.http.onload = function ()  {
// 		// if (self.http.status === 200) {
// 			callback(null,self.http.responseText);
// 		// } else {
// 	// 		callback('error:' +self.http.status);
// 	// 	}
// 	 } 
// 	this.http.send(JSON.stringify(data));
// }

//make http in put Request  method

easyHTTP.prototype.put= function(url, data, callback) {
	this.http.open('PUT', url, true);
	this.http.setRequestHeader('Content-type','application/json');
	let self = this;
	this.http.onload =function() {
		callback(null, self.http.responseText);
	}
	this.http.send(JSON.stringify(data));
}

//make http in delete method
// easyHTTP.prototype.delete= function(url,callback) {
// 	this.http.open('DELETE',url,true);
// 	let self = this;
// 	self.http.onload =function () {
// 		if(self.http.status ===200 ) {
// 			callback(null,'delete post');
// 		} else {
// 			callback('error:' +self.http.status);
// 		}
// 	}
// 	this.http.send();
// }
