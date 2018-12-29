import React from 'react';

const Breadcrumb = () => {
  let pathname = window.location.pathname;
  const parts = pathname.split('/');
  parts.shift();

  return (
    <ul className="container breadcrumb">
      { parts.map(u => <li key={u}>{ u }</li>) }
    </ul>
  );
};

export default Breadcrumb;
