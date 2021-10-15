const initialState ={
    newToDos: [
        {
        task: "finish redux",
        id: Math.random()
        },
        {
        task: "Play sport",
        id: Math.random()
        },
    ]
}
export default function newToDosIdeas (state= {initialState}, action) {
    //eslint-disable-next-line
    const {type, payload} = action;
    switch (type) {
        default:
        return state   ;
    }
}