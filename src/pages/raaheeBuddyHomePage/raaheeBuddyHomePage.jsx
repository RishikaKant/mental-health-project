import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import animation from '../../assets/Buddy_animation.gif';
import raaheeBuddy from '../../assets/buddySmall.png';
import duck from '../../assets/buddy2.png';
import './raaheeBuddyHomePage.scss';

const raaheeBuddyHomePage = () => {
  return (
    <div className="raaheeBuddyHomePage">
      <Helmet>
        <title>Raahee | Home</title>
      </Helmet>
      {/* ========================================================== */}
      <div className="container" style={{ marginTop: '80px' }}>
        <div className="row justify-content-between home-landing">
          <div className="col-md-6">
            <div className="main-heading">
              <div>
                <h2 className="landing-text">
                  <strong>Welcome to Raahee Buddy !</strong>
                </h2>
                <p className="tagline mt-4">Ever felt like you needed a friend to vent out? Or just talk? No baggage,no commitments, no judgements, just pure, simple converstaion? If your answer is yes, then Raahee Buddy is just the thing for you. Our Raahee buddies are not only mental health professionals, they are people who are approved by Raahee as "professional listeners" and "a buddy in need"!</p>
                <div className="buttons mt-5">
                  <Link to="/comingSoon" className="btn btn-secondary text-capitalize mr-md-4" style={{ boxShadow: 'none' }}>
                    Talk to someone
                  </Link>
                  <Link to="/comingSoon" className="btn border border-secondary text-secondary text-capitalize" style={{ boxShadow: 'none' }}>
                    Become Raahee Buddy
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 my-auto">
            <img src={animation} className="img-fluid" alt="fluid" />
          </div>
        </div>
        <div className="row justify-content-between home-landing">
          <div className="col-md-6">
            <img src={raaheeBuddy} className="i2" alt="girl" />
          </div>
          <div className="col-md-5 my-auto">
            <div className="main-heading">
              <div>
                <h2 className="landing-text">
                  <strong>How may your Raahee buddy help you?</strong>
                </h2>
                <p className="tagline mt-4">Raahee Buddy ia a safe person to confide in, talk to, be understood, and be listened to without any judgements or hassle. We are a community of people working for a better society with a better average mental health index. Sometimes, somethings are so complicated that all you need ia a stranger(that needs like family) to confide in. Honey, this is just that!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between home-landing">
          <div className="col-md-6">
            <div className="main-heading">
              <div>
                <h2 className="landing-text">
                  <strong>You can be a Raahee Buddy too</strong>
                </h2>
                <p className="tagline mt-4">Now, if you want to be the source of light on a bad day for someone, signing up to become a Raahee Buddy seems just rise for you! if you are a good listener and are keen to work towards the society that considers kindness and good mental and emotional hygiene indispensable, sign up today by clicking the button below to know more! We appreciate you so much!</p>
                <div className="buttons mt-5">
                  <Link to="/comingSoon" className="btn border border-secondary text-secondary text-capitalize" style={{ boxShadow: 'none' }}>
                    Become Raahee Buddy
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 my-auto">
            <img src={duck} className="img-fluid" alt="Duck" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default raaheeBuddyHomePage;
