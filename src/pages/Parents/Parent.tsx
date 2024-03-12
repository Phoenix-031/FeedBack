
import styles from './parent.module.scss'

import { ParentsQuestions } from '../../data/parents'
import Questions from '../../components/Questions/Questions'

import { Input, Select } from 'antd'

const Parents = () => {

  const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};


const occupationopt = [
  {
    value: 'Occupation',
    label: 'Occupation',
  },
  {
    value: 'Buisness',
    label: 'Buisness',
  },
  {
    value: 'Employee(Public Sector)',
    label: 'Employee(Public Sector)',
  },
  {
    value: 'Employee(Private Sector)',
    label: 'Employee(Private Sector)',
  },
  {
    value: 'Self Employed',
    label: 'Self Employed',
  },
  {
    value: 'Any Other',
    label: 'Any Other',
  },
  {
    value: 'disabled',
    label: 'Disabled',
    disabled: true,
  },
]
  
  return (
    <div className={styles.parents__main__container}>
      <div className={styles.parents__heading__container}>
        Parents's Feedback Form
      </div>

      <div className={styles.container__text__section}>
        <p>
          The feedback from the parents will help us to understand the areas of improvement and the areas where we are doing well. We request you to provide your valuable feedback on the following parameters.
        </p>

        <div>
          <p>Education: </p>
              <Select
                defaultValue="Graduate"
                style={{ width: 150 }}
                onChange={handleChange}
                options={[
                  { value: 'Graduate', label: 'Graduate' },
                  { value: 'Postgraduate', label: 'Postgraduate' },
                  { value: 'Any Other', label: 'Any Other' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
              />
        </div>

        <div>
          <p>Occupation: </p>
              <Select
                defaultValue={occupationopt[0].value}
                style={{ width: 220 }}
                onChange={handleChange}
                options={occupationopt}
              />
        </div>

        <div>
          <p>Academic Year: </p>
          <Input placeholder='Academic year' />
        </div>

        <div>
          <p>Name: </p>
          <Input placeholder='Name' />
        </div>

        <div>
          <p>Student Name: </p>
          <Input placeholder='Student Name' />
        </div>
        
        <div>
          <p>Please mark a tick in the appropriate cell for every statement</p>
        </div>

        <div>
          <p>Excellent (5)  | Very Good (4)  | Good (3)  | Average(2)  | Poor (1) </p>
        </div>
        
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

      <div className={styles.submit__button__container}>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Parents