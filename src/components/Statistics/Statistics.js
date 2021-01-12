import react from 'react';
import styles from './Statistics.module.css'



function Statistics({ stats, title }) {
    console.log(stats)
  return (
      <section className={styles.statistics}>
          {title ? <h2 className={styles.title}>{title}</h2> : null}
          <ul className={styles.list}>
              {stats.map(stat => (
                <li key={stat.id} className={styles.item} style={{backgroundColor: generateRandomColor()}}>
                  <span className={styles.label}>{stat.label}</span>
                  <span className={styles.percentage}>{stat.percentage}%</span>
                </li>
              ))}          
          </ul>
      
    </section>
  );
}
function generateRandomColor() {
    let r = Math.round((Math.random() * 255)); //red 0 to 255
    let g = Math.round((Math.random() * 255)); //green 0 to 255
    let b = Math.round((Math.random() * 255)); //blue 0 to 255
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  };

export default Statistics;