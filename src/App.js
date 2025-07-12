import { useEffect, useState } from 'react';
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Gallery from './components/Gallery';
import Contact from "./components/Contact";
import Palette from './components/shared/Palette';
import { useInView } from 'react-intersection-observer';

function App() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const [isHalfway, setIsHalfway] = useState(false);
  
  // const switchCondition = isHalfway || window.innerWidth < 768;

  useEffect(() => {
    inView && window.innerWidth > 768 ? setIsHalfway(false) : setIsHalfway(true);
  }, [inView, isHalfway]);

  return (
    <div className="App">
      <NavBar isHalfway={isHalfway} />
      <HomePage ref={ref} />
      <Gallery />
      <About />
      <Contact />
    </div>
  );
}

export default App;