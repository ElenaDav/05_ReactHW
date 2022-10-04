import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import BlogPage from '../pages/BlogPage';
import HomePage from '../pages/HomePage';

function App() {
  return (
    <>
      <header>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/blog'}>Blog</Link>
      </header>

      <Routes>
        <>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/blog'} element={<BlogPage />} />
        </>
      </Routes>
    </>

    //так делать не надо через href, страница постоянно перезагружается
    // <>
    //   <header>
    //     <a href={'/'}>Home</a>
    //     <a href={'/about'}>About</a>
    //     <a href={'/blog'}>Blog</a>
    //   </header>

    //   <Routes>
    //     <>
    //       <Route path={'/'} element={<HomePage />} />
    //       <Route path={'/about'} element={<AboutPage />} />
    //       <Route path={'/blog'} element={<BlogPage />} />
    //     </>
    //   </Routes>
    // </>
  );
}

export default App;
