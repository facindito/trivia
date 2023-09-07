export default async function getQuestions ({ limit = 10, categoryId = '' } = {}) {
  try {
    // Local
    // const response = await fetch('http://localhost:5173/trivia.json')

    // API
    const response = await fetch(`https://opentdb.com/api.php?amount=${limit}&category=${categoryId}`)

    if (!response.ok) {
      throw new Error('failed to connect API')
    }
    const { results } = await response.json()

    const randomQuestions = results.sort(() => Math.random() - 0.5).slice(0, limit)

    const formattedQuestions = randomQuestions.map((question, index) => {
      const { correct_answer, incorrect_answers, ...rest } = question

      const answers = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5)

      const correctAnswer = answers.findIndex(answer => answer === correct_answer)

      return {
        id: index,
        answers,
        correctAnswer,
        ...rest
      }
    })

    return formattedQuestions
  } catch (error) {
    throw new Error(error.message)
  }
}
