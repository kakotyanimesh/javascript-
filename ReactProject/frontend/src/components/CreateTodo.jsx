import { useState } from "react"

export function CreateTodo (){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return <div>

        <input id="title" style={{
            padding: 10,
            margin: 10,
            borderRadius: 50
            
        }} type="text"  placeholder="title" onClick={(e)=> {
            const value = e.target.value
 
        }}/>
        <input id="description" style={{
            padding: 10,
            margin: 10,
            borderRadius: 50
        }} type="text" placeholder="description"/>

        <br /> <br />
        <button style={{
            padding: 10,
            margin: 10,
            borderRadius: 50,
            backgroundColor: "#eea990"
        }} onClick={()=>{
            fetch("https://localhost:3000/todo", {
                method: 'post',
                body: JSON.stringify({
                    title: title,
                    description: description

                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(async ()=>{
                const json = await res.json()
                alert('todo created') 
            })
        }}>add a todo</button>
    </div>
}


