const SHOW_MODAL = "SHOW-MODAL";
const HIDE_MODAL = "HIDE-MODAL";

let initialState = {
    show: false
}

let modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            state.show = true;
            return state;
        case HIDE_MODAL:
            state.show = false;
            return state;
        default:
            return state;
    }
}

export default modalReducer;

export const showModalActionCreator = () => ({ type: SHOW_MODAL });
export const hideModalActionCreator = () => ({ type: HIDE_MODAL });