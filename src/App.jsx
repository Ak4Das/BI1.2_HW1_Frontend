import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Books from "./components/Books"
import BooksByTitle from "./components/BooksByTitle"
import BooksByAuthor from "./components/BooksByAuthor"
import AddBookForm from "./components/AddBookForm"

function App() {
  return (
    <main>
      <AddBookForm/>
      <Books />
      {/* <BooksByTitle title="Shoe Dog"/> */}
      {/* <BooksByAuthor author="Harper Lee"/> */}
    </main>
  )
}

export default App
