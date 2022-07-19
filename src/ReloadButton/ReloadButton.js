import React, {useEffect, useState} from 'react';
import "./ReloadButton.css";
import { ReactComponent as Arrow } from '../assets/svg/Arrow.svg';

const ReloadButton = ({ funcao }) => {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        if (animated) {
            setTimeout(() => {setAnimated(false)}, 500);
            
        }
            ;
    }, [animated]);

    return (
        <button 
            className= {`ReloadButton ${animated ? 'animated' : ''}`}
            onClick={ funcao, () => setAnimated(true) }
        >
                <Arrow />
            </button>
    );
}
 
export default ReloadButton;