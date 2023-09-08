import { useEffect } from 'react'
import { useQuestionsStore } from '../store/questions'
import { Question } from './Question'
import { Footer } from './Footer'
import { Header } from './Header'

export function Game () {
  const questions = useQuestionsStore(state => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)
  const nextQuestion = useQuestionsStore(state => state.nextQuestion)

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
      <Header />
      <main className='flex-1 flex flex-col gap-4'>
        <Question info={question} />
      </main>
      <Footer />
    </div>
  )
}
