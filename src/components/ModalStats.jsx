import ReactDOM from 'react-dom'
import { DonutChart } from '@tremor/react'
import useQuestionsStats from '../hooks/useQuestionsStats'
import { useQuestionsStore } from '../store/questions'
import { Correct, Incorrect, Unanswered } from './Icons'

function Modal ({ onClose }) {
  const resetGame = useQuestionsStore(state => state.resetGame)
  const { correct, incorrect, unanswered } = useQuestionsStats()

  const Questions = [
    {
      name: 'Correct',
      value: correct
    },
    {
      name: 'Incorrect',
      value: incorrect
    },
    {
      name: 'Unanswered',
      value: unanswered
    }
  ]

  return (
    <div className='bg-slate-400 bg-opacity-80 fixed inset-0 flex justify-center items-center p-4 backdrop-blur-sm z-10'>
      <div className='flex flex-col gap-8 bg-violet-800 w-80 p-4 rounded-md'>
        <header className='flex justify-between items-center'>
          <strong className='text-xl'>Congratulations!!!</strong>
          <button onClick={onClose} className='font-bold'>
            X
          </button>
        </header>
        <main className='flex justify-between md:flex-row gap-4'>
          <section className='flex flex-col gap-4'>
            <p className='flex items-center justify-start gap-2'>
              <Unanswered className='fill-yellow-600' />
              <strong>{unanswered}</strong>
              <span className='opacity-75'>Unanswered</span>
            </p>
            <p className='flex items-center justify-start gap-2'>
              <Correct className='fill-green-600' />
              <strong>{correct}</strong>
              <span className='opacity-75'>Correct</span>
            </p>
            <p className='flex items-center justify-start gap-2'>
              <Incorrect className='fill-red-600' />
              <strong>{incorrect}</strong>
              <span className='opacity-75'>Incorrect</span>
            </p>
          </section>

          <section>
            <DonutChart
              className='h-full w-24'
              data={Questions}
              category='value'
              colors={['green', 'red', 'yellow']}
              name='questions'
              disableDarkMode
            />
          </section>
        </main>
        <footer className='text-center w-full'>
          <button
            className='w-full px-4 py-2 border-2 rounded-lg hover:bg-violet-600'
            onClick={resetGame}
          >
            Play again
          </button>
        </footer>
      </div>
    </div>
  )
}

export default function ModalPortal ({ onClose }) {
  return ReactDOM.createPortal(<Modal onClose={onClose} />, document.getElementById('modal-root'))
}
