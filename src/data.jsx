
export default function Data({friend}){
    const {id,username,email}=friend
    return(
        <div style={{
            margin:'10px',
            border:'2px solid purple',
            padding:'10px',
            borderRadius:'20px',
        }}>
            <h4>Id:{id}</h4>
            <h4>Name:{username}</h4>
            <h4>Email:{email}</h4>
        </div>
    )
}