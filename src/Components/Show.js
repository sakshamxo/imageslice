import React from 'react'
import { useSelector } from 'react-redux'
const Show = () => {
    let users = useSelector((state)=> state.users.users)

    let userslist = <p>Loading....</p>
    if(users.length > 0){
        userslist = users.map((u,i)=>(
            <li key={i} className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">{u.Username}</div>
             {u.Email}
            </div>
            <span className="badge bg-primary rounded-pill">;-/</span>
          </li>
         
        ))
    }
  return     <ol className="list-group list-group-numbered"> {userslist}</ol>
  
    
    

}

export default Show