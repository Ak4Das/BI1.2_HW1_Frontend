import useFetch from "../useFetch"

const BooksByAuthor = ({ author }) => {
  const { data, loading, error } = useFetch(
    `https://book-data-backend.vercel.app/books/author/${author}`
  )
  // console.log(data)

  return data ? (
    <div>
      <h1>Books by Harper Lee</h1>
      <ul>
        {data.map((book) => (
          <li key = {book._id}>{book.title}</li>
        ))}
      </ul>
    </div>
  ) : (
    loading && <p>Loading...</p>
  )
}

export default BooksByAuthor

