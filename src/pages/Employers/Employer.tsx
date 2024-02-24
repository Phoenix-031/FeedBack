
import styles from './employer.module.scss'

import { EmployerQuestions } from '../../data/employers'
import Questions from '../../components/Questions/Questions'

const Employers = () => {
  return (
    <div className={styles.employers__main__container}>
      <div className={styles.employers__heading__container}>
        Employers's Feedback Form
      </div>

      <div className={styles.employers__questions__section}>
{
  EmployerQuestions.map((employers, index) => {
    return (
      <div className=''>
        <Questions key={index} data={employers} />
      </div>
    )
  })
}
      </div>
    </div>
  )
}

export default Employers