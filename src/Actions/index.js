import {ADD_TASK} from '../Constants/action-types'
import {TASK_IS_DONE} from '../Constants/action-types'
import {EDIT_TASK} from '../Constants/action-types'

export function addTask (payload){
    return {
 type: ADD_TASK,
payload: payload
    }
}
export function TaskIsDone (payload){
    return {
 type: TASK_IS_DONE,
payload: payload
    }
}
export function EditTask (payload){
    return {
 type: EDIT_TASK,
payload: payload
    }
}