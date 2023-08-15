import { useEffect, useRef } from 'react'

export function Text ({ value, props }) {
  const questionText = useRef()

  useEffect(() => {
    questionText.current.innerHTML = value
  }, [value])
  return (
    <div
      {...props}
      ref={questionText}
    />
  )
}
