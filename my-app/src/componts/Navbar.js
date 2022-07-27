// import React from 'react'

export default function Navbar({theme,setTheme}) {
  return (
    <div className="navbars" style={{backgroundColor:theme?'#fff':'#272727',color:theme?'#272727':'#fff'}} >
        <div className="navbar">
            <h1 className='heading'>Head</h1>
            <ul className='nav' >
              <li className="home">
                <a href="#/" style={{color:theme?'#272727':'#fff'}}>Home </a>
              </li>
              <li className='about'>
                <a href="#/" style={{color:theme?'#272727':'#fff'}}>About</a>
              </li>
                <input type="text" placeholder='Search......' className='search' />
                <button className="btn">Search</button>
                
                <div className="switch-btn">
                <input type="checkbox" id='switch' className='switch' onClick={()=>setTheme(!theme)}  />
                <label htmlFor="switch" className='toggle' ></label>
                </div>
            </ul>
            </div>
    </div>
  )
}
