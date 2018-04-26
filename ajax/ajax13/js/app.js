//initial the storage
const storage = new Storage();
const weatherLocation = storage.getLocationData();

//initialation the weather class
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// const weather = new Weather('San Diego', 'California');
//initialition  UI
const ui = new UI();

//get storage data in 

document.addEventListener('DOMContentLoaded', getWeather);

//change the location 
document.getElementById('w-changeweather').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    console.log(city);
    weather.changeLocation(city, state);

    //set location 
    storage.setLocationData(city, state);
    //get display
    getWeather();
    //close model
    document.getElementById('w-form').reset()
    $('#myModal').modal('hide');
});



//get weather DOM content 

function getWeather() {

    weather.getWeather()
        .then(results => {
            console.log(results);
            ui.paint(results);

        })
        .catch(err => console.log(err));
}