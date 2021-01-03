import { RECEIVE_SEARCH_GIPHYS } from '../actions/giphy_actions';

const giphysReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SEARCH_GIPHYS:
            return Object.assign({}, state, action.giphys);
    
        default:
            return state;
    }
}

export default giphysReducer;