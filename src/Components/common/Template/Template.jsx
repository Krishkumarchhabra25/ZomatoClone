"use client"

import React, { useState } from 'react';
import Header from '@/Components/Header/Header';
import Footer from '@/Components/Footer/Footer' ;
import HomePage from '@/app/home/page';
import BlogPage from '@/app/blog/page';

const Template = ({ children }) => {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'blog':
        return <BlogPage />;
      // Add other cases for different pages here
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      <Header setActivePage={setActivePage} />
      <main>
        {renderPage()}
      </main>
     
    </div>
  );
};

export default Template;
