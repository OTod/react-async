import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data });

    };
};

export const fetchUser = (userID) => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/user' + userID);

        dispatch({ type: 'FETCH_USER', payload: response.data })
    }
}

