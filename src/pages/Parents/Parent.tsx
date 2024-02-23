
import styles from './parent.module.scss'

import { ParentsQuestions } from '../../data/parents'
import Questions from '../../components/Questions/Questions'

const Parents = () => {
  return (
    <div className={styles.parents__main__container}>
      <div className={styles.parents__heading__container}>
        Parents's Feedback Form
      </div>

      <div className={styles.parents__questions__section}>
{
  ParentsQuestions.map((parents, index) => {
    return (
      <div className=''>
        <Questions key={index} data={parents} />
      </div>
    )
  })
}
      </div>
    </div>
  )
}

export default Parents