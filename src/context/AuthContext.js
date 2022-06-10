import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
            case 'signup': 
            return{ errorMessage: '', token: action.payload };
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', {email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({  type: 'signup', payload: response.data.token });
        } catch (err) {
            dispatch({ type: 'add_error', payload: 'Whoops! Looks like something went wrong with sign up.' });
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
    { token: null, errorMessage: '' }
);