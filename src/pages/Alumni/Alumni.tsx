import styles from './alumni.module.scss';

import { AlumniData } from '../../data/alumni';

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
              <div>
                <p>{alumnisection.sectionTitle}</p>
              </div>

              <div>
                {alumnisection.questions.map((question, index) => {
                  return (
                    <li key={index}>
                      <input
                        type="radio"
                        id={`option${index}`}
                        name="quizOptions"
                        value={question.options}
                      />
                      <div className={styles.custom__checkbox}></div>
                      <label htmlFor={`option${index}`}>{question.question}</label>
                    </li>
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