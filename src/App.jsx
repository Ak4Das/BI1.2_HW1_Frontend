import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Books from "./components/Books"
import BooksByTitle from "./components/BooksByTitle"
import BooksByAuthor from "./components/BooksByAuthor"
import AddMovieForm from "./components/AddMovieForm"

function App() {
  return (
    <main>
      <AddMovieForm/>
      <Books />
      <BooksByTitle title="Shoe Dog"/>
      <BooksByAuthor author="Harper Lee"/>
    </main>
  )
}

export default App
