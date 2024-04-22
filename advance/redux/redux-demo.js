const redux = require('redux ')

const counterReducer = (state, action) => {
    return {
        counter: state.counter + 1
    }
}

const store = redux.createStore(counterReducer)

const counterSubscriber = () => {
    store.getState()
}

store.subscribe(counterSubscriber)
store.dispatch({type: 'increment'})