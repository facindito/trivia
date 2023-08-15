import { useEffect, useState } from 'react'
import getQuestions from './services/getQuestions'
import { Question } from './components/Question'

export default function App () {
  const [questions, setQuestions] = useState([])

  const currentQuestion = questions[0] || null

  useEffect(() => {
    getQuestions()
      .then(resp => {
        setQuestions(resp)
      })
  }, [])

  return (
    <div className='flex flex-col justify-center items-center min-h-screen max-w-2xl mx-auto p-4'>
      <h1 className='font-bold text-6xl text-center mb-4'>Trivia</h1>
      {
        currentQuestion && (
          <main className='min-w-full'>
            <Question question={currentQuestion} />
          </main>
        )
      }
    </div>
  )
}
