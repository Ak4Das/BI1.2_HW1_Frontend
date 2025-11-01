import { useState } from "react"

export default function AddMovieForm() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishedYear: "",
    genre: "",
    language: "",
    country: "",
    rating: "",
    summary: "",
    coverImageUrl: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        name === "publishedYear" || name === "rating" ? parseInt(value) : value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch(
        "https://book-data-backend.vercel.app/addBook",
        {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )

      if (!response.ok) {
        throw "Failed to add Book"
      } else {
        const data = await response.json()
        console.log("Added Book", data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title: </label>
      <br />
      <input type="text" name="title" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="author">Author: </label>
      <br />
      <input type="text" name="author" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="publishedYear">PublishedYear: </label>
      <br />
      <input type="text" name="publishedYear" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="genre">Genre: </label>
      <br />
      <input type="text" name="genre" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="language">Language: </label>
      <br />
      <input type="text" name="language" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="country">Country: </label>
      <br />
      <input type="text" name="country" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="rating">Rating: </label>
      <br />
      <input type="text" name="rating" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="summary">Summary: </label>
      <br />
      <input type="text" name="summary" onChange={handleChange} />
      <br />
      <br />
      <label htmlFor="coverImageUrl">CoverImageUrl: </label>
      <br />
      <input type="text" name="coverImageUrl" onChange={handleChange} />
      <br />
      <br />
      <button>submit</button>
    </form>
  )
}
