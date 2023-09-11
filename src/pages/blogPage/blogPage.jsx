import React from 'react';
import { Helmet } from 'react-helmet';
import Skeleton from '@material-ui/lab/Skeleton';
import { useSelector } from 'react-redux';
import BlogCard from '../../components/blogCard/blogCard';
import './blogPage.scss';

const BlogPage = (props) => {
  const user = JSON.parse(localStorage.getItem('profile'))?.user;
  const { blogs } = useSelector((state) => state.blogs);

  return (
    <div className="BlogPage">
      <Helmet>
        <title>Raahee | Blogs</title>
      </Helmet>
      <div className="jumbotron " style={{ marginTop: '4rem' }}>
        <div className="give-mask">
          <div className="container h-100 d-flex justify-content-center align-items-center">
            <div className="text-center" id="jumbotronText">
              <h2 className="display-4 text-center whit">
                <strong>Raahee: The Blog</strong>
              </h2>
              <hr
                className="hr-light mt-4 wow fadeInDown"
                data-wow-delay="0.4s"
              />
              <p className="lead">
                <strong className="whit">Weaving words with love</strong>
              </p>
              {user?.email === process.env.REACT_APP_ADMIN_EMAIL && (
                <button
                  onClick={() => props.history.push('/adminBlog')}
                  className="btn btn-outline-white wow fadeInDown"
                >
                  Add Blog
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center my-5 row mx-auto">
        {blogs.length > 0 ? blogs.map((blog, index) => (

          <BlogCard key={index} index={index % 3} {...blog} />

        )) : [0, 1, 2].map((e) => {
          return (
            <div
              key={e}
              className="blogCard col-lg-4 col-md-12 mb-lg-0 mb-4"
              style={{ padding: '0 20px' }}
            >
              {/* <div className="view overlay rounded z-depth-2 mb-4 waves-light"> */}
              <Skeleton variant="rect" height="22rem" className="img-fluid card-image" />
              <Skeleton variant="text" className="font-weight-bold mb-3" style={{ marginTop: '1rem' }} />
              <Skeleton variant="rect" className="font-weight-bold mb-2" />
              <Skeleton variant="rect" height="10rem" className="dark-grey-text" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
