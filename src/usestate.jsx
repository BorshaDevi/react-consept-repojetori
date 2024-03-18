import { useState } from "react"

function Count(){
    const [count, setCount] =useState( 0 )
    function handleClick(){
        const newCount=count +1
        setCount(newCount)

    }
     function handleby(){
         const newRemove= count -1
         setCount(newRemove)
     }
    return(
        <>
        <h3>count:{count}</h3>
        <button onClick={handleClick}>add </button>
        <button onClick={handleby}>remove</button>
        
        </>
    )
}
export default Count