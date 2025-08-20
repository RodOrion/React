import './App.css'
import Section from './components/Section'
import movies from "./libs/movies_rnexgr.json"
import logo from "./assets/logo-netflix.jpg"

function App() {

  return (
    <main>
    <img src={logo} alt="logo netflix" className='logo' />
    { movies.map( (el, index) => {
      return <Section key={`${el.category} ${index}`} category={el.category} images={el.images} />
    }) }
    </main>
  )
}

export default App
