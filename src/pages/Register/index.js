import React from 'react';
import {Link} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi';

import './styles.css';

import logoImg  from '../../assests/logo3.png';
import loginImg from '../../assests/login.png';

export default function Logon(){
    return (
        <div className="logon-container">
            <section className="form">
            <img src={logoImg} alt="Equilibrium"/>

            <form>
                <h1>Cadastre-se</h1>
                
                    <input placeholder="Seu Email"/>
                    
                    <input placeholder="Sua senha"/>

                    <input placeholder="Repita sua senha"/>
                                    
                    <button ClassName="button" type="submit">Cadastrar</button>

                    <Link className="register" to="/">
                        <FiLogIn size={16} color="black"/>
                        Voltar a pagina inicial
                    </Link>
            </form>
            </section>
            <img src={loginImg} alt="Login"/>
        </div>
    );
}