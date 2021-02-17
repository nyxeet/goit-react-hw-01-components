import React from 'react'
import styles from './TransactionHistory.module.css'
import PropTypes from 'prop-types'



function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionSection}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className={styles.item}>{item.type}</td>
            <td className={styles.item}>{item.amount}</td>
            <td className={styles.item}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
      }
    ),
  )
}

export default TransactionHistory;