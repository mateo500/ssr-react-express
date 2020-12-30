import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.styl';

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className='header'>
      <div className='logo-nav'>
        <div className='logo-container'>
          <a href='/'>
            <img
              src='https://images.vexels.com/media/users/3/142912/isolated/preview/4e17695e6ff43707fa6f1078c24d99c8-black-dog-animal-logo-by-vexels.png'
              alt='dog-logo'
              className='dog-logo'
            />
          </a>
        </div>
        <ul className={click ? 'nav-options active' : 'nav-options'}>
          <li className='option'>
            <Link to='/'>All Dogs</Link>
          </li>
          <li className='option'>
            <Link to='/discover'>Find Your Dog!</Link>
          </li>
          <li className='option'>
            <Link to='/manage'>Manage Your Dogs</Link>
          </li>
        </ul>
      </div>
      <button type='button' className='mobile-menu' onClick={handleClick}>
        {click ? 'close' : 'open'}
      </button>
    </div>
  );
};
