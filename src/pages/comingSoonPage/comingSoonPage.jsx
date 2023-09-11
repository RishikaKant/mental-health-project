import React from 'react';
import notFound from '../../assets/not-found.gif';
import './comingSoonPage.scss';

const ComingSoonPage = () => {
  return (
    <div className="comingSoonPage container" style={{ marginTop: '110px' }}>
      <div className="row justify-content-between soon-landing">
        <div className="col-md-1" />
        <div className="col-md-5">
          <img src={notFound} className="img-fluid" alt="fluid" />
        </div>
        <div className="col-md-6 my-auto">
          <div className="main-heading">
            <div className="soon-text">
              <p className="display-4">UNDER CONTRUCTION</p>
              <p className="mt-4 main-2">We are currently working on this page</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
