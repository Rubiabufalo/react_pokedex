import React, { useState } from 'react';
import './Switch.css';

const Switch = () => {
    const [active, setActive] = useState(false);

    return (
        <div 
            className={`Switch ${active ? 'Switch-active' : ''}`}
            onClick={() => {setActive(!active)}}
        >
            <div className="Switch-toggle"/>
        </div>
    );
}
 
export default Switch;