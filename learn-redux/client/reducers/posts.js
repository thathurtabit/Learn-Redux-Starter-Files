// Reducer takes in two things
// 1. the action (info about what happened)
// 2. copy of current state

export default function posts(state = [], action) {
    console.log('The post will change');
    console.log(state, action);
    return state;
}
