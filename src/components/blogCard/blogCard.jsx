import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import './blogCard.scss';
import { deleteBlog } from '../../actions/blogs';

const BlogCard = ({
  index, id, image, title, summary, category,
}) => {
  const tagColor = ['pink-text', 'deep-orange-text', 'blue-text'];
  const readMoreColor = ['btn-pink', 'btn-deep-orange', 'btn-blue'];
  const user = JSON.parse(localStorage.getItem('profile'))?.user;
  const dispatch = useDispatch();

  return (
    <div
      key={id}
      className="blogCard col-lg-4 col-md-12 col-xs-12 mb-lg-0 mb-4"
    >
      <div className="view overlay rounded z-depth-2 mb-4 waves-light">
        <img className="img-fluid card-image" alt="blogPic" src={image.url} />
      </div>
      {user && user.email === process.env.REACT_APP_ADMIN_EMAIL && (
        <DeleteIcon style={{ color: 'red', cursor: 'pointer', alignSelf: 'flex-end' }} onClick={() => dispatch(deleteBlog(id))} />
      )}
      <Link style={{ padding: '0 15px' }} className={'font-weight-bold mb-3 text-center ' + tagColor[index]} to={'/blogTagSearchPage?tag=' + category}>{category}</Link>
      <h4 className="font-weight-bold mb-2" style={{ padding: '0 15px' }}>{title}</h4>
      <p className="dark-grey-text" style={{ padding: '0 15px' }}>{summary.substring(0, 200) + '...'}</p>
      <Link
        className={'btn mb-3 ' + readMoreColor[index]}
        style={{ margin: '0 15px' }}
        to={'/blog/' + id}
        type="button"
      >
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
