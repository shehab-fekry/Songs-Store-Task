const SET_FORM_ELEMENTS = 'SET_FORM_ELEMENTS';

export const setFormElements = (updatedForm, key) => {
    let formInfo = {};
    formInfo[key] = updatedForm[key].value;

    return{
        type: SET_FORM_ELEMENTS,
        formInfo: formInfo,
    }
}