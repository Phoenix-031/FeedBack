
import style from './app.module.scss'

import { useNavigate } from 'react-router-dom'
import { PiStudentBold } from "react-icons/pi";
import { RiParentFill } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdPerson4 } from "react-icons/md";
import { BsFileEarmarkPersonFill } from "react-icons/bs";

import kgeclogo from './assets/kgec-logo-dark.jpeg'

const App = () => {

  const navigate = useNavigate()
  
  return (
    <div className={style.main__container}>
      <div className={style.kgec__logo__container}>
        <img src={kgeclogo} alt="KGEC Logo" />
      </div>
      <div>
        <p className={style.main__container__heading__sub}>Kalyani Government Engineering College</p>
      </div>
      <div className={style.main__container__heading}>
        <p>Feedback Portal</p>
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
          <div><MdPerson4 /></div>
          Alumni Feedback
        </div>
        <div onClick={() => navigate('/employers')}>
          <div><BsFileEarmarkPersonFill /></div>
          Employers Feedback
        </div>
      </div>
    </div>
  )
}

export default App