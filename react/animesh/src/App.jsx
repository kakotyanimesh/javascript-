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


function App(){
  const [count, setCount] = useState(0)

  return (
    <div>
      <CustomButon count={count} setCount={setCount} ></CustomButon>
    </div>
  )
}

//component 

function CustomButon(props) {

  function onClickHandeler() {
    props.setCount(props.count + 1)

  }
  return <button onClick={onClickHandeler}>counter {props.count}</button>
  
}

export default App