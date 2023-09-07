import { useEffect } from 'react'
import { useQuestionsStore } from '../store/questions'
import { Next, Previous } from './Icons'
import { Question } from './Question'

export function Game () {
  const questions = useQuestionsStore(state => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)
  const nextQuestion = useQuestionsStore(state => state.nextQuestion)
  const previousQuestion = useQuestionsStore(state => state.previousQuestion)
  const resetGame = useQuestionsStore(state => state.resetGame)

  const question = questions[currentQuestion]

  useEffect(() => {
    let interval
    if (question.selectedAnswer != null && currentQuestion < questions.length - 1) {
      interval = setInterval(() => {
        nextQuestion()
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [question])

  return (
    <div className='flex-grow min-w-full flex flex-col gap-4'>
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

      <main className='flex-1 flex flex-col gap-4'>
        <Question className='flex-1' info={question} />
      </main>

      <footer className='flex'>
        <button
          className='ml-auto px-4 py-2 font-semibold bg-red-700 text-white rounded-full'
          onClick={() => resetGame()}
        >
          Reset
        </button>
      </footer>
    </div>
  )
}
