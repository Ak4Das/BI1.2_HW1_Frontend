import useFetch from "../useFetch"

const Books = () => {
  const { data, loading, error } = useFetch("https://book-data-backend.vercel.app/books")
  // console.log(data)

  return (
    <div>
      <h1>All books</h1>
      <ul>
        {data?.map((book) => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Books