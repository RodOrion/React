import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Jobs from './components/Jobs'

function App() {

  return (
    <>
      <Header />
      <Jobs num={9} />
      <Footer text="Made with React at Le Reacteur By Nono" />
    </>
  )
}

export default App
