const ADD_TASK = "ADD-TASK";
const UPDATE_SINGLE_TASK = "UPDATE-SINGLE-TASK";
const DELETE_TASK = "DELETE-TASK";

let i = 4;

let initialState = {
    tasks: [
        { id: 0, text: 'Wake up' },
        { id: 1, text: 'Code' },
        { id: 2, text: 'Eat' },
        { id: 3, text: 'Sleep' }
    ],
    singleTask: ''
}

let mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            let text = { id: i, text: state.singleTask }
            state.tasks.push(text);
            state.singleTask = '';
            i++;
            return state;
        case UPDATE_SINGLE_TASK:
            state.singleTask = action.task;
            return state;
        case DELETE_TASK:
            state.tasks.splice(action.id, 1);
            if (state.tasks.length - 1 !== action.id) {
                for (var count = action.id + 1; count < state.tasks.length; count++) {
                    state.tasks[count].id--;
                }
            }
            i--;
            return state;
        default:
            return state;
    }
}

export default mainReducer;

export const addTaskActionCreator = task =>
    ({ type: ADD_TASK, task: task });

export const updateSingleTaskActionCreator = task =>
    ({ type: UPDATE_SINGLE_TASK, task: task });

export const deleteTaskActionCreator = id =>
    ({ type: DELETE_TASK, id: id });