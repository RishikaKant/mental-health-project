/*eslint-disable*/
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { useSelector, useDispatch } from 'react-redux';
import {
  ActivityPage,
  AboutPage,
  AddEventPage,
  AdminBlogPage,
  EventPage,
  EventShowPage,
  BlogPage,
  BlogShowPage,
  BookSessionPage,
  ComingSoonPage,
  NewHomePage,
  BreathePage,
  MeditationPage,
  AnonymousMessagePage,
  WorryTreePage,
  ProfilePage,
  RaaheeBuddyHomePage,
  TermsPage,
  TeamsPage,
  ValuesPage,
  PasswordResetPage,
  TherapyTerms,
} from './pages';

import BlogTagSearchPage from './pages/blogPage/blogTagSearchPage';
import TherapistsPage from './pages/therapistsPage/TherapistsPage';
import TherapistInfo from './pages/TherapistInfo/TherapistInfo';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Header from './components/Header/Header';
import LoginModal from './components/LoginModal/LoginModal';
import ProtectedRouteAdmin from './components/ProtectedRoute/ProtectedRouteAdmin';
import { HIDE_MODAL } from './store/reducers/showLoginModal';
import BookTherapy from './pages/bookTherapy/BookTherapy';
import GoogleAuthCallback from './components/LoginModal/googleAuthCallback';

function App() {
  const [showHeaderAndFooter, setShowHeaderAndFooter] = useState(true);
  const showLoginModal = useSelector((state) => state.showLoginModal);
  const user = JSON.parse(localStorage.getItem('profile'))?.user;
  const dispatch = useDispatch();

  return (
    <SnackbarProvider maxSnack={3}>
      <div className="App">
        <Router>
          <ScrollToTop>
            {showHeaderAndFooter && <Header />}
            <LoginModal
              isShown={showLoginModal}
              onHide={() => dispatch(HIDE_MODAL())}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => <NewHomePage {...props} />}
              />
              <Route exact path="/activities" component={ActivityPage} />
              <Route
                exact
                path="/anonymousMessage"
                render={(props) => <AnonymousMessagePage {...props} />}
              />
              <Route exact path="/comingSoon" component={ComingSoonPage} />
              <Route exact path="/about" component={AboutPage} />
              <ProtectedRouteAdmin
                exact
                path="/addEvent"
                user={user}
                component={AddEventPage}
              />
              <ProtectedRouteAdmin
                exact
                path="/adminBlog"
                user={user}
                component={AdminBlogPage}
              />
              <Route path="/auth/google/callback" component={GoogleAuthCallback} />

              <Route exact path="/blog" component={BlogPage} />
              <Route
                exact
                path="/blogTagSearchPage"
                component={BlogTagSearchPage}
              />
              <Route
                exact
                path="/blog/:blogId"
                render={(props) => <BlogShowPage {...props} />}
              />

              <Route exact path="/bookSession" component={BookSessionPage} />

              <Route
                exact
                path="/event"
                render={(props) => <EventPage {...props} user={user} />}
              />
              <Route
                exact
                path="/event/:eventId"
                render={(props) => <EventShowPage {...props} />}
              />
              <Route
                exact
                path="/breathe"
                render={(props) => (
                  <BreathePage
                    {...props}
                    setShowHeaderAndFooter={setShowHeaderAndFooter}
                  />
                )}
              />
              <Route
                exact
                path="/meditation"
                render={(props) => <MeditationPage {...props} />}
              />
              <Route exact path="/terms" component={TermsPage} />
              <Route exact path="/worryTree" component={WorryTreePage} />
              <Route path="/policy" user={user} component={TherapyTerms} />
              <Route exact path="/profile" component={ProfilePage} />
              <Route exact path="/therapists" component={TherapistsPage} />
              <Route
                exact
                path="/therapists/:mhpID"
                component={TherapistInfo}
              />
              <Route
                exact
                path="/booktherapy"
                component={BookTherapy}
              />
              <Route
                exact
                path="/raaheeBuddyHome"
                component={RaaheeBuddyHomePage}
              />
              <Route exact path="/about/values" component={ValuesPage} />
              <Route exact path="/about/team" component={TeamsPage} />
              <Route
                path="/reset-password"
                exact
                render={(props) => (
                  <PasswordResetPage
                    {...props}
                    setShowHeaderAndFooter={setShowHeaderAndFooter}
                  />
                )}
              />
            </Switch>
            {showHeaderAndFooter && <Footer />}
          </ScrollToTop>
        </Router>
      </div>
    </SnackbarProvider>
  );
}
export default App;
