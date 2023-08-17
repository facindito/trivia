import { useQuestionsStore } from '../store/questions'
import { Next, Previous } from './Icons'
import { Question } from './Question'

export function Game () {
  const questions = useQuestionsStore(state => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)
  const nextQuestion = useQuestionsStore(state => state.nextQuestion)
  const previousQuestion = useQuestionsStore(state => state.previousQuestion)

  const question = questions[currentQuestion]

  return (
    <main className='min-w-full flex flex-col gap-4'>
      <div className='flex justify-between items-center gap-4'>
        <button
          onClick={previousQuestion}
        >
          <Previous />
        </button>
        <p>1/10</p>
        <button
          onClick={nextQuestion}
        >
          <Next />
        </button>
      </div>

      <Question info={question} />
    </main>
  )
}
