import React from 'react'
import {withRouter} from 'react-router-dom'
const CreateBlogsButton = ({history}) =>{
    
   const clickHandler = () =>{
        history.push('/createBlogs')

    }
    return (
        <button onClick={clickHandler} className="btn btn-default bg-warning text-white text-center rounded-bottom" type="button" style={{width: '100%', borderRadius: 0}}>Create Blog</button>
    )

}

export default withRouter(CreateBlogsButton);