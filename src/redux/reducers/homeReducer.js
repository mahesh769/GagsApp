import { PAGINATION_INITIAL_LIST_RES } from '../../utility/constants';
import { actionTypes } from '../services/actionTypes';

export default function homeReducer(state = {
    ishomeSuccess: false,
    homeRes: undefined
}, action) {

    switch (action.type) {

        case actionTypes.HOME_METHOD:
            return { ...state, homeFetching: true, homeError: null, ishomeSuccess: false };
            break;
        case actionTypes.HOME_SUCCESS:
            let array=action.payload
            if(state.homeRes&&state.homeRes.length>0){
                array=[...state.homeRes,action.payload[0]]
            }
            return { ...state, homeFetching: false, homeError: null, homeRes: array, ishomeSuccess: true };
            break;
        case actionTypes.HOME_FAILURE:
            return { ...state, homeFetching: false, homeError: action.error, homeRes: state.homeRes, ishomeSuccess: false };
            break;


        default:
            return state;
    }
}