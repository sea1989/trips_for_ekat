import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { ReactComponent as Distance } from '../../assets/img/distance.svg';

export default class Item extends React.Component {
  render() {
    return (
      <li className='trips__item'>
        <div className='trips__item--mountain'>
          <div className='trips__item--top'>
            <span className='trips__item--price'>Бесплатно</span>
            <svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15.0082 21.9141L6 29.7962V2.66667C6 1.74562 6.74562 1 7.66667 1H23.6667C24.5877 1 25.3333 1.74562 25.3333 2.66667V29.7962L16.3252 21.9141L15.6667 21.3379L15.0082 21.9141Z'
                stroke='white'
                strokeWidth='2'
              />
            </svg>
          </div>
        </div>
        <div className='trips__item--info'>
          <h2 className='trips__item--header'>
            Поход на гору Туманная(Воробей)
          </h2>
          <div className='trips__item--date'>
            <svg
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 1H3V4H4V1ZM10 3C10.5523 3 11 3.44772 11 4V10C11 10.5523 10.5523 11 10 11H2C1.44772 11 1 10.5523 1 10V4C1 3.44772 1.44772 3 2 3V2C0.895431 2 0 2.89543 0 4V10C0 11.1046 0.895431 12 2 12H10C11.1046 12 12 11.1046 12 10V4C12 2.89543 11.1046 2 10 2V3ZM5 2H7V3H5V2ZM8 1H9V4H8V1ZM2 7V5H4V7H2ZM2 10V8H4V10H2ZM7 5H5V7H7V5ZM5 8H7V10H5V8ZM10 7V5H8V7H10ZM8 10V8H10V10H8Z'
                fill='#101010'
              />
            </svg>
            _12 октября 2021
          </div>
          <div className='trips__item--distance'>
            <Distance />
            _16 км
          </div>

          <div className='trips__item--link'>
            <Link to='/about' className='trips__item--more'>
              ПОДРОБНЕЕ
            </Link>
          </div>
        </div>
      </li>
    );
  }
}
