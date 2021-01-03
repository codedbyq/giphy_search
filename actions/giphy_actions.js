import * as APIUtil from '../util/api_util';

export const RECEIVE_SEARCH_GIPHYS = 'RECEIVE_SEARCH_GIPHYS';

const receiveSearchGiphys = giphys => {
    return {
        type: RECEIVE_SEARCH_GIPHYS,
        giphys
    }
}

export const searchGiphy = searchTerm => dispatch => (
    APIUtil.fetchSearchGiphys(searchTerm).then(res => dispatch(receiveSearchGiphys(res)))
);
