class UI {
	constructor() {
		this.location = document.getElementById('w-location');
		this.desc = document.getElementById('w-desc');
		this.string = document.getElementById('w-string');
		this.icon = document.getElementById('w-icon');
		this.humidity = document.getElementById('w-humidity');
		this.dewpoint = document.getElementById('w-dewpoints');
		this.feelslike = document.getElementById('w-feels-like');
		this.wind = document.getElementById('w-wind');
	}

	paint(weather) {
		console.log(12345);
		this.location.textContent = weather.display_location.full;
		this.desc.textContent = weather.weather;
		this.string.textContent = weather.temperature_string;
		this.icon.setAttribute('src', weather.icon_url);
		this.humidity.textContent = `relative humidity: ${weather.relative_humidity}`;
		this.dewpoint.textContent = `Dew points : ${weather.dewpoint_string}`;
		this.feelslike.textContent =`Feels Likes: ${weather.feelslike_string}`;
		this.wind.textContent = `wind :${weather.relative_humidity}`;

	}
}