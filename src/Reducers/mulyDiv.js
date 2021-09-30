import MultiplyNumber from '../Actions/Action'

const initialState = 5;


const multyAndDivide = (state = initialState, action) => {

    switch (action.type) {
        case "MULTIPLE": return state * 5;
        case "DIVIDE": return state / 5;
        default: return state;
    }



}
export default multyAndDivide
