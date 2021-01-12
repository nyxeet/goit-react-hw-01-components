import react from 'react';
import styles from './Statistics.module.css'



function Statistics({ stats }) {
    console.log(stats)
  return (
      <section className={styles.statistics}>
          <h2 className={styles.title}>Upload stats</h2>
          <ul className={styles.list}>
              {stats.map(stat => (
                <li key={stat.id} className={styles.item}>
                  <span className={styles.label}>{stat.label}</span>
                  <span className={styles.percentage}>{stat.percentage}%</span>
                </li>
              ))}          
          </ul>
      
    </section>
  );
}


export default Statistics;