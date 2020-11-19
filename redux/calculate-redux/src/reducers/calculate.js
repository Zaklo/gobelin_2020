import { SET_NUMBER, ADDITION } from '../constants/actions';

// Source de vérité
const stateInit = {
    number1 : '',
    number2: '',
    result : 0,
    message : 'Bienvenu dans notre calculatrice'
}

// TODO {} dans action 
const reducer = (state = stateInit, action = {}) => {

    switch(action.type){

        case SET_NUMBER :

            const { value, name } = action.payload;

            return {
                ...state,
                [name] :  value
            }

        case ADDITION:

            return {
                ...state,
                result : parseFloat( state.number1 ) + parseFloat( state.number2 )
            }

        default:
            return state;
    }
}

export default reducer;