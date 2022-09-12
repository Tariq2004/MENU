import React from 'react'
import {NavLink} from "react-router-dom"
import "./Navigate.css"

function Navigate() {
  return (
    <div>
        <span>
        <NavLink activeClassName="active" to="/welcome" style={ {color: "white"} }>Welcome</NavLink>
        </span>
        <br />
        <br />
        <br />
        <NavLink activeClassName="active" to="/helo" style={ {color: "red"} }>hello</NavLink>
      <button className="btn1 btn btn-primary">Click me!</button>
      <div className='div1 col col-md-6'>hello</div>
      <div className='div2'>My</div>
      <div className='div3'>Friend</div>
    </div>
  )
}

export default Navigate