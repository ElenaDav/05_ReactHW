import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
import CustomLink from './UI/CustomLink';

//const setActive = ({ isActive }) => ({ color: isActive ? 'green' : 'red' });

const Header = () => {
  return (
    <header>
      <CustomLink to={'/'}>Home</CustomLink>
      <CustomLink to={'/about'}>About</CustomLink>
      <CustomLink to={'/blog'}>Blog</CustomLink>

      {/* <NavLink to={'/'} style={setActive}>
        Home
      </NavLink>
      <NavLink to={'/about'} style={setActive}>
        About
      </NavLink>
      <NavLink to={'/blog'} style={setActive}>
        Blog
      </NavLink> */}

      {/* <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/blog'}>Blog</Link> */}
    </header>
  );
};

export default Header;
