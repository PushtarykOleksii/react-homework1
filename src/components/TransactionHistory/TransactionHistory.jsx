import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.container}>
      <thead>
        <tr className={styles.table_head}>
          <th className={styles.table_head}>type</th>
          <th className={styles.table_head}>amount</th>
          <th className={styles.table_head}>currency</th>
        </tr>
      </thead>
      {items.map(item => (
        <tbody key={item.id} className={styles.table_body}>
          <tr className={styles.table_line}>
            <td className={styles.table_column}>{item.type}</td>
            <td className={styles.table_column}>{item.amount}</td>
            <td className={styles.table_column}>{item.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default TransactionHistory;
