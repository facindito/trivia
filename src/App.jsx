import { useEffect, useRef, useState } from 'react'
import getQuestions from './services/getQuestions'

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
    <div className='min-h-screen grid place-content-center p-4 overflow-hidden'>
      <h1 className='font-bold text-6xl text-center mb-4'>Trivia</h1>
      {
        currentQuestion && (
          <main className='max-w-4xl m-auto w-full'>
            <h2 className='max-w-[70ch] text-center mb-4 font-semibold text-2xl'>
              <Text value={currentQuestion.question} />
            </h2>
            <ul className='flex flex-col gap-4 justify-center items-center'>
              {
                currentQuestion.answers.map((answer, index) => (
                  <li key={index} className='w-full'>
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

function Text ({ value, props }) {
  const questionText = useRef()

  useEffect(() => {
    questionText.current.innerHTML = value
  }, [value])
  return (
    <div
      {...props}
      ref={questionText}
    />
  )
}
