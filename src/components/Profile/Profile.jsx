import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Product = ({
  imgUrl,
  alt,
  name,
  location,
  tag,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={styles.background}>
      <div className={styles.productDiscribe}>
        <img className={styles.profileImg} src={imgUrl} alt={alt} />
        <p className={styles.profileName}>{name}</p>
        <p className={styles.profileSocial}> {tag}</p>
        <p className={styles.profileSocial}> {location}</p>
      </div>
      <div>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span className={styles.profileSocial}>followers</span>
            <span className={styles.profileNumber}> {followers}</span>
          </li>
          <li className={styles.listItem}>
            <span className={styles.profileSocial}>views</span>
            <span className={styles.profileNumber}> {views}</span>
          </li>
          <li className={styles.listItem}>
            <span className={styles.profileSocial}>likes</span>
            <span className={styles.profileNumber}> {likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
Product.defaultProps = {
  alt: 'Upload stats',
};
Product.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Product;
