import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Modal } from 'react-bootstrap';
import { withSnackbar } from 'notistack';
import { Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { auth, FieldValue, firestore } from '../../firebase/firebase.utils';
import CommunityPosts from '../../components/communityPosts/communityPosts';
import CommunityNewPost from '../../components/communityNewPost/communityNewPost';
import CommunityGuides from '../../components/Communityguides/Communityguide';
import './communityPage.scss';

const CommunityPage = ({ enqueueSnackbar, closeSnackbar, filter }) => {
  const [posts, setPosts] = useState([]);
  const [latestDoc, setLatestDoc] = useState(null);
  const [show, setShow] = useState(
    localStorage.getItem('community-guidelines-agreed') !== 'true',
  );
  const [viewModal, setViewModal] = useState(false);
  const [postIdToReport, setPostIdToReport] = useState(undefined);
  const [reportContent, setReportContent] = useState('');

  const getPosts = async () => {
    const ref = firestore
      .collection('post')
      .orderBy('timestamp', 'desc')
      .startAfter(latestDoc || '0')
      .limit(10);

    let postsData = await ref.get();
    setLatestDoc(postsData.docs[postsData.docs.length - 1]);

    const user = auth.currentUser;

    if (user) {
      postsData = postsData.docs.filter(
        (post) => post.data().reports[user.uid] === undefined,
      );
    } else {
      postsData = postsData.docs;
    }

    setPosts([...posts,
      ...postsData.map((doc) => {
        const data = doc.data();
        const { id } = doc;
        return { ...data, id };
      }),
    ]);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleClick = () => {
    setShow(false);
    localStorage.setItem('community-guidelines-agreed', 'true');
  };

  const handleReportContentChange = (event) => {
    setReportContent(event.target.value);
  };

  const toggleModal = () => {
    setViewModal(!viewModal);
  };

  const reportPostModalOpen = (id) => {
    setPostIdToReport(id);
    setViewModal(true);
  };

  const generatePost = (newPostID) => {
    firestore
      .collection('post')
      .doc(newPostID)
      .get()
      .then((doc) => {
        setPosts((prevState) => [
          { ...doc.data(), id: newPostID },
          ...prevState,
        ]);
      })
      .catch((err) => console.error(err));
  };

  const reportPost = () => {
    firestore
      .collection('post')
      .doc(postIdToReport)
      .update({
        numberOfReports: FieldValue.increment(1),
        [`reports.${auth.currentUser.uid}`]: reportContent,
      })
      .then(() => {
        toggleModal();
        setPosts((prevState) => prevState.filter((e) => e.id !== postIdToReport));
        setPostIdToReport(undefined);
        setReportContent('');
        enqueueSnackbar('Post reported', { variant: 'success' });
      })
      .catch((err) => console.error(err));
  };

  const deletePost = (postIdToDelete) => {
    firestore
      .collection('post')
      .doc(postIdToDelete)
      .delete()
      .then(() => {
        setPosts((prevState) => prevState.filter((e) => e.id !== postIdToDelete));
        enqueueSnackbar('Post Deleted', { variant: 'success' });
      })
      .catch((err) => console.error(err));
  };

  const { uid } = useParams();

  const snackbarDeleteAction = (key, postIdToDelete) => (
    <>
      <Button onClick={() => deletePost(postIdToDelete)}>Delete</Button>
      <Button
        onClick={() => {
          closeSnackbar(key);
        }}
      >
        Dismiss
      </Button>
    </>
  );

  const deletePostEventHandler = (postIdToDelete) => {
    enqueueSnackbar('Confirm Delete?', {
      variant: 'error',
      autoHideDuration: 3000,
      action: (key) => snackbarDeleteAction(key, postIdToDelete),
    });
  };

  return (
    <div className="CommunityPage mt-10" style={{ paddingTop: '90px' }}>
      <Helmet>
        <title>Raahee | Community</title>
      </Helmet>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="mb-4 guidelines"
        show={show}
        onHide={handleClick}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="media flex-wrap w-100 align-items-center">
              <div className="media-body ml-3">
                <h3 data-abc="true">Community Guidelines</h3>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          className="scrollbar"
          style={{ overflowY: 'auto', maxHeight: '50vh' }}
        >
          <div className="rightContainer col-md">
            <div className="Top">
              <ol className="community-rules h5 font-weight-normal">
                <CommunityGuides />
              </ol>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={viewModal}
        onHide={toggleModal}
        dialogClassName="modal-50w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Report Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Why do you want to report post?</p>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="key"
              name="key"
              onChange={handleReportContentChange}
              value={reportContent}
            />
            <button className="btn aqua-gradient" onClick={reportPost}>
              Ok
            </button>
          </div>
        </Modal.Body>
      </Modal>

      {(!filter)
        ? (
          <CommunityNewPost
            generatePost={generatePost}
          />
        ) : ('')}
      {filter ? (
        posts.map((post) => {
          console.log('filtering', post);
          if (uid === post.userID && !post.isAnonymous) {
            return (
              <CommunityPosts
                reportPost={reportPostModalOpen}
                deletePost={deletePostEventHandler}
                key={post.id}
                {...post}
              />
            );
          }
          return ('');
        })
      ) : (
        posts.map((post) => (
          <CommunityPosts
            anonymous={post.isAnonymous}
            reportPost={reportPostModalOpen}
            deletePost={deletePostEventHandler}
            key={post.id}
            {...post}
          />
        ))
      )}
      <div className="load-more">
        <button className="btn btn-primary" id="more-btn" onClick={() => { getPosts(); }}>Show More</button>
      </div>
    </div>
  );
};

export default withSnackbar(CommunityPage);
