import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="App">
      <div className='w-full bg-[#013539] min-h-[98.5vh] rounded-b-[4rem]'>
        <Header />
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
