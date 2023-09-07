export default async function getCategories () {
  try {
    const response = await fetch('http://localhost:5173/categories.json')
    if (!response.ok) {
      throw new Error('failed to connect API')
    }
    const { trivia_categories } = await response.json()

    const categories = trivia_categories.map(category => {
      const { id, name } = category
      const categoryName = name.split(': ')
      if (categoryName.length > 1) {
        return { id, name: categoryName[1] }
      }
      return category
    })

    return categories
  } catch (error) {
    throw new Error(error.message)
  }
}
