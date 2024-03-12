
import styles from './question.module.scss'
import { useState } from 'react'

import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';

interface QuestionsProps {
    data: {
        id: number,
        question: string,
        options : string[]
    }
}

const Questions = (props :QuestionsProps) => {


    // useEffect(() => {
    //     console.log(selectedOption)
    // },[selectedOption])

  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
    
  return (
    <div className={styles.question__main__container}>
        <div>
            <p>{props.data.question}</p>
        </div>
        <div>
            
        <Radio.Group onChange={onChange} value={value}>

               { props.data.options.map((option, index) => {
                    return (
                        <div key={index}>
                            {/* <Checkbox onChange={onChange}>{option}</Checkbox> */}
                            <Radio value={option} style={{
                                fontSize:'1.2rem'
                            }}>{option}</Radio>
                        </div>
                  // <li key={index}>
                    //     <input
                    //     type="radio"
                    //     id={`option${index}`}
                    //     name="quizOptions"
                    //     value={option}
                    //     checked={selectedOption === option}
                    //     onChange={() => {
                    //         setSelectedOption(option)
                    //     }}
                    //     />
                    //     <div className={styles.custom__checkbox}></div>
                    //     <label htmlFor={`option${index}`}>{option}</label>
                    // </li>
                    )
                })
            }
                            </Radio.Group>

            
        </div>
    </div>
  )
}

export default Questions