import { Card,Form, Modal, Button } from 'react-bootstrap';
import './Task.css';
import React, {useState} from 'react'
 import { useDispatch } from 'react-redux';
import { TaskIsDone } from "../../Actions"
import { EditTask } from "../../Actions"


function Task({taskToDo}){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

    const handleDone=() => {
      dispatch(TaskIsDone( {id: taskToDo.id}))
    }



   const dispatch = useDispatch()
  const [taskEdit, setTaskEdit ] = useState("");
  
  const handleEditChange =(input) =>{
    setTaskEdit(input)
  }
  const handleEditSubmit=()=> {
    if (taskEdit) {dispatch(EditTask({task: taskEdit, id: taskToDo.id}));
    handleClose()}
    else {alert('enter a valid task')}
  }
  console.log(taskEdit)  
   
    return (
<Card border="primary" style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Text style={{textDecoration: taskToDo.done ? "line-through" : "none" }} > 
        {taskToDo.task}
      </Card.Text>
      <Button variant="success" onClick={handleDone}>{taskToDo.done? "Undo": "Done"}</Button>
      <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit your To-Do </Modal.Title>
          </Modal.Header>
          <Modal.Body className="inputAddMovie">
          <Form.Control type="text" placeholder={taskToDo.task} name="task" onChange={(e) =>handleEditChange(e.target.value)}
          />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleEditSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    </Card.Body>
  </Card>

    )
}
export default Task