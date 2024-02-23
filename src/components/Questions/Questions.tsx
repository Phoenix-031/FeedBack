
import styles from './question.module.scss'

interface QuestionsProps {
    data: {
        id: number,
        question: string,
        options : string[]
    }
}

const Questions = (props :QuestionsProps) => {
  return (
    <div className={styles.question__main__container}>
        <div>
            <p>{props.data.question}</p>
        </div>
        <div>
            {
                props.data.options.map((option, index) => {
                    return (
                    <li key={index}>
                        <input
                        type="radio"
                        id={`option${index}`}
                        name="quizOptions"
                        value={option}
                        //   checked={selectedOption === option}
                        //   onChange={() => handleOptionSelect(option)}
                        />
                        <div className={styles.custom__checkbox}></div>
                        <label htmlFor={`option${index}`}>{option}</label>
                    </li>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Questions