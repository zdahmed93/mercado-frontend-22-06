import React from 'react'

function OutsideLayout(props) {
    return (
        <div>
            <div style={{ backgroundColor: 'lightgreen', padding: 15 }}>
                <p>OutsideLayout Navbar</p>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default OutsideLayout