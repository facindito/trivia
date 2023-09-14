import { useQuestionsStore } from '../store/questions'

export function Footer () {
  const resetGame = useQuestionsStore(state => state.resetGame)

  return (
    <footer className='flex justify-between items-center'>
      <button
        className='ml-auto px-4 py-2 font-semibold bg-red-700 text-white rounded-full'
        onClick={() => resetGame()}
      >
        Reset
      </button>
    </footer>
  )
}
