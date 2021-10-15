import {ADD_TASK} from '../Constants/action-types'
import {TASK_IS_DONE} from '../Constants/action-types'
import {EDIT_TASK } from '../Constants/action-types'


const initialState ={
    todos: [
        {
            task: "finish redux",
            done: true,
            id: Math.random()
        },
        {
            task: "Play sport",
        done: false,
        id: Math.random()
        },
        {
            task: "Watch a movie",
        done: true,
        id: Math.random()
        },
        {
            task: "Go hiking",
        done: true,
        id: Math.random()
        },
        {
            task: "start back-end",
         done: false,
         id: Math.random()
        },
        ]
    }
    
    export default function toDosReducer (state=initialState , action){
        const {type, payload} =action;
        switch (type) { 
            case (ADD_TASK):{
                return {
                todos:[
                    ...state.todos, 
                    { 
                    task: payload.newToDo,
                    done: false,
                    id: Math.random() 
                    }
                    ]
                }
            }

            case (TASK_IS_DONE):{
                return {
                todos: state.todos.map(task=> task.id === payload.id ? {...task, done: !task.done} : task)
                }
            }

            case (EDIT_TASK ):{
              
                return {
                todos: state.todos.map(object=> object.id === payload.id ? {...object, task: payload.task} : object)  
            }
            }
            
        
            default:
                return state;
        
        }
    }