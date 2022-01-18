const initValue = {
    counter: 0
}

const reducer = (state = initValue, action) =>{
    switch(action.type){
        case "INCREASE":
            state.counter += 1
            return { ...state}
        default:
            return state
    }
}

export default reducer