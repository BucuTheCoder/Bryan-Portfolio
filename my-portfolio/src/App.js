import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import styles from './Styles/styles.css';
import sectionStyle from './Styles/sectionStyle.css';

function App() {
  return (
    <main>
      <header>
        <Navbar />
      </header>
    
        <About /> 
        <Skills />

   
    </main>

  );
}

export default App;
