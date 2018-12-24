import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />

      <section className="region-content">
        { children }
      </section>

      <Footer />

    </React.Fragment>
  );
};

export default Layout;
