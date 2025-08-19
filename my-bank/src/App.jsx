import './App.css'
import Header from './components/Header'
import logo from "./assets/logo-cm.png"
import Account from './components/Account'
import compte from "./libs/transactions.json"

function App() {

  return (
    <>
      <Header logo={logo} username="etienne" />
      <main>
        <div className="wrapper flexContainer">
          {
          compte.map( (e, index) => {
            return <Account key={index} compte={e} />
          })
          }
        </div>
      </main>
    </>
  )
}

export default App
