import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import './Login.css';
import '../Register/Register.css';

function Login() {

    return (
        <section className="register__form-container">
            <form className="register__form">
                <Link className="register__logo" to="/"><img src={logo} alt="Логотип." /></Link>
                <h2 className="register__title">Рады видеть!</h2>
                <p className="register__imput-name">E-mail</p>
                <input className="register__imput" placeholder='pochta@yandex.ru' required />
                <p className="register__line"></p>
                <p className="register__validation-error-text">{true ? 'Что-то пошло не так...' : ''}</p>
                <p className="register__imput-name">Пароль</p>
                <input className="register__imput" required />
                <p className="register__line-last-of-type"></p>
                <p className="register__validation-error-text">{true ? 'Что-то пошло не так...' : ''}</p>
                <button className="login__submit-button" type="submit">Войти</button>
                <p className="register__signup-question">Ещё не зарегистрированы?
                    <Link className="register__signin-link" to="/signup"> Регистрация</Link></p>
            </form>
        </section>
    );
}

export default Login;