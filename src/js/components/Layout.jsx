import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, breadcrumb }) => {
  
  return (
    <React.Fragment>
      <Header breadcrumb={breadcrumb} />

      <section className="region-content">
        { children }
      </section>

      <Footer />
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
  breadcrumb: PropTypes.object
};

export default Layout;

