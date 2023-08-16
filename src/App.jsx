import { Question } from './components/Question'
import { useQuestionsStore } from './store/questions'

export default function App () {
  const getQuestionStore = useQuestionsStore(state => state.getQuestionStore)
  const questions = useQuestionsStore(state => state.questions)

  const handleClick = () => {
    getQuestionStore(10)
  }

  return (
    <div className='flex flex-col justify-center items-center gap-4 min-h-screen max-w-2xl mx-auto p-4'>
      <h1 className='font-bold text-6xl text-center'>Trivia</h1>
      {questions.length === 0 && (
        <button
          onClick={handleClick}
          className='px-4 py-2 font-semibold bg-[#585FF2] text-[ECECFE] rounded-full'
        >
          Start game!
        </button>
      )}
      {
        questions.length > 0 && (
          <main className='min-w-full'>
            <Question />
          </main>
        )
      }
    </div>
  )
}
