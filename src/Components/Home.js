import React from 'react'
import { useSelector } from 'react-redux'
import loading from '../Assets/giphy.gif'
const Home = () => {
    let users = useSelector((state)=>state.users.users)

    let userslist = <img src={loading}  alt="" />
    if(users.length > 0){
        userslist = users.map((u,i)=>(
            <div key={i} className="card text-center mb-3">
            <div className="card-header">
              HomePage
            </div>
            <div className="card-body">
              <h5 className="card-title">{u.Username}</h5>
              <p className="card-text">{u.Email}</p>
             
            </div>
            <div className="card-footer text-muted">
              🥲😊
            </div>
          </div>
        ))
    }
  return <div className='container m-auto mt-5' > {userslist} </div>
  
}

export default Home