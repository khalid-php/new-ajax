//easy to http function library

class EasyHTTP {
    make url
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(resolve => resolve.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    //make the post request in 
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
            	method:'POST',
            	headers: { 'Content-type': 'application/json'},
            	body:JSON.stringify(data)
            })
                .then(resolve => resolve.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    //update the function 
        put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
            	method:'PUT',
            	headers: { 'Content-type': 'application/json'},
            	body:JSON.stringify(data)
            })
                .then(resolve => resolve.json())
                console.log(body);
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    //delete the user record in the page
        delete(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
            	method:'DELETE',
            	headers: { 'Content-type': 'application/json'
            	},
            })
                .then(resolve => res.json())
                .then(()=>resolve('delete the id items'))
                .catch(err => reject(err));
        });
    }
}