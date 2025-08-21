import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import emojiList from "./libs/emojiList.json"
import LineResult from './components/LineResult'

function App() {
  const [search, setSearch] = useState("")
  console.log("search : "+search);

  return (
    <>
      <Header setSearch={setSearch} search={search} />
      { 
        emojiList.map( (emoji, index) => {
          // création tableau des keywords strings de chaque emoji
          const emojiTab = emoji.keywords.split(" ");
         
          return (
            // check si le tableau contient la recherche pour afficher le component
            emojiTab.includes(search) &&
            <LineResult key={index} emoji={emoji} />
          )
        })
      }
      
    </>
  )
}

export default App
