const ADD_TASK = "ADD-TASK";

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
            state.tasks.push(action.task);
            state.singleTask = '';
            return state;
        default:
            return state;
    }
}

export default mainReducer;

export const addTaskActionCreator = task =>
    ({ type: ADD_TASK, task: task });