import React from 'react'

function InsideLayout(props) {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ backgroundColor: 'lightblue', padding: 20, height: '100vh' }}>
                <p>InsideLayout Sidebar</p>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default InsideLayout