import { useState } from 'react'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
      
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
        
//     </div>
//   )
// }

// export default App

// let state = {
//   count : 0
// }

// function App() {
//   function onClickHandeler() {
//     // alert('animeh')
//     state.count = state.count + 1;

//   }
//   return (
//     <div>
//       <button onClick={onClickHandeler} >counter {state.count}</button>
//     </div>
//   )
// }

// export default App

                         // counter app 
// function App(){
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <CustomButon count={count} setCount={setCount} ></CustomButon>
//     </div>
//   )
// }

// //component 

// function CustomButon(props) {

//   function onClickHandeler() {
//     props.setCount(props.count + 1)

//   }
//   return <button onClick={onClickHandeler}>counter {props.count}</button>
  
// }

// export default App


// counter app done now lets make a todo app 


function App() {
                                                    // have to write under array []
  const [todos, setTodos] = useState([{
    title : 'go to gym', 
    description: 'go to gym by 9 to 10',
    completed : false
   }, {
    title : 'go to study',
    description: 'go to gym by 10 to 3pm',
    completed : false
   }])


  
   return (
    <div>
      {/* add a button */}
      

      <button onClick={()=>{
        setTodos ([...todos, {
          title: 'newtodos',
          description: 'fuckedup'
        }])
      }}>add todo </button>

      {/* <Todo title={todos[0].title} description={todos[0].description}/>
      <Todo title={todos[1].title} description={todos[1].description}/>
       */}
       
      {/* we can do the sama thing by using the map  */}


      {todos.map(function (todos) {
        return <Todo title={todos.title} description={todos.description}/>
        
      })}



       
       {/* {todos.map(function (todos) {
        return <Todo title= {todos.title} description={todos.description}/>
       })} */}
    </div>
   )
  
}

// lets write the component 

function Todo(para) {
  return <div>
    <h1>{para.title}</h1>
    <h2>{para.description}</h2>
  </div>
  
}

export default App