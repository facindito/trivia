import { useEffect, useState } from 'react'
import getCategories from '../services/getCategories'
import { COLOR_CATEGORIES } from '../utils/constants'
import { useQuestionsStore } from '../store/questions'

export function Categories () {
  const getQuestionStore = useQuestionsStore(state => state.getQuestionStore)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then(allCategories => {
        setCategories(allCategories)
      })
  }, [])

  const handleClick = (categoryId) => () => {
    getQuestionStore({ limit: 10, categoryId })
  }

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
          return (
            <li key={id}>
              <button
                className={`w-full text-center font-semibold py-8 px-2 border-2 rounded-md ${COLOR_CATEGORIES[name]} bg-opacity-50 hover:scale-105`}
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
