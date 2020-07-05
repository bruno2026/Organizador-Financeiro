import React from 'react';
import {Link} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import './styles.css';

import logoImg  from '../../assests/logo3.png';
import loginImg from '../../assests/login2.PNG';

export default function Logon(){
    return (
        <div className="logon-container">
            <section className="form">
            <img src={logoImg} alt="Equilibrium"/>

            <form>
                <h1>Faça seu Logon</h1>
                
                    <input placeholder="Seu Email"/>
                    
                    <input placeholder="Sua senha"/>
                
                    <a className="forgotPass" href="#">Esqueci minha senha</a>
                    
                    <button ClassName="button" type="submit">Entrar</button>

                    <Link className="register" to="/register">
                        <FiLogIn size={16} color="black"/>
                        Não tenho cadastro
                    </Link>
            </form>
            </section>
            <img src={loginImg} alt="Login"/>
        </div>
    );
}