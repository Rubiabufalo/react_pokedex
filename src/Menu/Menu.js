import React from 'react'
import './Menu.css'

import logo from "../assets/images/logo.png"
import {ReactComponent as Blocks} from "../assets/svg/blocks.svg"
import {ReactComponent as List} from "../assets/svg/list.svg"
import Switch from '../Switch/Switch'


const Menu = () => {
    return ( 
        <div className="Menu">
            <div className="Menu-left">
                <Blocks className="selected"/>
                <List />
            </div>

            <img src={logo} className="Menu-logo" />
            <div className="Menu-right">
                <Switch />
            </div>

        </div>
     );
}
 
export default Menu;
