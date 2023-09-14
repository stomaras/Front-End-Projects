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

when user submits the form with new workout then we 
1) Render workout on map
2) Render workout in list
3) Stores workouts in local storage

=========================================================================================== Project Architecture Ends ==============================================================================================
*/
'use strict';

// prettier-ignore

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

   _setDescription() {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
   }
}

class Running extends Workout {
   type='running';

   constructor(coords, distance, duration, cadence) {
      super(coords, distance, duration);
      this.cadence = cadence;
      this.calcPace();
      this._setDescription();
   }

   // on prototype
   calcPace(){
      // min/km
      this.pace = this.duration / this.distance;
      return this.pace;
   }

}
class Cycling extends Workout {
   type='cycling';
   
   constructor(coords, distance, duration, elevationGain) {
      super(coords, distance, duration);
      this.elevationGain = elevationGain;
      this.calcSpeed();
      this._setDescription();
   }

   // on prototype
   calcSpeed() {
      // km/h
      this.speed = this.distance / (this.duration / 60)
      return this.speed
  }
}

////////////////////////////////////////////////////
// Application Architecture
class App {
   #map;
   #mapEvent;
   #workouts = [];
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

   _hideForm() {
      //Empty Values
      inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
      form.style.display = 'none';
      form.classList.add('hidden');

      setTimeout(() => {
         form.style.display = 'grid'
      }, 1000)
   }

   _toggleElevationField(){
      inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
      inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
   }

   /////////////////////////// Helper Functions /////////////////////////////////////////

   _checkInputsFieldsRunning(...inputs) {
      // loop over the array and will check whether the number is finite or not every will return true if Number.isFinite is true for all of them
      // if only one from the inputs is not finite will return false
      return inputs.every(input => Number.isFinite(input));
   }

   _newWorkout(e){

         const allPositives = (...inputs) => inputs.every(inp => inp > 0);

         e.preventDefault();

         // Get Data From The Form
         const type = inputType.value;
         const distance = +inputDistance.value;
         const duration = +inputDuration.value;
         const {lat, lng} = this.#mapEvent.latlng;
         let workout;

         // If workout is running, create running object
         console.log(type,duration,distance);
         if(type === 'running'){
            const cadence = +inputCadence.value;
            console.log('running check');
            // Check If Data is valid
            if(!this._checkInputsFieldsRunning(distance, duration, cadence) || !allPositives(distance, duration, cadence)) return alert('Inputs have to be positive numbers')

            workout = new Running([lat, lng], distance, duration, cadence);
         }

         // If workout is cycling, create cycling object
         if(type === 'cycling'){
            // Check If Data is valid
            const elevation = +inputElevation.value;
            if(!this._checkInputsFieldsRunning(distance, duration, elevation) || !allPositives(distance, duration)) return alert('Inputs have to be positive numbers')
            workout = new Cycling([lat, lng], distance, duration, elevation);
         }

         // Add new object to the workout array
         this.#workouts.push(workout)
         console.log(workout);


         // Render workout on map as marker
         this.renderWorkoutMarker(workout)

         // Render workout on list
         this._renderWorkout(workout)

         // Hide form + clear input fields
         this._hideForm();
      
         // Display the marker
   }

   renderWorkoutMarker(workout){
      L.marker(workout.coords).addTo(this.#map).bindPopup(L.popup({
         maxWidth: 250,
         minWidth: 200,
         autoCLose: false,
         closeOnCLick:false,
         className: `${workout.type}-popup`
      }))
      .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}${workout.description}`)
      .openPopup();
   }

   // we use the data property in order to use a bridge between the user interface and data that we have in our application.
   _renderWorkout(workout) {
      let html = `
      <li class="workout workout--${workout.name}" data-id="${workout.id}">
         <h2 class="workout__title">${workout.description}</h2>
         <div class="workout__details">
         <span class="workout__icon">${
            workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
         }</span>
         <span class="workout__value">${workout.distance}</span>
         <span class="workout__unit">km</span>
         </div>
         <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
         </div>
      `;

      if(workout.type === 'runnnning')
         html += `
            <div class="workout__details">
               <span class="workout__icon">⚡️</span>
               <span class="workout__value">${workout.pace.toFixed(1)}</span>
               <span class="workout__unit">min/km</span>
            </div>
            <div class="workout__details">
               <span class="workout__icon">🦶🏼</span>
               <span class="workout__value">${workout.cadence}</span>
               <span class="workout__unit">spm</span>
            </div>
         </li>
         `;

         if(workout.type === 'cycling'){
            html += `
                  <div class="workout__details">
                  <span class="workout__icon">⚡️</span>
                  <span class="workout__value">${workout.speed.toFixed(1)}</span>
                  <span class="workout__unit">km/h</span>
               </div>
               <div class="workout__details">
                  <span class="workout__icon">⛰</span>
                  <span class="workout__value">${workout.elevationGain}</span>
                  <span class="workout__unit">m</span>
               </div>
            </li>
         `;
         }

         form.insertAdjacentHTML('afterend', html);

   }
}

const app = new App();
// this get as an input two callback functions
// first one is the callback function which is called on success. So whenever the browser successfully got the coordinates of the current position of the user 
// error Callback, when we get an error when we get the coordinates.

// what i will do with latitude and longitude is to load the map and center that map on this position
// CDN = Content Delivery Network



