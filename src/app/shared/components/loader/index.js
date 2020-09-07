import React from 'react';
import './style.scss';

const Loader = () => (
  <div className="container-loader">
    <div className="row">
      <div className='loader-container'>
        <div className="loader sample-loader"></div>
        <p>Loading...</p>
      </div>
    </div>
  </div>
);

export default Loader;