
import './App.css'
import Count from './usestate'
import Effect from './Useeffect'
import Practice from './practiceeffect'
import Menu from './practice2'


function App() {
   

  // class 1
//   function handleClick(){
//     alert('button click')
//   }
// const handleOne=(num)=>{
//         alert(num +5)
// }
  return (
    <>
      <h1>React Core Concepts</h1>

    {/* practice class 4,5 */}
      <Menu></Menu>
     <Practice></Practice>
     {/* useEffect class 3 */}

     <Effect></Effect>

      {/* useState class 2 */}
     <Count></Count>

      {/* btn class 1 */}
       {/*(1) react a  onClick hobe .
          (2)={} ata dia  ar vitor function nam ta likhte hbe {handleClick} akhane function call  kra jabe na.
          (3) onclick modhe{ modhe r 1ta function likhte hbe } ar madhome 1 line a handleClick add kra jai.  */}
      
      
      {/* <button onClick={handleClick}>Click me</button> */}

      {/* onclick ar modhe function dea  */}
      {/* <button onClick={()=>{
        alert('advances')
      }}>Advances</button>

      <button onClick={() => alert('menu is open')}>menu</button>
        */}
       
       {/* parameter pass korar khetre(ayta amra onk bebohar krbo.) */}
      {/* <button onClick={() => handleOne(2)}>new one</button> */}

    </>
  )
}

export default App
