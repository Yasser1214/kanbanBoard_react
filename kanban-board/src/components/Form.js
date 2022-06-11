import {useState} from 'react'
import Todo from './tasks_comp/Todo'
import Doing from './tasks_comp/Doing'
import Verify from './tasks_comp/Verify'
import Done from './tasks_comp/Done'
import Modal from './Modal'
import "./tasks_comp/Tasks.css"
import "./Modal.css"
import {v4 as uuidv4} from 'uuid'

export default function Form() {

    

    const [todoArr, setTodoArr] = useState(
        [{txt: 'Learn React', id: uuidv4()}]
    );

    const [doingArr, setDoingArr] = useState(
        [{txt: 'Play video games', id: uuidv4()}]
    );

    const [verifyArr, setVerifyArr] = useState(
        [{txt: 'Watch my weight', id: uuidv4()}]
    );

    const [doneArr, setDoneArr] = useState(
        [{txt: 'Have my breakfast', id: uuidv4()}]
    );

    const [stateInput, setStateInput] = useState();

    const [noInput, setNoInput] = useState(false);

    const [taskCategory, setTaskCategory] = useState();

    

    const selectCategory = x => {
        setTaskCategory(x);
    }



    const closeModal = () => {
        setNoInput(false);
    }



    const deleteTodoElement = id => {
        const filteredState = todoArr.filter( item => {
            return item.id !== id;
        })
        setTodoArr(filteredState)
    }

    const deleteDoingElement = id => {
        const filteredState = doingArr.filter( item => {
            return item.id !== id;
        })
        setDoingArr(filteredState)
    }

    const deleteVerifyElement = id => {
        const filteredState = verifyArr.filter( item => {
            return item.id !== id;
        })
        setVerifyArr(filteredState)
    }

    const deleteDoneElement = id => {
        const filteredState = doneArr.filter( item => {
            return item.id !== id;
        })
        setDoneArr(filteredState)
    }



    const moveTask = (x, txt) => {
        setTaskCategory(x);
        setStateInput(txt);
    }



    const clearBoard = (e) => {
        /* Preventing default behavior avoid submission and so also
        the trigger of addTask() which would set noInput on true if
        the input bar is blank */
        e.preventDefault();
        setNoInput(false);

        setTodoArr([]);
        setDoingArr([]);
        setVerifyArr([]);
        setDoneArr([]);
    }



    const addTask = e => {
        e.preventDefault();

        if (stateInput !== undefined && stateInput.trim() !== "") {

            if (taskCategory === 0) {
                setTaskCategory();

                const newArr = [...todoArr];
                const newTask = {};
                newTask.txt = stateInput;
                newTask.id = uuidv4();

                newArr.push(newTask);

                setTodoArr(newArr);

            } else if (taskCategory === 1) {
                setTaskCategory();

                const newArr = [...doingArr];
                const newTask = {};
                newTask.txt = stateInput;
                newTask.id = uuidv4();

                newArr.push(newTask);

                setDoingArr(newArr);
                
            } else if (taskCategory === 2) {
                setTaskCategory();

                const newArr = [...verifyArr];
                const newTask = {};
                newTask.txt = stateInput;
                newTask.id = uuidv4();

                newArr.push(newTask);

                setVerifyArr(newArr);

            } else if (taskCategory === 3) {
                setTaskCategory();

                const newArr = [...doneArr];
                const newTask = {};
                newTask.txt = stateInput;
                newTask.id = uuidv4();

                newArr.push(newTask);
                
                setDoneArr(newArr);
            }

            setStateInput('');
            setNoInput(false);
        
        } else {
            setStateInput('');
            setNoInput(true);
        }
      
    }



    const linkedInput = e => {
        setStateInput(e);
    }



    return (
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">


            <form onSubmit={e => addTask(e)} className="mb-3">
                <label htmlFor="taskbar" className="form-label mt-3" 
                > Add a task : </label>
                <input 
                value={stateInput}
                onChange={e => linkedInput(e.target.value)}
                type="text" 
                className="form-control" 
                id="taskbar"/>


                <div className='row'>
                    <button 
                    onClick = {() => selectCategory(0)}
                    className="col-sm-auto mt-3 mx-3 btn btn-success d-block">
                        To Do
                    </button>
                    <button 
                    onClick = {() => selectCategory(1)}
                    className="col-sm-auto mt-3 mx-3 btn btn-warning d-block">
                        Doing
                    </button>
                    <button 
                    onClick = {() => selectCategory(2)}
                    className="col-sm-auto mt-3 mx-3 btn btn-danger d-block">
                        Verify
                    </button>
                    <button 
                    onClick = {() => selectCategory(3)}
                    className="col-sm-auto mt-3 mx-3 btn btn-primary d-block">
                        Done
                    </button> 
                    <button 
                    onClick = {(e) => clearBoard(e)}
                    className="col-sm-auto mt-3 mx-3 btn btn-info d-block">
                        Clear Board
                    </button>
                </div>
            </form>


            {/* Short circuit operator */}
            { noInput && 
                <Modal close={closeModal}/>
            }


            <div className='container'>
                <div className='row'>

                    
                    <ul className="col-sm list-group">
                        <h2 className='text-success mt-5 mb-5 font-weight-bold'> 
                            To Do : 
                        </h2>
                        {todoArr.map((item, index) => {
                            return (
                                <Todo
                                txt={item.txt}
                                key={index}  
                                id={item.id} 
                                delFunc={deleteTodoElement}
                                move={moveTask}
                                />
                            )
                        })}
                        {/* 
                        "key" stores the index of each tab. element so that React can
                        access each one of them separatly.
                        "id" can do the same but is used to send ids to func./props
                        /comp.
                        */}
                    </ul>

                    
                    <ul className="col-sm list-group">
                        <h2 className='text-warning mt-5 mb-5 font-weight-bold'> 
                            Doing : 
                        </h2>
                        {doingArr.map((item, index) => {
                            return (
                                <Doing
                                txt={item.txt}
                                key={index}  
                                id={item.id} 
                                delFunc={deleteDoingElement}
                                move={moveTask}
                                />
                            )
                        })}
                    </ul>

                    
                    <ul className="col-sm list-group">
                        <h2 className='text-danger mt-5 mb-5 font-weight-bold'> 
                            Verify : 
                        </h2>
                        {verifyArr.map((item, index) => {
                            return (
                                <Verify
                                txt={item.txt}
                                key={index}  
                                id={item.id} 
                                delFunc={deleteVerifyElement}
                                move={moveTask}
                                />
                            )
                        })}
                    </ul>

                
                    <ul className="col-sm list-group">
                        <h2 className='text-primary mt-5 mb-5 font-weight-bold'> 
                            Done : 
                        </h2>
                        {doneArr.map((item, index) => {
                            return (
                                <Done
                                txt={item.txt}
                                key={index}  
                                id={item.id} 
                                delFunc={deleteDoneElement}
                                move={moveTask}
                                />
                            )
                        })}
                    </ul>


                </div>
            </div>


        </div>
    )



}