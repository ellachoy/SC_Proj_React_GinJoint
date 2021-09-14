import './App.css';
import Header from './components/Header';
import SectionEins from './components/SectionEins';



function App() {
  return (
    <div className="App">
      <Header />
      <SectionEins Classic = {'A CLASSIC'} Gin = {'GIN JOINT'} city ={'New York'}/>
      
    </div>
  );
}

export default App;
