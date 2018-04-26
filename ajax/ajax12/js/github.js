class Github {
	constructor() {
		this.client_id='da308aacf8b204d361fd';
		this.client_secret='8496aeef73956f4ec9e8716d1840532802bb81b';
	}
	async getuser(user) {
		const profileResponse = await fetch(`https://api.github.com/users/
			${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
		console.log(profileResponse);
		
		const profile = await profileResponse.json();
		console.log(profile);
		return {
			profile
		}
	}
}

