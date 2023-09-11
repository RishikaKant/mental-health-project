import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import { updateProfile, uploadFile } from '../../api';

const DetailsBox = () => {
  const user = JSON.parse(localStorage.getItem('profile')).user;
  const [loading, setLoading] = useState(false);
  const [change, setChange] = useState(false);
  const [editable, setEditable] = useState({
    personal: false,
    professional: false,
  });
  const [details, setDetails] = useState({
    gender: user.gender ? user.gender : 'Other',
    phoneNo: user.phoneNo ? user.phoneNo : '-',
    email: user.email,
    dob: user.dob ? user.dob : 'dob',
    bio: user.bio ? user.bio : 'bio',
    displayName: user.displayName ? user.displayName : user.username,
    image: user.image,
  });

  const genderOptions = [
    'Select Gender',
    'Agender',
    'Androgyne',
    'Androgynous',
    'Bigender',
    'Cis',
    'Cisgender',
    'CisFemale',
    'CisMale',
    'CisMan',
    'CisWoman',
    'CisgenderFemale',
    'CisgenderMale',
    'CisgenderMan',
    'CisgenderWoman',
    'Female',
    'FTM',
    'GenderFluid',
    'GenderNonconforming',
    'GenderQuestioning',
    'GenderVariant',
    'Genderqueer',
    'Intersex',
    'Male',
    'MTF',
    'Neither',
    'Neutrois',
    'Non-binary',
    'Other',
    'Pangender',
    'Trans',
    'TransFemale',
    'TransMale',
    'TransMan',
    'TransPerson',
    'TransWoman',
    'Transfeminine',
    'Transgender',
    'TransgenderFemale',
    'TransgenderMale',
    'TransgenderMan',
    'TransgenderPerson',
    'TransgenderWoman',
    'Transmasculine',
    'Transsexual',
    'TranssexualFemale',
    'TranssexualMale',
    'TranssexualMan',
    'TranssexualPerson',
    'TranssexualWoman',
    'TwoSpirit',
    'PreferNotToSay',
  ];

  const saveDetails = () => {
    updateProfile(details).then((userData) => {
      const loggedInUser = JSON.parse(localStorage.getItem('profile'));
      loggedInUser.user = userData.data;
      localStorage.setItem('profile', JSON.stringify(loggedInUser));
    });
  };

  const editPersonal = (type) => {
    setChange(!change);
    if (type === 'save') {
      saveDetails();
    }
    setEditable({ ...editable, personal: !editable.personal });
  };

  const editProfessional = (type) => {
    setChange(!change);
    if (type === 'save') {
      saveDetails();
    }
    setEditable({ ...editable, professional: !editable.professional });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      handleUpload(e.target.files[0]);
    }
  };

  const handleUpload = (image) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('files', image);
    uploadFile(formData)
      .then((response) => {
        setDetails({ ...details, image: response.data[0] });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.id]: e.target.value });
  };

  return (
    <div className="detail">
      {editable.personal
        ? (
          <section className="personal">
            <p>
              Personal Details
              {' '}
              <span role="button" className="pointer" onClick={() => { editPersonal('save'); }}>Done</span>
            </p>
            <div className="personal--div1 ">
              <div className="img">
                <Avatar
                  className="image"
                  src={details.image?.url}
                  alt=""
                />
                <p>
                  {user && (
                    <>
                      <label className="mybtn" htmlFor="upload">
                        Upload Image
                        <input style={{ display: 'none' }} id="upload" placeholder="" type="file" onChange={handleFileChange} />
                      </label>
                    </>
                  )}
                </p>
                {loading ? (
                  <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                  </Box>
                ) : (
                  null
                )}
              </div>
              <div className="personal--div2">
                <input value={details.displayName} id="displayName" onChange={handleChange} />
                <p>
                  {details.email}
                  {' '}
                </p>
                <p>
                  {'Gender: '}
                  <select value={details.gender} id="gender" onChange={handleChange}>
                    {genderOptions.map((gender, i) => {
                      return (
                        <option key={i} value={gender}>{gender}</option>
                      );
                    })}
                  </select>
                </p>
              </div>
            </div>
          </section>

        ) : (
          <section className="personal">
            <p>
              Personal Details
              {' '}
              <span role="button" className="pointer" onClick={() => editPersonal('edit')}>Edit</span>
            </p>
            <div className="personal--div1 ">
              <div className="img">
                <Avatar
                  className="image"
                  src={details.image?.url}
                  alt=""
                />
              </div>
              <div className="personal--div2">
                <h3>{`${details.displayName}`}</h3>
                <p>
                  {details.email}
                  {' '}
                </p>
                <p>
                  {' '}
                  {`Gender: ${details.gender ? details.gender : 'Not specified'}`}
                </p>
              </div>
            </div>
          </section>

        )}

      {
        editable.professional ? (
          <section className="prof">
            <p>
              Professional Details
              {' '}
              <span role="button" className="pointer" onClick={() => editProfessional('save')}>Done</span>
            </p>

            <table className="prof-details">
              <tbody>
                <tr>
                  <th>Name:</th>
                  <td><input value={details.displayName} id="displayName" onChange={handleChange} /></td>
                </tr>

                <tr>
                  <th>Bio:</th>
                  <td>
                    <input value={details.bio} id="bio" onChange={handleChange} />
                  </td>
                </tr>

                <tr>
                  <th>DOB:</th>
                  <td><input type="date" value={details.dob} id="dob" onChange={handleChange} /></td>
                </tr>
                <tr>
                  <th>Phone Number:</th>
                  <td><input type="number" value={details.phoneNo} id="phoneNo" onChange={handleChange} /></td>
                </tr>
              </tbody>
            </table>
          </section>
        ) : (
          <section className="prof">
            <p>
              Professional Details
              {' '}
              <span role="button" className="pointer" onClick={() => editProfessional('edit')}>Edit</span>
            </p>

            <table className="prof-details">
              <tbody>
                <tr>
                  <th>Name:</th>
                  <td>{`${details.displayName}`}</td>
                </tr>

                <tr>
                  <th>Bio:</th>
                  <td>
                    {`${details.bio}`}
                  </td>
                </tr>

                <tr>
                  <th>Date Of Birth:</th>
                  <td>{`${details.dob ? details.dob : '-'}`}</td>
                </tr>
                <tr>
                  <td>Phone Number:</td>
                  <td>{`${details.phoneNo ? details.phoneNo : '-'}`}</td>
                </tr>
              </tbody>
            </table>
          </section>
        )
      }

    </div>

  );
};

export default withRouter(DetailsBox);
