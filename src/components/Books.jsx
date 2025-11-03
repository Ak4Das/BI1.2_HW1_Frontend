import useFetch from "../useFetch"
import { useState } from "react"

const Books = () => {
  const [successMessage, setSuccessMessage] = useState("")
  const { data, loading, error } = useFetch(
    "https://book-data-backend.vercel.app/books"
  )
  // console.log(data)

  const deleteABook = async (bookId) => {
    try {
      const response = await fetch(
        `https://book-data-backend.vercel.app/books/${bookId}`,
        { method: "DELETE" }
      )
      if (!response.ok) {
        console.log("Failed to delete that Book"); 
      }
      const data = await response.json()
      if (data) {
        setSuccessMessage("Book Deleted Successfully.")
        window.location.reload()
      }
    } catch (error) {
      throw error
    }
  }

  return (
    <div>
      <h1>All books</h1>
      {loading && <p>Loading...</p>}
      <ul>
        {data?.map((book) => (
          <li key={book._id}>
            {book.title}
            <button onClick={() => deleteABook(book._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>{successMessage}</p>
    </div>
  )
}

export default Books
