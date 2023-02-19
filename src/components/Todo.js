import React,{useState,useRef} from 'react';

function Todo() {

  const inputRef=useRef();

  const [taskToDo,setTaskToDo]=useState("");
  const [allTasks,setAllTasks]=useState([]);

  const handleChangeToAdd=(event)=>{
    setTaskToDo(event.target.value);
  }

  const addTask=()=>{
    taskToDo && setAllTasks([...allTasks,taskToDo]);
    inputRef.current.value="";
    inputRef.current.focus();
  }

  const removeItem=(taskToRemove)=>{
    setAllTasks(allTasks.filter(task=>task !== taskToRemove));
  }

  const updateItem=(taskToUpdate)=>{

    const newTask=prompt("Enter task to update");
    setAllTasks(allTasks.map((item)=>{
      return item === taskToUpdate ? newTask : item;
    }))
    
  }

  return (

    <div className='bg-gray-50 flex flex-col'>

      <div className='flex flex-col justify-center items-center py-16 gap-16'>

        <input className='w-[25vw] h-10 rounded-2xl outline-none text-center' placeholder='add task' onChange={handleChangeToAdd} ref={inputRef} />

        <button className='text-gray-500 bg-gray-200 rounded-2xl p-2' onClick={addTask}>execute</button>

      </div>
        
      <div className='text-center'>
        {allTasks && allTasks.map((task,key)=>(
          <div className='flex flex-col justify-center items-center w-[50vw] h-[15vh] ml-[25vw] mb-10 bg-white shadow-md rounded-lg overflow-x-hidden' key={key}>
            <div className='text-lg mb-8'>{task}</div>
            <div>
              <button className='mx-4 text-gray-500 bg-gray-200 rounded-lg p-2' onClick={()=>removeItem(task)}>Remove</button>
              <button className='mx-4 text-gray-500 bg-gray-200 rounded-lg p-2' onClick={()=>updateItem(task)}>Update</button>
            </div>
          </div>
        ))}

      </div>

    </div>
    
  )
}

export default Todo;
