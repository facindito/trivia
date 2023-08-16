import { create } from 'zustand'
import getQuestions from '../services/getQuestions'

export const useQuestionsStore = create((set, get) => ({
  questions: [],
  currentQuestion: 0,
  getQuestionStore: async (limit) => {
    const questions = await getQuestions({ limit })
    set({ questions })
  }
}))
