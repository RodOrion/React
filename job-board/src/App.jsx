import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import tabJobs from "./libs/jobs.json";

function App() {
  return (
    <>
      <Header />
      <Jobs num={tabJobs} />
      <Footer />
    </>
  );
}

export default App;
