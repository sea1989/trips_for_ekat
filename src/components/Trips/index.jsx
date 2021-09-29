import React from 'react';
import './style.css';
import Item from '../Item';

export default class Trips extends React.Component {
  render() {
    return (
      <section className='trips'>
        <div className='trips__wrapper'>
          <div className='trips__header'>
            <h1 className='trips__title'>Походы</h1>
            <div className='trips__controls'>
              <svg
                width='46'
                height='46'
                viewBox='0 0 46 46'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g filter='url(#filter0_ddd)'>
                  <path
                    d='M8 12C8 8.22876 8 6.34315 9.17157 5.17157C10.3431 4 12.2288 4 16 4H30C33.7712 4 35.6569 4 36.8284 5.17157C38 6.34315 38 8.22876 38 12V26C38 29.7712 38 31.6569 36.8284 32.8284C35.6569 34 33.7712 34 30 34H16C12.2288 34 10.3431 34 9.17157 32.8284C8 31.6569 8 29.7712 8 26V12Z'
                    fill='white'
                  />
                </g>
                <path
                  d='M33 13.6667L22.2333 13.6667M22.2333 13.6667C22.2333 12.1939 21.0991 11 19.7 11C18.3009 11 17.1667 12.1939 17.1667 13.6667M22.2333 13.6667C22.2333 15.1394 21.0991 16.3333 19.7 16.3333C18.3009 16.3333 17.1667 15.1394 17.1667 13.6667M17.1667 13.6667L14 13.6667M33 24.3333L29.8333 24.3333M29.8333 24.3333C29.8333 22.8606 28.6991 21.6667 27.3 21.6667C25.9009 21.6667 24.7667 22.8606 24.7667 24.3333M29.8333 24.3333C29.8333 25.8061 28.6991 27 27.3 27C25.9009 27 24.7667 25.8061 24.7667 24.3333M24.7667 24.3333H14'
                  stroke='#4F6262'
                />
                <defs>
                  <filter
                    id='filter0_ddd'
                    x='0'
                    y='0'
                    width='46'
                    height='46'
                    filterUnits='userSpaceOnUse'
                    colorInterpolationFilters='sRGB'
                  >
                    <feFlood floodOpacity='0' result='BackgroundImageFix' />
                    <feColorMatrix
                      in='SourceAlpha'
                      type='matrix'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                      result='hardAlpha'
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation='0.5' />
                    <feColorMatrix
                      type='matrix'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0'
                    />
                    <feBlend
                      mode='normal'
                      in2='BackgroundImageFix'
                      result='effect1_dropShadow'
                    />
                    <feColorMatrix
                      in='SourceAlpha'
                      type='matrix'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                      result='hardAlpha'
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation='1' />
                    <feColorMatrix
                      type='matrix'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'
                    />
                    <feBlend
                      mode='normal'
                      in2='effect1_dropShadow'
                      result='effect2_dropShadow'
                    />
                    <feColorMatrix
                      in='SourceAlpha'
                      type='matrix'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                      result='hardAlpha'
                    />
                    <feOffset dy='4' />
                    <feGaussianBlur stdDeviation='4' />
                    <feColorMatrix
                      type='matrix'
                      values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0'
                    />
                    <feBlend
                      mode='normal'
                      in2='effect2_dropShadow'
                      result='effect3_dropShadow'
                    />
                    <feBlend
                      mode='normal'
                      in='SourceGraphic'
                      in2='effect3_dropShadow'
                      result='shape'
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <ul className='trips__elements'>
            <Item />
            <Item />
            <Item />
          </ul>
        </div>
      </section>
    );
  }
}
