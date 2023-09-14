export function Button ({ children, onClick, props }) {
  return (
    <button
      className='text-base px-4 py-2 border-2 rounded-md flex justify-between items-center gap-2 text-center bg-violet-700 enabled:hover:scale-105'
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
