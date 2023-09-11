import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { withSnackbar } from 'notistack';
// import { signInWithGoogle } from '../../firebase/firebase.utils';
import { resetPassword } from '../../api';
import './LoginModal.scss';
import { signin, signup } from '../../actions/auth';

const LoginModal = ({ isShown, onHide, enqueueSnackbar }) => {
  const [open] = useState(true);
  const [showWarning, setShowWarning] = useState(false);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const [loginUser, setLoginUser] = useState({
    identifier: '',
    password: '',
  });

  const [signUpUser, setSignUpUser] = useState({
    displayName: '',
    email: '',
    password: '',
    ConfirmPassword: '',
  });

  const [forgotPass, setForgotPass] = useState('Forgot your password?');

  const handleForgetPass = () => {
    if (loginUser.identifier === '') {
      setForgotPass('Enter the Email in field');
      setTimeout(() => {
        setForgotPass('Forgot your password?');
      }, 4000);
    } else {
      resetPassword(loginUser.identifier)
        .then((response) => {
          console.log('Your user received an email', response);
          setForgotPass('Password Reset Email Sent.');
          enqueueSnackbar('Please check your email for password reset instructions', { variant: 'success' });
        })
        .catch((error) => console.log(error));
    }
  };

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginUser((prevDetail) => ({
      ...prevDetail,
      [name]: value,
    }));
  };

  const handleSignUpChange = (event) => {
    const { name, value } = event.target;
    setSignUpUser((prevDetail) => ({
      ...prevDetail,
      [name]: value,
    }));
  };

  const handleSignInPanel = () => {
    setActive(false);
  };

  const handleSignUpPanel = () => {
    setActive(true);
  };

  const submitSignUp = async (event) => {
    event.preventDefault();

    const {
      displayName, email, password, ConfirmPassword,
    } = signUpUser;

    if (password !== ConfirmPassword) {
      alert("Passwords don't match ");
      return;
    }

    try {
      dispatch(signup({ username: email, displayName, email, password, confirmed: false }))
        .then(() => {
          onHide();
        })
        .catch((error) => alert(error.message));

      setSignUpUser({
        displayName: '',
        email: '',
        password: '',
        ConfirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const submitSignIn = async (event) => {
    event.preventDefault();

    dispatch(signin(loginUser))
      .then((response) => {
        if (response === 'Your account email is not confirmed') {
          setShowWarning(true);
          setTimeout(() => {
            setShowWarning(false);
          }, 5000);
        } else if (response === 'Identifier or password invalid.') {
          enqueueSnackbar('Wrong Email or Password. Please try again!', { variant: 'error' });
        } else {
          onHide();
        }
      });

    setLoginUser({ identifier: '', password: '' });
  };

  return (
    <Modal
      dialogClassName="modal-50w"
      className="ModalLogin"
      centered
      show={isShown && open}
      aria-labelledby="example-modal-sizes-title-lg"
      onHide={onHide}
    >
      <Modal.Body
        className={`container ${active ? 'right-panel-active' : ''}`}
        id="container row"
      >
        {showWarning && (
          <nav className="navbar fixed-top navbar-expand" style={{ color: 'white', backgroundColor: 'red', marginTop: '4.5rem' }}>
            <div className="navbar-collapse collapse" id="navbar2">
              <b>
                To login and get access to all the featues of the website, please verify your email.
              </b>
            </div>
          </nav>
        )}
        <div className="form-container form-group sign-up-container">
          <form onSubmit={submitSignUp} className="pr-4">
            <h1>Create Account</h1>
            <input
              type="text"
              name="displayName"
              value={signUpUser.displayName}
              onChange={handleSignUpChange}
              placeholder="Name"
              className="form-control"
            />
            <input
              type="email"
              name="email"
              onChange={handleSignUpChange}
              value={signUpUser.email}
              placeholder="Email"
              className="form-control"
            />
            <input
              type="password"
              name="password"
              onChange={handleSignUpChange}
              value={signUpUser.password}
              placeholder="Password"
              className="form-control"
            />
            <input
              type="password"
              name="ConfirmPassword"
              onChange={handleSignUpChange}
              value={signUpUser.ConfirmPassword}
              placeholder="Confirm Password"
              className="form-control"
            />
            <button
              type="submit"
              className="btn"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container form-group sign-in-container">
          <form onSubmit={submitSignIn} className="pr-4">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="https://raahee-server.eastus.cloudapp.azure.com/connect/google">
                <i
                  role="button"
                  className="social link"
                >
                  <i className="fab fa-google-plus-g fa-lg" />
                </i>

              </a>
            </div>
            <span>or use your account</span>
            <input
              type="email"
              name="identifier"
              onChange={handleLoginChange}
              value={loginUser.identifier}
              placeholder="Email"
              className="form-control"
            />
            <input
              type="password"
              name="password"
              onChange={handleLoginChange}
              value={loginUser.password}
              placeholder="Password"
              className="form-control"
            />
            <i role="button" onClick={handleForgetPass} className="link">
              {forgotPass}
            </i>
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="btn btn-white text-dark" id="signIn" onClick={handleSignInPanel} style={{ textTransform: 'none' }}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="btn btn-white text-dark" id="signUp" onClick={handleSignUpPanel} style={{ textTransform: 'none' }}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default withSnackbar(LoginModal);
