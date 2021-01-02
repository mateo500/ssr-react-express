import React from 'react';
import './footer.styl';

export const Footer = () => {
  return (
    <footer>
      <div className='footer-content-container'>
        <img
          src='https://images.vexels.com/media/users/3/142912/isolated/preview/4e17695e6ff43707fa6f1078c24d99c8-black-dog-animal-logo-by-vexels.png'
          alt='dog-logo-pic'
          className='dog-logo-footer'
        />
        <h2>We hope you find your favorite dog!</h2>
        <h5 className='footer-message'>
          Remember to always adopt, don't buy, there's a little friend that may
          need your help, if you want to get involved, please visit{' '}
          <a href='http://www.adacolombia.org/'>the following link</a>
        </h5>
      </div>
    </footer>
  );
};
