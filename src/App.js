import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Gallery from './components/Gallery';
import Contact from "./components/Contact";
import UpButton from "./components/UpButton";
import Palette from './components/shared/Palette';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Palette />
      <HomePage />
      <UpButton />
      <Gallery />
      <About />
      <Contact />
    </div>
  );
}

export default App;