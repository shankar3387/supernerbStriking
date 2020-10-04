import React from 'react'
import {withRouter} from 'react-router-dom'
const  CreatePollsButton = ({history}) =>{
   const clickHandler = () =>{
    console.log('hhhh')
    history.push('/createPolls')
    }
    return (
        <button onClick={clickHandler} className="btn btn-default bg-warning text-white px-4" type="button">Create Poll</button>
        
    ) 
}

export default withRouter(CreatePollsButton);