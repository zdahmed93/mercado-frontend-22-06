import React from 'react'

import Sidebar from '../components/Sidebar'

function InsideLayout(props) {
  return (
    <div style={{ display: 'flex' }}>
        <Sidebar />
        <div>
            {props.children}
        </div>
    </div>
  )
}

export default InsideLayout