import './App.css';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Alan Cuenca</h1>
        <h2>Web Developer</h2>
      </header>
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
