import React from 'react';
import ReloadButton from '../ReloadButton/ReloadButton';
import './Destaques.css';

const Destaques = () => {
    return (
        <div className='Destaques'>
            <h1>Destaques</h1>

            <ReloadButton funcao={() => {alert("butao")}} />
        </div>
    );
}
 
export default Destaques;