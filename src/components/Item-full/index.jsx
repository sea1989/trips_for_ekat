import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default class ItemFull extends React.Component {
  render() {
    return (
      <div className='trips-full__item'>
        <Link to='/' className='trips-full__back'>
          Походы
        </Link>
        <div className='trips-full__item--mountain'>
          <div className='trips-full__item--top'>
            <span className='trips-full__item--price'>Бесплатно</span>
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
          <h2 className='trips-full__item--header'>
            Поход на гору Туманная (Воробей)
          </h2>
        </div>

        <div className='trips-full__item--info'>
          <div className='trips-full__header'>
            <div className='trips-full__item--date'>
              <div className='trips__item--date-title'>Дата проведения</div>
              12 октября 2021
            </div>
            <div className='trips-full__item--distance'>
              <div className='trips__item--distance-title'>Протяженность</div>
              16 км
            </div>
          </div>
          <h2 className='trips-full__item--title'>Описание маршрута</h2>
          <p className='trips-full__item--text'>
            В своём стремлении улучшить пользовательский опыт мы упускаем, что
            стремящиеся вытеснить традиционное производство, нанотехнологии
            будут преданы социально-демократической анафеме. Безусловно,
            постоянный количественный рост и сфера нашей активности позволяет
            выполнить важные задания по разработке как самодостаточных, так и
            внешне зависимых концептуальных решений. Мы вынуждены отталкиваться
            от того, что постоянное информационно-пропагандистское обеспечение
            нашей деятельности способствует повышению качества вывода текущих
            активов. И нет сомнений, что интерактивные прототипы и по сей день
            остаются уделом либералов, которые жаждут быть призваны к ответу. А
            также ключевые особенности структуры проекта неоднозначны и будут
            объективно рассмотрены соответствующими инстанциями. Не следует,
            однако, забывать, что дальнейшее развитие различных форм
            деятельности создаёт необходимость включения в производственный план
            целого ряда внеочередных мероприятий с учётом комплекса
            экономической целесообразности принимаемых решений.
          </p>
          <h3 className='trips-full__item--title'>Место старта</h3>
          <div className='trips-full__map'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186243.11788111448!2d131.81337345315063!3d43.16650155075415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb39cba5249d485%3A0x186704d4dd967e35!2z0JLQu9Cw0LTQuNCy0L7RgdGC0L7Quiwg0J_RgNC40LzQvtGA0YHQutC40Lkg0LrRgNCw0Lk!5e0!3m2!1sru!2sru!4v1632482000574!5m2!1sru!2sru'
              width='600'
              height='450'
              allowfullscreen=''
              loading='lazy'
              title='map'
            ></iframe>
            <button type='submit'>ЗАПИСАТЬСЯ</button>
          </div>
        </div>
      </div>
    );
  }
}
