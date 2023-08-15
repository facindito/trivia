import { useEffect, useState } from 'react'
import getQuestions from './services/getQuestions'
import { Text } from './components/Text'

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
            <h2 className='text-center mb-4 font-semibold text-2xl'>
              <Text value={currentQuestion.question} />
            </h2>
            <ul className='grid md:grid-cols-2 gap-4'>
              {
                currentQuestion.answers.map((answer, index) => (
                  <li key={index} className='w-full h-full'>
                    <button className='border rounded-md w-full text-center p-4'>
                      <Text value={answer} />
                    </button>
                  </li>
                ))
              }
            </ul>

          </main>
        )
      }
    </div>
  )
}
