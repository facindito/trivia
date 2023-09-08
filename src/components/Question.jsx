import { useQuestionsStore } from '../store/questions'
import { getBackgroundColor } from '../utils'
import { DIFFICULTY } from '../utils/constants'
import { Circle } from './Icons'
import { Text } from './Text'

export function Question ({ info }) {
  const selectAnswer = useQuestionsStore(state => state.selectAnswer)

  const handleClick = (index) => () => {
    selectAnswer(info.id, index)
  }

  return (
    <>
      <section className='flex justify-between items-center px-2'>
        <span className='font-semibold opacity-70'>{info.category}</span>
        <span title={info.difficulty}><Circle className={DIFFICULTY[info.difficulty]} /></span>
      </section>
      <h2 className='backdrop-blur-md bg-white/10 text-center font-semibold text-2xl border-2 border-violet-600 rounded-md p-8'>
        <Text value={info.question} />
      </h2>
      <ul className='grid md:grid-cols-2 gap-4'>
        {
          info.answers.map((answer, index) => (
            <li key={index} className='w-full h-full '>
              <button
                disabled={info.selectedAnswer != null}
                className={`${getBackgroundColor(index, info)} font-semibold border-2 rounded-md w-full text-center p-4`}
                onClick={handleClick(index)}
              >
                <Text value={answer} />
              </button>
            </li>
          ))
        }
      </ul>
    </>
  )
}
