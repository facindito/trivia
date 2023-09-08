import { useQuestionsStore } from '../store/questions'

export default function useQuestionsStats () {
  const questions = useQuestionsStore(state => state.questions)

  let correct = 0
  let incorrect = 0
  let unanswered = 0

  questions.forEach(({ isCorrectAnswer, selectedAnswer }) => {
    if (selectedAnswer == null) {
      unanswered++
    } else if (isCorrectAnswer) {
      correct++
    } else {
      incorrect++
    }
  })

  return { correct, incorrect, unanswered }
}
