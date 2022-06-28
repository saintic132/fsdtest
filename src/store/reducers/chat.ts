import {initialProjectsStateType} from "./types";

const initialProjectsState: initialProjectsStateType = {
    users: [
        {id: 1, name: 'Patrick', message: 'Hello world asd asd a'},
        {id: 2, name: 'Hanna', message: 'Lolitaasd asd asd asd'},
        {id: 3, name: 'Petr', message: 'Picasso asd asd as da'}
    ],
}

export const chatReducer = (state: initialProjectsStateType = initialProjectsState, action: any): initialProjectsStateType => {
    switch (action.type) {
        default:
            return state
    }
}