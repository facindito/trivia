import { useQuestionsStore } from '../store/questions'
import { Question } from './Question'

export function Game () {
  const questions = useQuestionsStore(state => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)
  const question = questions[currentQuestion]

  return (
    <main className='min-w-full'>
      <Question info={question} />
    </main>
  )
}
