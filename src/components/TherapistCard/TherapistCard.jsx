import { Avatar } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './TherapistCard.scss';

const TherapistCard = ({
  id,
  displayName,
  kindOfProfessional,
  image,
  speciality,
}) => {
  const specialityArr = speciality?.split('$');
  return (
    <div className="TherapistCard">
      <div className="card">
        <div className="card-body">
          <Avatar src={image?.url} />
          <h3 className="therapist__name">{displayName}</h3>
          <p className="therapist__profession">{kindOfProfessional}</p>
          <div className="speciality" style={{ width: '120%', marginBottom: '15px', paddingLeft: '10px', paddingRight: '10px' }}>
            {specialityArr?.length > 1 ? specialityArr.slice(0, 5).map((domain, i) => (
              <span key={i}>
                <span className="text">
                  {domain}
                </span>
              </span>
            )) : null}
          </div>
          <div className="buttons">
            <Link to={`/therapists/${id}`} key={id} style={{ width: '100%' }}>
              <div className="btn-therapy text-capitalize" style={{ boxShadow: 'none' }}>Know More</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistCard;
