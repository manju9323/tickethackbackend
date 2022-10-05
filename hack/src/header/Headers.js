import React from 'react'
import "./header.css"
//import {Link} from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
/*
<Link to="/Home">Home</Link>
  <Link to="/series">Series</Link>
  <Link to="/movies">Movies</Link>*/
function Headers(props) {
  return (
<div className='head'>
<div className='head1'>
    <h3>MM SHOW</h3>
    <div className='search'><SearchIcon/>
    <input className='inp' type="text" placeholder="Search for Movies, Event, Plays, Series,Activities"></input></div>
    
   <button className='sign'>SIGN IN</button>
    </div>
</div>
    
    
  )
}

export default Headers