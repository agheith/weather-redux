import { FETCH_WEAHTER } from '../actions/index';

export default function(state = [], action){
    switch(action.type){
        case FETCH_WEAHTER:
            return [ action.payload.data, ...state ];
        
        default:
            return state;
    }
}
