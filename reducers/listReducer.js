const initialState = {

}

const PrimaryReducer = (state = initialState, action) => {

    switch(action.type){
        case 'ADD_EVENT':
            return{
                ...state,
                event: action.payload,
            }
        default:
            return state
    }

}

export default PrimaryReducer;