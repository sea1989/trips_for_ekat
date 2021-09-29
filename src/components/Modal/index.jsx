import React from 'react';
import './style.css';
import { ReactComponent as Icon } from '../../assets/img/filter-button.svg';

export default class Modal extends React.Component {
  render() {
    return (
      <section className='modal'>
        <div className='modal__wrapper'>
          <form
            className='modal__form'
            method='get'
            action='https://echo.htmlacademy.ru'
          >
            <section className='modal__option'>
              <header className='modal__header'>
                <h2 className='modal__title'>Фильтры</h2>
                <span className='modal__reset'>Сбросить</span>
              </header>

              <fieldset>
                <legend className='date'>Даты проведения</legend>

                <div className='date__wrapper'>
                  <p className='date__min'>
                    <input
                      type='text'
                      name='date__min'
                      id='date__min'
                      placeholder='20.10.21'
                    />
                  </p>
                  <div className='date__line'></div>
                  <p className='date__max'>
                    <input
                      type='text'
                      name='date__max'
                      id='date__max'
                      placeholder='20.11.21'
                    />
                  </p>
                </div>
              </fieldset>

              <fieldset>
                <legend className='price'>По стоимости</legend>
                <ul className='price-list'>
                  <li className='price-item'>
                    <input
                      className='visually-hidden filter-input filter-input-radio'
                      type='radio'
                      value='kuku'
                      name='price'
                      id='price-1'
                      checked
                    />
                    <label for='price-1'>Все</label>
                  </li>
                  <li className='price-item'>
                    <input
                      className='visually-hidden filter-input filter-input-radio'
                      type='radio'
                      name='price'
                      id='price-2'
                    />
                    <label for='price-2'>Бесплатно</label>
                  </li>
                  <li className='price-item'>
                    <input
                      className='visually-hidden filter-input filter-input-radio'
                      type='radio'
                      name='price'
                      id='price-3'
                    />
                    <label for='price-3'>Платно</label>
                  </li>
                </ul>
              </fieldset>

              <fieldset>
                <legend className='distance'>Протяженность маршрута:</legend>
                <div className='range'>
                  <p className='line'></p>
                  <p className='line-left'></p>
                  <p className='range-left'>
                    <Icon className='icon__left' />
                  </p>
                  <p class='range-right'>
                    <Icon className='icon__right' />
                  </p>
                </div>
              </fieldset>

              <button type='submit'>ПРИМЕНИТЬ</button>
            </section>
          </form>
        </div>
      </section>
    );
  }
}
