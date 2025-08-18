import './App.css'
import Aside from './components/Aside'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import aboutme from './assets/img/avatar_g9ob1r.webp'

function App() {

  return (
    <div className='wrapper'>
        <Header />
        <section className='flexContainer'>
          <Main />
          <Aside title="ABOUT ME" img={aboutme} alt="about me" content="Cras interdum pharetra felis eu faucibus." />
        </section>
        <Footer text="Made with React at Le Reacteur By Nono" />
    </div>
  )
}

export default App
