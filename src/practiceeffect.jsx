import { useEffect, useState } from "react"
import Data from "./data"

export default function Practice(){
    const [practice, setPractice] =useState([])
    
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setPractice(data))

    },[])

    return(
        <div style={{
            margin:'10px',
            border:'2px solid red',
            padding:'10px',
            borderRadius:'20px',
        }}>
            <h3>LoadData:{practice.length}</h3>
            {
                practice.map(pra => <Data friend={pra}></Data> )
            }
        </div>
    )
}