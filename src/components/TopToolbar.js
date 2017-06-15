import React from 'react'
import { Link } from 'react-router-dom'

const TopToolbar = () => {
    return (
      <div className="toolbar">
       <h2>Noteworthi</h2>
       <Link to="/new" className="circular ui icon button">
         <i className="plus icon large"></i>
       </Link>
      </div>
    )
}

export default TopToolbar
