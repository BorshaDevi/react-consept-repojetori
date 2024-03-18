import { useEffect, useState } from "react"

export default function Effect(){
    const [users, setUsers ] = useState([])
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then (res => res.json())
      .then(data => setUsers(data))
    },[])

    return(
        <div style={{
            margin:'10px',
            border:'2px solid purple',
            padding:'10px',
        }}>
            <h3>effectCount:{users.length}</h3>
        </div>
    )
}