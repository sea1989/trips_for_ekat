import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.png';

import './style.css';

export default class Login extends React.Component {
  render() {
    return (
      <div className='login'>
        <header className='login__header'>
          <img src={logo} width='80' height='80' alt='logo' />
          <h1 className='login__title'>Лига ходьбы «Женьшень»</h1>
          <p className='login__text'>
            Рады приветствовать вас, давайте же вместе отправимся в будущее
            здоровой Росии
          </p>
        </header>
        <section className='login__enter'>
          <form className='login__form'>
            <fieldset>
              <legend className='login__form--name'>Вход</legend>

              <h2 className='login__form--title'>
                Войдите в вашу учётную запись
              </h2>

              <p className='login__form--wrapper'>
                <label for='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  placeholder='Example@mail.ru'
                ></input>
              </p>

              <p className='login__form--wrapper'>
                <label for='password'>Пароль</label>
                <input type='password' id='password' placeholder='********' />
              </p>

              <div className='login__form--new'>
                <span className='login__form--nouser'>Нет учетной записи?</span>
                <Link className='login__form--reg' to='/newUser'>
                  Зарегистрироваться
                </Link>
              </div>
            </fieldset>
            <p>
              <input className='button' type='submit' value='ВОЙТИ' />
            </p>
          </form>

          <Link className='login__lose' to='/loginLose'>
            Забыли пароль?
          </Link>
        </section>
      </div>
    );
  }
}
