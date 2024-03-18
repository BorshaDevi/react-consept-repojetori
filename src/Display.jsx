import './design.css'
export default function Display({playName}){
    console.log(playName)
    const {id,username,email,phone,website} =playName
    return(
        <div className='design'>
          <h3>id:{id}</h3>
          <h3> name:{username}</h3>
          <h3>email:{email}</h3>
          <h3>Phone:{phone}</h3>
          <h3>website:{website}</h3>
        </div>
    )
}