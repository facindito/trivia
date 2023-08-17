import { create } from 'zustand'
import getQuestions from '../services/getQuestions'

export const useQuestionsStore = create((set, get) => ({
  questions: [],
  currentQuestion: 0,
  getQuestionStore: async (limit) => {
    const questions = await getQuestions({ limit })
    set({ questions })
  },
  selectAnswer: (questionId, answerIndex) => {
    const { questions } = get()
    const newQuestions = structuredClone(questions)
    const questionIndex = newQuestions.findIndex(question => question.id === questionId)
    const questionInfo = newQuestions[questionIndex]

    const isCorrectAnswer = questionInfo.correctAnswer === answerIndex

    newQuestions[questionIndex] = {
      ...questionInfo,
      isCorrectAnswer,
      selectedAnswer: answerIndex
    }

    set({ questions: newQuestions })
  }
}))
