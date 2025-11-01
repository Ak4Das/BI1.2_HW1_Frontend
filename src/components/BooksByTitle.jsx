import useFetch from "../useFetch"

const BookByTitle = ({ title }) => {
  const { data, loading, error } = useFetch(
    `https://book-data-backend.vercel.app/books/title/${title}`
  )
  // console.log(data)

  return data ? (
    <div>
      <h1>{data.title}</h1>
      <p>Author: {data.author}</p>
      <p>Country: {data.country}</p>
      <p>Genre: {data.genre.join(", ")}</p>
      <p>Language: {data.language}</p>
      <p>Publish Year: {data.publishedYear}</p>
      <p>Rating: {data.rating}</p>
      <p>Summary: {data.summary}</p>
      <img src={data.coverImageUrl} alt="Cover Image Url" />
    </div>
  ) : (
    loading && <p>Loading...</p>
  )
}

export default BookByTitle