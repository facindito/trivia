import { useQuestionsStore } from '../store/questions'
import { Button } from './Button'
import { Next } from './Icons'
import Modal from './ModalStats'
import { useState } from 'react'

export function Header () {
  const [showModal, setShowModal] = useState(false)

  const questions = useQuestionsStore(state => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)
  const nextQuestion = useQuestionsStore(state => state.nextQuestion)

  const handleClick = () => setShowModal(true)

  const handleClose = () => setShowModal(false)

  return (
    <header className='flex flex-col gap-4 justify-between items-end md:flex-row md:items-center'>

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

      {currentQuestion < questions.length - 1 && (
        <Button onClick={nextQuestion}>
          Next
          <Next />
        </Button>
      )}
      {currentQuestion === questions.length - 1 && (
        <Button onClick={handleClick}>
          Finish
        </Button>
      )}

      {showModal && <Modal onClose={handleClose} />}
    </header>
  )
}
