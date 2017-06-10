import React from 'react'


const TopToolbar = (props) => {
    const { showAddNote } = props
    return (
      <div className="toolbar">
       <h2>Noteworthi</h2>
       <button onClick={showAddNote} className="circular ui icon button">
         <i className="plus icon large"></i>
       </button>
       <div className="toolbar-profile"></div>
      </div>
    )
}

export default TopToolbar
