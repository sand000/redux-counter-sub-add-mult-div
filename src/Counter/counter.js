

export const counterReducer = (state={count:0}, action)=>{
const {type, payload}= action
    switch(type){
        case "INCREMENT": return{ ...state, count: state.count+payload}
        case "DECREMENT": return{ ...state, count: state.count-payload}
        case "MULTIPLY": return{ ...state, count: state.count*payload}
        case "DIVIDE": return{ ...state, count: state.count/payload}
        default: return state;
    }
}