const ADD_TASK = "ADD-TASK";
const UPDATE_SINGLE_TASK = "UPDATE-SINGLE-TASK";

let initialState = {
    tasks: [
        { text: 'Wake up' },
        { text: 'Code' },
        { text: 'Eat' },
        { text: 'Sleep' }
    ],
    singleTask: ''
}

let mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            let text = {text: state.singleTask}
            state.tasks.push(text);
            state.singleTask = '';
            return state;
        case UPDATE_SINGLE_TASK:
            state.singleTask = action.task;
            return state;
        default:
            return state;
    }
}

export default mainReducer;

export const addTaskActionCreator = task =>
    ({ type: ADD_TASK, task: task });

export const updateSingleTaskActionCreator = task => 
    ({type: UPDATE_SINGLE_TASK, task: task});