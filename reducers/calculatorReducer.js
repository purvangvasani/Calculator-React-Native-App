import {CAL_FIRST_VALUE} from '../actions/type'
// import {CAL_SECOND_VALUE} from '../actions/type'


const initialState = {
    firstValue: 0,
    lastValue: 0,
    operator: null,
    finalValue: 0
}

const calculatorReducer = (state=initialState, action) => {
    switch(action.type){
        case CAL_FIRST_VALUE:
                console.log('=========Reducer=========');
                console.log(action.payload.firstValue);
                console.log(action.payload.operator);
                console.log(action.payload.lastValue);
                console.log(action.payload.finalValue);
                console.log('====================================');
            return Object.assign({}, state, {
                firstValue: action.payload.firstValue,
                operator: action.payload.operator,
                lastValue: action.payload.lastValue,
                finalValue: action.payload.finalValue
            });
        // case CAL_SECOND_VALUE:
        // console.log('=========Reducer=========');
        // console.log(action.payload.firstValue);
        // console.log(action.payload.operator);
        // console.log(action.payload.lastValue);
        // console.log('====================================');
        //     return Object.assign({}, state,{
        //         firstValue: action.payload.firstValue,
        //         operator: action.payload.operator,
        //         lastValue: action.payload.lastValue,
        //         finalValue: 0
        //     });
        default:
            return state
    }
}

export default calculatorReducer