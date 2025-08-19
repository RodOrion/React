import './App.css'
import Section from './components/Section'
import progs from "./libs/programmes.json"
import logo from "./assets/logo-m6.png"

function App() {

  return (
    <main>
      <header>
        <img src={logo} alt="" />
      </header>
      {
        progs.map( (e, index) => {
          return <Section key={index} infos={e} />
        })
      }
    </main>
  )
}

export default App
