import './Techs.css';
import React from 'react';

function Techs() {

    return (
        <section className="techs">
            <p className="techs__title">Технологии</p>
            <p className="techs__line"></p>
            <p className="techs__subtitle">7 технологий</p>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className="techs__container">
                <p className="techs__item">HTML</p>
                <p className="techs__item">CSS</p>
                <p className="techs__item">JS</p>
                <p className="techs__item">React</p>
                <p className="techs__item">Git</p>
                <p className="techs__item">Express.js</p>
                <p className="techs__item">mongoDB</p>
            </div>
        </section>
    );
}

export default Techs;