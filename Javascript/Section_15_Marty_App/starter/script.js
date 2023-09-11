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



*/