import './Profile.css';
import React from 'react';

function Profile() {

    return (
        <div className="profile">
            <p className="profile__title">Привет, Виталий!</p>
            <div className="profile__name-container">
                <p className="profile__name">Имя</p>
                <input className="profile__input" placeholder='Виталий'/>
            </div>
            <p className="profile__line"></p>
            <div className="profile__email-container">
                <p className="profile__email">E-mail</p>
                <input className="profile__input"  placeholder='pochta@yandex.ru'/>
            </div>
            <p className="profile__edit">Редактировать</p>
            <p className="profile__exit">Выйти из аккаунта</p>
        </div>
    );
}

export default Profile;