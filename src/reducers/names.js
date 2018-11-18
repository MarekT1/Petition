// Filters reducer
const nameReducerDefaultState = []

const nameReducer = (state = nameReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_UPDATE_STATE':
            return {
                ...state,
                state: action.text
            }
        default:
            return state
    }
}

export default nameReducer