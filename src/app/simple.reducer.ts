import { Action } from '@ngrx/store';

export function simpleReducer(state: string = 'Hello World', action: Action) {
    console.log(action.type, state);

    switch (action.type) {
        case 'SPANISH':
            return state = 'Hola Mundo'
        case 'FRENCH':
            return state = 'bonjoutr le monde'
        default:
            return state;
    }

}