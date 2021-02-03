import { UserActionTypes } from './user.types'

const setCurrentUser = user => ({ // funkcja zwracająca obiekt zawierający typ akcji oraz jkej payload cyzli zawartość
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export default setCurrentUser