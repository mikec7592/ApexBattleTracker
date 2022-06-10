import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return ({ email, password }) => {
        // api request 
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