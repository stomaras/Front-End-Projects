const redux = require("redux");
const createStore = redux.createStore
const reduxLogger = require('redux-logger')
const combinedReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger();

// Action Type
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';


// Action Creators
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First Redux action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'Second Redux Action'
    }
}

// (previousState, action) => newState

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}


const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes -1
        }
        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams -1
        }
        default: return state
    }
}

const rootReducer = combinedReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})


const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe();