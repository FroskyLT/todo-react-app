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
            for (let j = action.id; j < state.tasks.length; j++) {
                state.tasks[j].id--;
            }
            i--;
            return state;
        default:
            return state;
    }
}

export default mainReducer;

export const addTaskActionCreator = () =>
    ({ type: ADD_TASK });

export const updateSingleTaskActionCreator = task =>
    ({ type: UPDATE_SINGLE_TASK, task: task });

export const deleteTaskActionCreator = id =>
    ({ type: DELETE_TASK, id: id });