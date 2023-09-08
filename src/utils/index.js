export function getBackgroundColor (index, info) {
  const { correctAnswer, selectedAnswer } = info
  if (selectedAnswer == null) return 'backdrop-blur-md bg-white/10 hover:border-violet-600'
  if (index !== correctAnswer && index !== selectedAnswer) return 'backdrop-blur-md bg-white/10 opacity-40'
  if (index === correctAnswer) return 'bg-green-600 border-green-600'
  if (index === selectedAnswer) return 'bg-red-600 border-red-600'
  return 'backdrop-blur-md bg-white/10'
}
