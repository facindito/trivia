import { useQuestionsStore } from '../store/questions'
import { Next, Previous } from './Icons'

export function Header () {
  const questions = useQuestionsStore(state => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)
  const nextQuestion = useQuestionsStore(state => state.nextQuestion)
  const previousQuestion = useQuestionsStore(state => state.previousQuestion)

  return (
    <header className='flex justify-between items-center gap-4'>
      <button
        onClick={previousQuestion}
        className={currentQuestion > 0 ? 'hover:text-violet-700' : ''}
        disabled={currentQuestion === 0}
      >
        <Previous />
      </button>
      <p className='bg-violet-700 rounded-md px-4 py-2'>
        {currentQuestion + 1} / {questions.length}
      </p>
      <button
        onClick={nextQuestion}
        className={currentQuestion < questions.length - 1 ? 'hover:text-violet-700' : ''}
        disabled={currentQuestion === questions.length - 1}
      >
        <Next />
      </button>
    </header>
  )
}
