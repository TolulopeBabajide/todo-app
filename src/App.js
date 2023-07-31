import React, {useState} from 'react'
import Input from './Components/Input'
import Box from './Components/Box'

const App = () => {
  const [todos,setToDo]= useState([]);

  const removeTodo = (id) =>{
    const newToDos= todos.filter(
      (d,index)=>{
        if (index!==id){
            return true;
        } else{
          return false;
        }
      }
    )

    setToDo(newToDos);
  }

  const addToDoHandler =(item) => {
    setToDo(
     [ ...todos,
        {
          item,
          time:  new Date().toLocaleTimeString()
        }
      ]
    )
  }

  console.log(todos)



  return (
    <>
      <div className='bg-black h-screen p-3'>
          <div className='max-w-[750px] min-h-[550px] mx-auto rounded shadow-2xl bg-white '>

          
              <Input handler={addToDoHandler} />
              <Box data={todos} removeHandler={removeTodo}/>

            
          </div>
      </div>
    </>
  )
}

export default App 