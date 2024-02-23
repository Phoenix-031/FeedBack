
import styles from './teacher.module.scss'

import { TeacherQuestions } from '../../data/teacher'
import Questions from '../../components/Questions/Questions'

const Teacher = () => {
  return (
    <div className={styles.teacher__main__container}>
      <div className={styles.teacher__heading__container}>
        Teacher's Feedback Form
      </div>

      <div className={styles.teacher__questions__section}>
{
  TeacherQuestions.map((teacher, index) => {
    return (
      <div className=''>
        <Questions key={index} data={teacher} />
      </div>
    )
  })
}
      </div>
    </div>
  )
}

export default Teacher