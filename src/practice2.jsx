import { useEffect, useState } from "react"
import Display from "./Display"

export default function Menu(){
    const [menus ,setMenus]=useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setMenus(data))
    } , [])
    return (
        <div>
        {/* <h3>menu:{menus.length}</h3> */}
        {
          menus.map((menu) => <Display playName={menu}></Display>)
        }
        </div>
    )
}