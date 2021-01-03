import DEV_KEY from './dev_keys';

export const fetchSearchGiphys = searchTerm => (
    $.ajax({
        method: 'get',
        url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${DEV_KEY}&limit=2`
    })
)