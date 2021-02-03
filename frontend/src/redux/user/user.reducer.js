import { UserActionTypes } from './user.types'

const USER_INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = USER_INITIAL_STATE, action) => {
    switch (action.type) { // jeżeli typ akcji...
        case UserActionTypes.SET_CURRENT_USER: // jest jak wskazany tutaj
            return { // to zwracamy cały ten obiekt.
                ...state, // rozprzestrzeniony stan
                currentUser: action.payload // w tym rozprzestrzenionym stanie zmieniamy właściwość currentUSER
            }
        default: return state; // jeżeli typ akcji się nie zgadza zwracamy cały poprzedni stan w którym nic nie zmieniamy    
    }
}

export default userReducer