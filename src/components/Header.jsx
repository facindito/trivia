import { useQuestionsStore } from '../store/questions'
import { Next } from './Icons'

export function Header () {
  const questions = useQuestionsStore(state => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)
  const nextQuestion = useQuestionsStore(state => state.nextQuestion)
  // const previousQuestion = useQuestionsStore(state => state.previousQuestion)

  return (
    <header className='flex flex-col gap-4 justify-between items-end md:flex-row md:items-center'>
      {/* <button
        onClick={previousQuestion}
        className={currentQuestion > 0 ? 'hover:text-violet-700' : ''}
        disabled={currentQuestion === 0}
      >
        <Previous />
      </button> */}
      <div className='w-full flex justify-start items-center gap-4'>
        <strong>
          {currentQuestion + 1} of {questions.length}
        </strong>
        <div className='flex-1 md:flex-none md:w-1/2 bg-gray-200 rounded-full h-2.5'>
          <div
            className='bg-violet-600 h-2.5 rounded-full'
            style={{ width: `${(currentQuestion + 1) * questions.length}%` }}
          />
        </div>
      </div>

      <button
        onClick={nextQuestion}
        className='text-base px-4 py-2 border-2 rounded-md flex justify-between items-center gap-2 text-center bg-violet-700 enabled:hover:scale-105'
        disabled={currentQuestion === questions.length - 1}
      >
        Next
        <Next />
      </button>

    </header>
  )
}
