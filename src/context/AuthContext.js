import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', {email, password });
            console.log(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };
};

const signin = (dispatch) => {
    return ({ email, password }) => {
    // signin, update state, error?
    };
};

const signout = (dispatch) => {
    return () => {
        // signout
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {signin, signup, signout},
    { isSignedIn: false }
);