import { Game } from './components/Game'
import { Start } from './components/Start'
import { useQuestionsStore } from './store/questions'

export default function App () {
  const questions = useQuestionsStore(state => state.questions)

  return (
    <div className='flex flex-col items-center gap-4 min-h-screen max-w-4xl mx-auto p-4'>
      {questions.length === 0 && <Start />}
      {questions.length > 0 && <Game />}
    </div>
  )
}
