// import React from 'react';
// import history from "../data/history.json"
// import styles from "./Experience.module.css"

// const Experience = () => {
//   return (
//    <section id="experience" className={styles.container}>
     
//                         <div className={styles.content}>
        
//             <h2 className={styles.title}>EXPERIENCE</h2>
//                 <ul className={styles.history}>
//                     {history.map((historyItem, id)=>{
//                     return(
//                         <li key={id} className={styles.historyItem}>
//                             <div className={styles.historyItemDetails}>
//                             <img src={historyItem.imageSrc} alt='Logo'></img>
//                                 <h3>{historyItem.role}</h3>
//                                 <h4>{historyItem.organisation}</h4>
                                
//                                 <p>{`${historyItem.startDate}, ${historyItem.endDate}`}</p>
//                                 <ul>{historyItem.experiences.map((exp, id)=>{
//                                     return <li key={id}>{exp}</li>
//                                 })
//                                     }
//                                     </ul>
//                             </div>

//                         </li>
//                     )
//                 })}
//                 </ul>
//         </div>
//    </section>
//   )
// }

// export default Experience
import React from 'react';
import history from "../data/history.json"; // Assuming your JSON file is located at src/data/history.json
import styles from "./Experience.module.css";

import img from "../../assets/history/ty.jpg"

const Experience = () => {

    const imgMap = {
        "history/ty.jpg" : img
    }
  return (
    <section id="experience" className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>EXPERIENCE</h2>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            // Import the image directly
            const imageSrc = imgMap[historyItem.imageSrc] 
            return (
              <li key={id} className={styles.historyItem}>
                <div className={styles.historyItemDetails}>
                  <img src={imageSrc} alt='Logo' />
                  <h3>{historyItem.role}</h3>
                  <h4>{historyItem.organisation}</h4>
                  <p>{`${historyItem.startDate}, ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((exp, id) => {
                      return <li key={id}>{exp}</li>
                    })}
                  </ul>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Experience;
