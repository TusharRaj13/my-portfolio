// import logo from './logo.svg';
import './App.css';
import { initializeIcons } from '@fluentui/font-icons-mdl2'
import NavBar from './components/NavBar';
import HeaderContent from './components/HeaderContent';
import AboutContent from './components/AboutContent';
import ContactContent from './components/ContactContent';
import ProjectContent from './components/ProjectContent';
// import { loadTheme, getTheme } from '@fluentui/react';



function App() {
  initializeIcons();
  // loadTheme({
  //   palette: {
  //     themePrimary: '#ff0000',
  //     themeLighterAlt: '#eff6fc',
  //     themeLighter: '#deecf9',
  //     themeLight: '#c7e0f4',
  //     themeTertiary: '#71afe5',
  //     themeSecondary: '#2b88d8',
  //     themeDarkAlt: '#106ebe',
  //     themeDark: '#005a9e',
  //     themeDarker: '#004578',
  //     neutralLighterAlt: '#f8f8f8',
  //     neutralLighter: '#f4f4f4',
  //     neutralLight: '#eaeaea',
  //     neutralQuaternaryAlt: '#dadada',
  //     neutralQuaternary: '#d0d0d0',
  //     neutralTertiaryAlt: '#c8c8c8',
  //     neutralTertiary: '#c2c2c2',
  //     neutralSecondary: '#858585',
  //     neutralPrimaryAlt: '#4b4b4b',
  //     neutralPrimary: '#333333',
  //     neutralDark: '#272727',
  //     black: '#1d1d1d',
  //     white: '#ffffff',
  //   },
  // });
  
  return (
    <div className="App">
      <NavBar/>
      <HeaderContent/>
      <AboutContent/>
      <ProjectContent/>
      <ContactContent/>
      <footer>
        <div> &copy; {new Date().getFullYear()}. All Rights Reserved.</div>
        <div> Build with <span style={{color:"red"}}>❤</span> by Tushar Raj Gupta</div>
      </footer>
    </div>
  );
}

export default App;
