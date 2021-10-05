import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.png';

import './style.css';

export default class Reg1 extends React.Component {
  render() {
    return (
      <div className='reg'>
        <header className='reg__header'>
          <img src={logo} width='80' height='80' alt='logo' />
          <h1 className='reg__title'>Лига ходьбы «Женьшень»</h1>
          <p className='reg__text'>
            Рады приветствовать вас, давайте же вместе отправимся в будущее
            здоровой Росии
          </p>
        </header>
        <section className='reg__enter'>
          <form className='reg__form'>
            <fieldset>
              <legend className='reg__form--name'>Регистрация</legend>

              <h2 className='reg__form--title'>
                Создайте новую учетную запись
              </h2>

              <h3 className='reg__form--info'>Учетные данные</h3>

              <p className='reg__form--wrapper'>
                <label for='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  placeholder='Example@mail.ru'
                ></input>
              </p>

              <p className='reg__form--wrapper'>
                <label for='tel'>Телефон</label>
                <input
                  type='tel'
                  id='tel'
                  placeholder='+7 (999) 999-99-99'
                ></input>
              </p>

              <p className='reg__form--wrapper'>
                <label for='password'>Пароль</label>
                <input type='password' id='password' placeholder='********' />
              </p>

              <span className='reg__form--double'>
                Продублируйте пароль для подтверждения
              </span>

              <p className='reg__form--wrapper'>
                <label for='password'>Пароль</label>
                <input type='password' id='password' placeholder='********' />
              </p>

              <div className='reg__form--new'>
                <span className='reg__form--nouser'>Нет учетной записи?</span>
                <Link className='reg__form--reg' to='/reg1'>
                  Зарегистрироваться
                </Link>
              </div>
            </fieldset>
            <p>
              <input className='button' type='submit' value='ВОЙТИ' />
            </p>
          </form>

          <Link className='reg__lose' to='/loginLose'>
            Забыли пароль?
          </Link>
        </section>
      </div>
    );
  }
}
