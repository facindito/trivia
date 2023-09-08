import useQuestionsStats from '../hooks/useQuestionsStats'
import { useQuestionsStore } from '../store/questions'
import { Correct, Incorrect, Unanswered } from './Icons'

export function Footer () {
  const resetGame = useQuestionsStore(state => state.resetGame)
  const { correct, incorrect, unanswered } = useQuestionsStats()

  return (
    <footer className='flex justify-between items-center'>
      <div className='flex gap-4'>
        <p className='flex items-center justify-between gap-2'>
          <Unanswered className='fill-yellow-600' />
          <strong>{unanswered}</strong>
          <span className='hidden sm:block opacity-75'>Unanswered</span>
        </p>
        <p className='flex items-center justify-between gap-2'>
          <Correct className='fill-green-600' />
          <strong>{correct}</strong>
          <span className='hidden sm:block opacity-75'>Correct</span>
        </p>
        <p className='flex items-center justify-between gap-2'>
          <Incorrect className='fill-red-600' />
          <strong>{incorrect}</strong>
          <span className='hidden sm:block opacity-75'>Incorrect</span>
        </p>
      </div>
      <button
        className='ml-auto px-4 py-2 font-semibold bg-red-700 text-white rounded-full'
        onClick={() => resetGame()}
      >
        Reset
      </button>
    </footer>
  )
}
