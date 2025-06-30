import React from 'react';

const Loader: React.FC = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50" id="global-loader">
    <img src="/assets/img/loader.svg" className="w-16 h-16" alt="Loader" />
  </div>
);

export default Loader; 