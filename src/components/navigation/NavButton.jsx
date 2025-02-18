import React from "react";

const NavButton = ({x, y, label, link, icon, newTab}) => {
    return (
        <div className='absolute cursor-pointer z-50'
        style={{transform: `translate(${x}, ${y}`}}
        >{label}</div>
    )
}

export default NavButton