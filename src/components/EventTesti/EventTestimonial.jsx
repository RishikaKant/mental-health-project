import { Avatar } from '@material-ui/core';
import React from 'react';
import './EventTestimonial.scss';

function EventTestimonial({ item, name, location, profilePic, rating, feedback }) {
  return (
    <div className="col-md-12 testimonial__card" style={{ float: 'left' }}>
      <div className="card mb-2 card__details">
        <div className="user__details">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Avatar src={profilePic} />
            <div className="user__info">
              <h5>{name}</h5>
              <h6>{location}</h6>
            </div>
          </div>
          {item !== 'mhp'
            ? (
              <div className="user__rating">
                {rating}
                <span className="fa fa-star checked" />
              </div>
            ) : <div />}
        </div>
        <div className="card-body">
          <p className="card-text">
            {feedback}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventTestimonial;
