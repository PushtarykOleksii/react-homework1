import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const Stats = ({ title, items }) => {
  return (
    <div className={styles.background}>
      <h2 className={styles.productDiscribe}>{title}</h2>
      <ul className={styles.list}>
        {items.map(item => (
          <li className={styles.listItem} key={item.id}>
            {item.name}
            <p className={styles.text}>{item.label}</p>
            <p className={styles.text}>{item.percentage}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

Stats.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Stats;
