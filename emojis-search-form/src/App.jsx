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
        search &&
        emojiList.map( (emoji, index) => {
          // création fonction regex de recherche de keywords commencant par la recherche
          const regex = new RegExp(`^${search}`, 'i');
          //console.log(regex);
          return (           
            // check si les keywords emojis commencent par la recherche grâce à la fonction test du regex
            regex.test(emoji.keywords) &&
            <LineResult key={index} emoji={emoji} />
          )
        })
      }
    </>
  )
}

export default App
