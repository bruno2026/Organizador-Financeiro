import React from 'react';

import './styles.css';

import {Link} from 'react-router-dom';

import logo from '../../assests/logo5.png'

export default function Dashboard(){
    return (
      <header className="dahboard-header-container">
            
                <div className="logo">
                <img alt="Equilibrium" height="51   " src={logo}></img>
                
                <ul className="main-navigation">
                        <li className="visao-geral">Visao Geral </li>
                        <li className="lancamentos">Lancamentos</li>
                    </ul>
                </div>
                
                
                    
                
            
                

                

            
            
            </header>
        
    );
}