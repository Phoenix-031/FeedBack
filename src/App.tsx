
import style from './app.module.scss'

import { useNavigate } from 'react-router-dom'
import { PiStudentBold } from "react-icons/pi";
import { RiParentFill } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";



const App = () => {

  const navigate = useNavigate()
  
  return (
    <div className={style.main__container}>
      <div className={style.main__container__heading}>
        <p>Feedback System</p>
      </div>
      <div className={style.main__flex__container}>
        <div onClick={() => navigate('/parents')}>
          <div><RiParentFill /></div>
          Parent Feedback
        </div>
        <div onClick={() => navigate('/students')}>
          <div><PiStudentBold /></div>
          Student Feedback
        </div>
        <div onClick={() => navigate('/teachers')}>
          <div><FaChalkboardTeacher /></div>
          Teacher Feedback
        </div>
        <div onClick={() => navigate('/alumni')}>
          Alumni Feedback
        </div>
        <div onClick={() => navigate('/employers')}>
          Employers Feedback
        </div>
      </div>
    </div>
  )
}

export default App