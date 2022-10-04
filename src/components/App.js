import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import BlogPage from '../pages/BlogPage';
import HomePage from '../pages/HomePage';
import Layout from './Layout';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/blog'} element={<BlogPage />} />
      </Route>
    </Routes>
  );
}

export default App;
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
