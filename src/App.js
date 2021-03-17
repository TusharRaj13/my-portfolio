import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import HeaderContent from './components/HeaderContent';
import AboutContent from './components/AboutContent';
import ContactContent from './components/ContactContent';
import ProjectContent from './components/ProjectContent';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeaderContent/>
      <AboutContent/>
      <ProjectContent/>
      <ContactContent/>
    </div>
  );
}

export default App;
