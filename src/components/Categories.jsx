import { useEffect, useState } from 'react'
import getCategories from '../services/getCategories'
import { COLOR_CATEGORIES } from '../utils/constants'
import { useQuestionsStore } from '../store/questions'

export function Categories () {
  const getQuestionStore = useQuestionsStore(state => state.getQuestionStore)
  const [categories, setCategories] = useState([])

  const handleClick = (categoryId) => () => {
    getQuestionStore({ limit: 10, categoryId })
  }

  useEffect(() => {
    getCategories()
      .then(allCategories => {
        setCategories(allCategories)
      })
  }, [])

  return (
    <section className='w-full'>
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4'>
        <li>
          <button
            className='w-full text-center font-semibold py-8 px-2 border-2 rounded-md bg-opacity-50 hover:scale-105'
            onClick={handleClick()}
          >
            Random
          </button>
        </li>
        {categories.map(({ id, name }) => {
          const bgColor = `bg-${COLOR_CATEGORIES[name]}`
          return (
            <li key={id}>
              <button
                className={`w-full text-center font-semibold py-8 px-2 border-2 rounded-md ${bgColor} bg-opacity-50 hover:scale-105`}
                onClick={handleClick(id)}
              >
                {name}
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
