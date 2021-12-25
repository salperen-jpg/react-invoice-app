import React from 'react';
import logo from '../assets/logo.svg';
import sun from '../assets/icon-sun.svg';
import profile from '../assets/image-avatar.jpg';

const Sidebar = () => {
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='icon-container'>
          <img src={logo} alt='logo' className='logo' />
        </div>
        <div className='nav-right'>
          <img src={sun} alt='' className='sun' />
          <div className='profile'>
            <img src={profile} alt='' className='avatar' />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
