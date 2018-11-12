// Filters reducer

const nameReducerDefaultState = {
    firstName: 'meno',
    lastName: 'priezvisko', 
    email: 'email'
}
const nameReducer = (state = nameReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_FIRST_NAME_FILTER':
            return {
                ...state,
                text: action.text
            }
        default:
            return state
    }
}

export default nameReducer