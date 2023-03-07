import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Technologies from './components/Technologies/Technologies';
import Timeline from './components/Timeline/Timeline'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
