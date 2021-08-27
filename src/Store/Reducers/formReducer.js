const SET_FORM_ELEMENTS = 'SET_FORM_ELEMENTS';

let initialState = {
    formInfo: {},
}

const Reducer = (state = initialState, action) => {
    switch(action.type)
    {
        case SET_FORM_ELEMENTS:
            return{
                ...state,
                formInfo: {
                    ...state.formInfo,
                    ...action.formInfo,
                }
            }
        default:
            return state;
    }
}

export default Reducer;