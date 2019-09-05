import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingItem.module.css';

const PricingItem = ({ item }) => {
  let color;
  if (item.label === 'Bronze') {
    color = '#cc6633';
  } else if (item.label === 'Silver') {
    color = 'silver';
  } else {
    color = 'gold';
  }
  return (
    <div key={item.price} className={styles.tarif_item}>
      <img src={item.icon} className={styles.tarif_img} alt="some title" />
      <h2 className={styles.tarif} style={{ color }}>
        {item.label}
      </h2>
      <p className={styles.price}>{item.capacity}</p>
      <p className={styles.text}>{item.description}</p>
      <p className={styles.price}>${item.price}/MO</p>
      <button
        className={styles.button}
        type="button"
        style={{ backgroundColor: color }}
      >
        Get Started
      </button>
    </div>
  );
};

PricingItem.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    capacity: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default PricingItem;
