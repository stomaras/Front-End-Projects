/* Project Planning 

User Stories: Description of the application's functionality from the user's perspective.
Common Format: As a [type of user], I want [an action] so that [benefit]

User Stories

1) As a user, i want to log my running workouts with location, distance, time, price and steps/minute, so i can keep a log of all my running.
2) As a user, i want to log my cycling workouts with location, distance, time, speed and elevation gain, so i can keep a log of all my cycling.
3) As a user, i want to see all my workouts at a glance, so i can easily track my progress overtime.
4) As a user, i want to also see my workouts on a map, so i can easily check where i work out the most.
5) As a user, I want to see all my workouts when i leave the app and come back later, so that i can keep using there app over time.

Features 

1) a.Map where user clicks to add new workout(best way to get location coordinates)
   b.Geolocation to display map at current location (more user friendly)
   c.Form to input distance, time, pace, steps/minute

2) a.Form to input distance, time, speed, elevation gain

3) a.Display all workouts in a list.
4) a.Display all workouts on the map.
5) a.Store the workout data in the browser using local storage API.
   b.On page load, read the saved data from local storage and display

Features

1. Geolocation to display mat at current location 
2. Map where user clicks to add new workout
3. Form to input distance, time, pace, steps/minute
4. Form to input distance, time, speed, elevation gain
5. Display workouts in a list
6. Display workouts on the map
7. Store workout data in the browser
8. On page load, read the saved data and display

- Geolocation API is like internationalization

=========================================================================================== Project Architecture ==============================================================================================
User Stories
1) Log my running workouts with location,distance,time,pace and steps/minute(cadence)
2) Log my cycling workouts with location,distance,time,speed and elevation gain
-------------------------------------
Where and how to store the data?
-------------------------------------
data comes directly from the user stories
create classes based on these king of data
Workout data (class properties)
necessary to implement user stories

----------------------------------
Class Workout
----------------------------------
id
distance
duration
coords
date
---------------------------------
constructor()
...
--------------------------------
|
|
|Inheritance
|
|
|
--------------------    ---------------------------
Child Class Running     Child Class Cycling
--------------------    --------------------------
name                    name
cadence                 elevationGain
pace                    speed
----------------        ---------------------------
constructor             constructor
----------------        --------------------------


-------------------------------------------------
Class App
-------------------------------------------------
workouts <======================== Array holding all Running or Cycling Objects
map

constructor() <============== load page
_getPosition()
_loadMap(position) <==================== Receive Position
_showForm() <=========================== Click on map
_toggleElevationField() <=============== Change Input
_newWorkout <=========================== Submit Form

=========================================================================================== Project Architecture Ends ==============================================================================================
*/
'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


class Workout {

   date = new Date();
   id = (Date.now() + '').slice(-10);

   constructor(coords, distance, duration) {
      this.coords = coords; // [lat, lng]
      this.distance = distance; // in km
      this.duration = duration; // in min
   }
}

class Running extends Workout {
   constructor(coords, distance, duration, cadence) {
      super(coords, distance, duration);
      this.cadence = cadence;
      this.calcPace();
   }

   // on prototype
   calcPace(){
      // min/km
      this.pace = this.duration / this.distance;
      return this.pace;
   }

}
class Cycling extends Workout {
   constructor(coords, distance, duration, elevationGain) {
      super(coords, distance, duration);
      this.elevationGain = elevationGain;
      this.calcSpeed();
   }

   // on prototype
   calcSpeed() {
      // km/h
      this.speed = this.distance / (this.duration / 60)
      return this.speed
  }
}


const run1 = new Running([39, -12], 5.2, 24, 179);
const cycling1 = new Cycling([39, -12], 27, 95, 180);

console.log(run1, cycling1);


////////////////////////////////////////////////////
// Application Architecture
class App {
   #map;
   #mapEvent;

   // executed immediately when a new object app is created from this class
   // in an event handler fucntion this keyword will be of the dom element on which has been attached
   constructor() {
      this._getPosition();
      form.addEventListener('submit', this._newWorkout.bind(this));
      inputType.addEventListener('change',this._toggleElevationField);
   }

   _getPosition() {
      if(navigator.geolocation)
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),this.__failLoadMap)
   }

   _loadMap(position){
         const {latitude} = position.coords
         const {longitude} = position.coords
         console.log(latitude,longitude);
         console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

         const coords = [latitude,longitude]
         console.log(this);
         this.#map = L.map('map').setView(coords, 13);

         L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         }).addTo(this.#map);

         // Handling clicks on map
         this.#map.on('click', this._showForm.bind(this));
   }

   __failLoadMap() {
      alert('Could not get your position')
   }

   _showForm(mapE){
      this.#mapEvent = mapE
      form.classList.remove('hidden');
      inputDistance.focus();
   }

   _toggleElevationField(){
      inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
      inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
   }

   _newWorkout(e){
         e.preventDefault();
      
         // clear input fields
         inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
      
         // Display the marker
      
         const {lat, lng} = this.#mapEvent.latlng;
               L.marker([lat, lng]).addTo(this.#map).bindPopup(L.popup({
                  maxWidth: 250,
                  minWidth: 200,
                  autoCLose: false,
                  closeOnCLick:false,
                  className: 'running-popup'
               }))
               .setPopupContent('Workout')
               .openPopup();
   }
}

const app = new App();
// this get as an input two callback functions
// first one is the callback function which is called on success. So whenever the browser successfully got the coordinates of the current position of the user 
// error Callback, when we get an error when we get the coordinates.

// what i will do with latitude and longitude is to load the map and center that map on this position
// CDN = Content Delivery Network



