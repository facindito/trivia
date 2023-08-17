import { useQuestionsStore } from '../store/questions'

export function Start () {
  const getQuestionStore = useQuestionsStore(state => state.getQuestionStore)

  const handleClick = () => {
    getQuestionStore(10)
  }

  return (
    <button
      onClick={handleClick}
      className='px-4 py-2 font-semibold bg-violet-700 text-white rounded-full'
    >
      Start game!
    </button>
  )
}
