import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import getQuestions from '../services/getQuestions'

export const useQuestionsStore = create(persist((set, get) => {
  return {
    questions: [],
    currentQuestion: 0,
    getQuestionStore: async ({ limit, categoryId }) => {
      const questions = await getQuestions({ limit, categoryId })
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
    },
    nextQuestion: () => {
      const { currentQuestion, questions } = get()
      const nextQuestion = currentQuestion + 1
      if (nextQuestion < questions.length) {
        set({ currentQuestion: nextQuestion })
      }
    },
    previousQuestion: () => {
      const { currentQuestion } = get()
      const previousQuestion = currentQuestion - 1
      if (previousQuestion >= 0) {
        set({ currentQuestion: previousQuestion })
      }
    },
    resetGame: () => {
      set({ questions: [], currentQuestion: 0 })
    }
  }
},
{
  name: 'questions'
}
))
