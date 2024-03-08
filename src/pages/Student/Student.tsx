import {StudentsData} from '../../data/students'
import Questions from '../../components/Questions/Questions'

// import { MdKeyboardArrowLeft } from "react-icons/md";



import styles from './student.module.scss'

const Student = () => {
  return (
    <div className={styles.student__main__container}>
      <div className={styles.student__heading__container}>
        {/* <div><MdKeyboardArrowLeft /></div> */}
        <div>Student's Feedback Form</div>
      </div>

      <div className={styles.student__questions__section}>
{
  StudentsData.map((student, index) => {
    return (
      <div className=''>
        <Questions key={index} data={student} />
      </div>
    )
  })
}
      </div>
    </div>
  )
}

export default Student