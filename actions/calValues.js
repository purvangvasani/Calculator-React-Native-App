import {CAL_FIRST_VALUE} from './type'
// import {CAL_SECOND_VALUE} from './type'

export const calFirstValue = (firstValue, operator, lastValue, finalValue) => {
    return {
        type: CAL_FIRST_VALUE,
        payload: {firstValue, operator, lastValue, finalValue}
    }
}

// export const calSecondValue = (firstValue, operator, lastValue, finalValue) => {
//     return {
//         type: CAL_SECOND_VALUE,
//         payload: {firstValue, operator, lastValue, finalValue}
//     }
// }