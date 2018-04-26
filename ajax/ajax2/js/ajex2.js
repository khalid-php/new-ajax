document.getElementById('button1').addEventListener('click',loadCustomer);
function loadCustomer(e) {
	const abc = new XMLHttpRequest();

	abc.open('GET', 'customer1.json', true);
	abc.onload = function() {
		if(this.status === 200 ) {
			console.log(this.responseText);
			const custo = JSON.parse(this.responseText);

			const output = 
				`<ul>
					<li> id:  ${custo.id} </li>
					<li> name: ${custo.name}</li>
					<li> phone: ${custo.phone}</li>
					<li> company: ${custo.company}</li>
				</ul>`;
			document.getElementById('customer').innerHTML= output;
		}
	}


	abc.send();
}

document.getElementById('button2').addEventListener('click',loadCustomer1);
function loadCustomer1(e) {
	const abc = new XMLHttpRequest();

	abc.open('GET', 'customer.json', true);
	abc.onload = function() {
		if(this.status === 200 ) {
			console.log(this.responseText);
			const customers = JSON.parse(this.responseText);
			let output='';
			customers.forEach(function(customers) { 
				 output +=
				`<ul>
					<li> id:  ${customers.id} </li>
					<li> name: ${customers.name}</li>
					<li> phone: ${customers.phone}</li>
					<li> company: ${customers.company}</li>
				</ul>`;
			});
			document.getElementById('customers').innerHTML= output;
		}
	}
	

	abc.send();
}