import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DownHeroSection from './components/DownHeroSection';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';

function App() {
  return (
    <div className="App">
      <div className='w-full bg-[#013539] min-h-[98.5vh] rounded-b-[4rem]'>
        <Header />
        <HeroSection />
      </div>

      <DownHeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default App;
