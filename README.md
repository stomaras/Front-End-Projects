# Front-End-Projects
Front-End-Projects

#HTML5


#CSS3

- Cascading Stylesheets
- Layout and design
- Can be extended with Sass/Less

- Inline  CSS: Directly in the html element(NO!!!)
- Internal CSS: Using <style> tags within a single document
- External CSS: Linking an external .css file
  
- CSS Selectors : 
   - a { background-color: yellow; }
   - { === declaration start
   - a === selector
   - background-color === property
   - yellow === value
   - ; === declaration separator
   - } === declaration end
   - with this way will aplly this style in all links everywhere if you want to target a cerain link you could use a class or an id

 - Colors in CSS
    - Color Names
    - HTML5 Color names
    - Hexadecimal
    - RGB
  
    - body {
        color:red;
        background:coral
      }
  
    - h1 {
        color:#00ff00;
      }
  
    - p {
        color: rgb(0,0,255)
      }
  
  - Box Model
  
    - ![Στιγμιότυπο οθόνης (26)](https://user-images.githubusercontent.com/22882822/207412010-aecfec99-f17c-437d-8e4f-b2db135c88b6.png)
  
    - Margin Padding
    
      - p {
            margin-top:5px;
            margin-bottom:5px;
            margin-right:10px;
            margin-left:10px;
        }
      - p {
            margin:5px 10px 5px 10px
        }
      - p {
            margin:5px 10px;
        }
        
    - Positioning in CSS
      - Static
      - Relative
      - Absolute
      - Fixed
      - Initial
      - Inherit
- Position - Relative/Absolute example
  
      .p-box{
        width: 800px;
        height: 500px;
        border: 1px solid #000;
        margin-top: 10px;
        position: relative;
      }

      .p-box h1{
        position: absolute;
        top: 40px;
      }

      .p-box h2{
        position: absolute;
        top: 100px;
      }
  
  - Position - Fixed/Example
        Used for something which i want to see on the scrolling of the page
      .fix-me{
          position:fixed;
          top: 400px;
      }

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  # Redux Typescript Udemy
  
  - Local State : 
        - State that belongs to a single component
        - E.g listening to user input in an input field; toggling a "show more" details field
        - Should be managed component-inernal with useState() / useReducer()
  
  - Cross Component State :
        - State that affects multiple components
        - E.g open/close state of a modal overlay
        - Requires "prop chains" / "prop drilling"
  
  - App-Wide State
        - State that affects the entire app (most / all components)
        - E.g user authentication status

  - What is "Redux"?
    - A state management for cross-component or app-wide state
  
  - Core Redux Concepts 
    - Central Data (State) Store
    - Component set up subscriptions to Data Store, get a slice of redux store and use it
    - Reducer Function Mutates(=changes) the store data
    - Component dispatch actions or trigger certain actions 
    - Action is a typescript object which descibes the kind of operation the reducer should perform
    - Actions forwarded to the reducer 
    - Reducer update the state in data store
    - Data Store updated subsciping components notified
    
  - React - Redux -Typescript
    - action object must always has type property
    - connect function can be used as a wrapper around our class component to connect that class component to the store 
    - using useSelector react redux set automatically a sibscription to the store for this component
    - first we define, actions and actionTypes then we define actionCreators , then we define reducers and then we use them with hooks useSelector, useDispatch
    - undefined treated as falsy , we must always set all other states when we update a piece of state , because we override the old state 
    - IMPORTANT !!! You should never never mutate the state inside the reducer, you must always return a new state object , we must override the existing state
                    Objects and arrays are reference values in ts, this can lead to bugs and unpredictable behaviour , ui may not reflecting the state
                    alaways create a new object of state, always return the state with an immutable way , be carefult that you will never accidentally mutate 
                    your existing state, but you copy any objects which you added. So you always create a brand new object or array, whenever you need to update 
                    data.
    - createSlice : we are preparing slice of our global state , when we have different pieces of state which are not directly related 
                    let's sat an authentication status and counter status, we can create different slices in different files to make our code maintainable.
    - redux/toolkit: when using redux toolkit and its functions like create slice , we can not accedentally manipulate the existing state.
                     because redux toolkit internally uses another package, called immer which will detect code like this and will automatically clone the 
                     existing state, create a new state object, keep all the state which we are not editing and override the state which we are editing 
                     in an immutable way.
  
