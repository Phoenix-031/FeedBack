import styles from './alumni.module.scss';

import { AlumniData } from '../../data/alumni';
import Questions from '../../components/Questions/Questions';

const Alumni = () => {
  return (
    <div className={styles.alumni__main__section}>
      <div className={styles.alumni__heading__container}> 
        <p>Alumni's Feedback Form</p>
      </div>

      <div className={styles.alumni__sections__container}>

        {AlumniData.map((alumnisection, index) => {
          return (

            <div>
              <div className={styles.title__section__container}>
                <p>{alumnisection.sectionTitle}</p>
              </div>

              <div>
                {alumnisection.questions.map((question, index) => {
                  return (
                    <Questions key={index} data={question} />
                  )
                })
                }
              </div>
            </div>
        )}
        )}

      </div>
    </div>
  )
}

export default Alumni