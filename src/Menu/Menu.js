import React, { useState } from 'react'
import './Menu.css'

import logo from "../assets/images/logo.png"
import {ReactComponent as Blocks} from "../assets/svg/blocks.svg"
import {ReactComponent as List} from "../assets/svg/list.svg"
import {ReactComponent as Hamburguer} from "../assets/svg/hamburger.svg";
import {ReactComponent as Sun} from "../assets/svg/sun.svg";
import Switch from '../Switch/Switch'

const Menu = () => {
    const [viewStyle, setViewStyle] = useState(0);

    return ( 
        <div className="Menu">
            <div className="Menu-hamburguer">
                <Hamburguer />
            </div>

            <div className="Menu-left">
                <Blocks
                    className={viewStyle === 0 ? 'selected' : ''}
                    onClick={() => {setViewStyle(0)}}
                />

                <List 
                    className={viewStyle === 1 ? 'selected' : ''}
                    onClick={() => {setViewStyle(1)}}
                />
            </div>

            <img src={logo} className="Menu-logo" />
            <div className="Menu-right">
                <Sun />
                <Switch />
            </div>

        </div>
     );
}
 
export default Menu;
