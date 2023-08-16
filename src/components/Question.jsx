import { Text } from './Text'

export function Question ({ info }) {
  return (
    <>
      <h2 className='text-center mb-4 font-semibold text-2xl'>
        <Text value={info.question} />
      </h2>
      <ul className='grid md:grid-cols-2 gap-4'>
        {
          info.answers.map((answer, index) => (
            <li key={index} className='w-full h-full'>
              <button className='border rounded-md w-full text-center p-4'>
                <Text value={answer} />
              </button>
            </li>
          ))
        }
      </ul>
    </>
  )
}
