import {createStore, combineReducers} from 'redux'

import calculatorReducer from './reducers/calculatorReducer'

const rootReducer = combineReducers({
    calculator: calculatorReducer
})

const configureStore = () => {
    return createStore(rootReducer)
}

export default configureStore