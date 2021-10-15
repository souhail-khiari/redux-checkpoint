import { Button, Form } from 'react-bootstrap';
import './AddTask.css';
import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from "../../Actions"




function AddTask(){
   const dispatch = useDispatch()
    const  [newToDo, setNewToDo]= useState("")
    const handleChange =(input) =>{
        setNewToDo(input)
    }
    const handleSubmit =()=> {
        if (newToDo){
        dispatch(addTask({newToDo: newToDo}))
        }
        else {alert("You need to write a task!")}
    }
   
    return (
<div className="add">
<h2> To Do List </h2>
<div className="input">
<Form.Control type="text" placeholder="Add a task here..." onChange={(e) => handleChange(e.target.value) }/>
<Button className="addButton" variant="light"onClick={handleSubmit}>    ADD    </Button>
</div>
</div>
    )
   
}
export default AddTask