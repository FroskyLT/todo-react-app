const ADD_CATEGORY = "ADD-CATEGORY";
const UPDATE_SINGLE_CATEGORY = "UPDATE-SINGLE-CATEGORY";
const DELETE_CATEGORY = "DELETE-CATEGORY";
const SHOW_ADD_CATEGORY_WINDOW = "SHOW-ADD-CATEGORY-WINDOW";
const HIDE_ADD_CATEGORY_WINDOW = "HIDE-ADD-CATEGORY-WINDOW";
const SHOW_PHONE_NAVIGATION = "SHOW-PHONE-NAVIGATION";
const HIDE_PHONE_NAVIGATION = "HIDE-PHONE-NAVIGATION";

let i = 1;

let initialState = {
    categories: [
        { id: 0, text: 'Category' },    
    ],
    singleCategory: '',
    addCategoryWindow: false,
    showPhoneNav: false
}

let mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            let newCategory = { id: i, text: state.singleCategory }
            state.categories.push(newCategory);
            state.singleCategory = '';
            i++;
            return state;
        case UPDATE_SINGLE_CATEGORY:
            state.singleCategory = action.category;
            return state;
        case DELETE_CATEGORY:
            state.categories.splice(action.id, 1);
            for (let j = action.id; j < state.categories.length; j++) {
                state.categories[j].id--;
            }
            i--;
            return state;
        case SHOW_ADD_CATEGORY_WINDOW:
            state.addCategoryWindow = true;
            return state;
        case HIDE_ADD_CATEGORY_WINDOW:
            state.addCategoryWindow = false;
            return state;
        case SHOW_PHONE_NAVIGATION:
            state.showPhoneNav = true;
            return state;
        case HIDE_PHONE_NAVIGATION:
            state.showPhoneNav = false;
            return state;          
        default:
            return state;
    }
}

export default mainReducer;

export const addCategoryActionCreator = () =>
    ({ type: ADD_CATEGORY });

export const updateSingleCategoryActionCreator = category =>
    ({ type: UPDATE_SINGLE_CATEGORY, category: category });

export const deleteCategoryActionCreator = id =>
    ({ type: DELETE_CATEGORY, id: id });

export const showAddCategoryWindowActionCreator = () => ({type:SHOW_ADD_CATEGORY_WINDOW});
export const hideAddCategoryWindowActionCreator = () => ({type:HIDE_ADD_CATEGORY_WINDOW});

export const showPhoneNavActionCreator = () => ({type:SHOW_PHONE_NAVIGATION})
export const hidePhoneNavActionCreator = () => ({type:HIDE_PHONE_NAVIGATION})
