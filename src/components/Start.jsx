import { Categories } from './Categories'

export function Start () {
  return (
    <>
      <section className='w-full flex flex-col md:flex-row justify-between items-center gap-4 mb-8'>
        <div>
          <img src='public\question-mark.png' />
        </div>
        <div className='flex-1 flex flex-col items-center'>
          <h1 className='font-bold text-6xl md:text-9xl'>Trivia</h1>
          <a href='#categories' className='w-fit text-xl opacity-75 font-semibold my-4 py-2 px-4 border-dashed border-2 rounded-md '>
            ↓ SELECT A CATEGORY
          </a>
        </div>
      </section>
      <Categories />
    </>
  )
}
