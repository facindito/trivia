export const Next = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-6.999a2 2 0 0 0 -2 2v4l.005 .15a2 2 0 0 0 1.995 1.85l6.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z' strokeWidth='0' fill='currentColor' />
  </svg>
)
export const Previous = (props) => (
  <svg width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round' {...props}>
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h7a2 2 0 0 0 2 -2v-4l-.005 -.15a2 2 0 0 0 -1.995 -1.85l-7 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z' strokeWidth='0' fill='currentColor' />
  </svg>
)

export const Correct = (props) => (
  <svg {...props} width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <path d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z' />
    <path d='m9 12 2 2 4-4' />
  </svg>
)

export const Incorrect = (props) => (
  <svg {...props} width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <circle cx='12' cy='12' r='10' />
    <path d='m15 9-6 6' />
    <path d='m9 9 6 6' />
  </svg>
)

export const Unanswered = (props) => (
  <svg {...props} width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <circle cx='12' cy='12' r='10' />
    <path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3' />
    <path d='M12 17h.01' />
  </svg>
)
