import './App.css';
import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from './components/Footer';
import Cardinfo from './components/Cardinfo'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
      <Cardinfo />
      <Footer / >
      
    </div>
  );
}

export default App;
