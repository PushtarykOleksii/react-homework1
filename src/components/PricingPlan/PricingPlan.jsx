import React from 'react';
import PropTypes from 'prop-types';
import PricingItem from '../PricingItem/PricingItem';
import styles from './PricingPlan.module.css';

const PricingPlan = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map(item => (
        <PricingItem key={item.price} item={item} />
      ))}
    </div>
  );
};

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default PricingPlan;
